var gulp = require('gulp'),
  merge = require('merge-stream'),
  clean = require('gulp-clean'),
  connect = require('gulp-connect'),
  watch = require('gulp-watch'),
  plumber = require('gulp-plumber'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  ejsMonster = require('gulp-ejs-monster'),
  prettify = require('gulp-prettify'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant')

var fs = require('fs');

// Path
var src = './public/src';
var dist = './public/dist';

// ejs option
var ejsOptions = {
  layouts: src+'/ejs/_layouts',
  widgets: src+'/ejs/_widgets',
  includes: src+'/ejs/_includes',
  requires: src+'/ejs/_requires',
  delimiter: '%',
  localsName: 'locals',
  locals: {
    customProp: 'customProp'
  }
};

// copy path
var copypath = [
  src+'/**/*.html',
  src+'/**/css/**/*',
  src+'/**/js/**/[^_]*',
  src+'/**/images/**/*.svg',
  src+'/**/fonts/**/*',
  src+'/**/libs/**/*'
]

// Server
gulp.task('serve', function() {
  connect.server({
    root: dist,
    port: 8000,
    livereload: true,
    open: {
      browser: 'chrome'
    }
  });
});

//sass -> css
gulp.task('sass', function () {
  return gulp.src(src+'/scss/**/*.scss')
  .pipe( plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
      }
    }) )
  .pipe(sourcemaps.init())
  .pipe(sass({'outputStyle':'expanded'}).on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 3 versions','IE 9','android 2.3'],
    cascade: false
  }))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest(dist+'/css'))
  .pipe(connect.reload())
});

// ejs -> HTML
gulp.task('ejs', function() {
  var view = gulp.src([src+'/ejs/**/*.ejs',  '!' + src+'/ejs/**/_*.ejs'])
    .pipe(ejsMonster(ejsOptions).on('error', ejsMonster.preventCrash))
    .pipe(prettify())
    .pipe(plumber({
        errorHandler: function (error) {
          console.log(error.message);
          this.emit('end');
        }
    }))
    .pipe(gulp.dest(dist+'/html'))
    .pipe(connect.reload())
    
  var index = gulp.src(src+'/*.ejs')
    .pipe(ejsMonster(ejsOptions).on('error', ejsMonster.preventCrash))
    .pipe(prettify())
    .pipe(plumber({
        errorHandler: function (error) {
          console.log(error.message);
          this.emit('end');
        }
    }))
    .pipe(gulp.dest(dist))
    .pipe(connect.reload())
  return merge(view, index)
});

// image
gulp.task('imgmin', function() {
  gulp
    .src([src+'/images/**/*.{png,jpg,gif}'])
    .pipe(imagemin({
      progressive: true,
      interlaced:true,
      use: [pngquant()]
    }))
    .pipe(gulp.dest(dist+'/images'))
    .pipe(connect.reload())
});

// copy
gulp.task('copy', function () {
  gulp
    .src(copypath)
    .pipe(gulp.dest(dist))
    .pipe(connect.reload())
});

//bootstrap
gulp.task('bootstrap-sass', function () {
  return gulp.src(src+'/libs/bootstrap/scss/**/*.{scss,sass}')
  .pipe( plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
      }
    }) )
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest(dist+'/libs/bootstrap/css'))
  .pipe(connect.reload())
});

//clean 작업 설정
gulp.task('clean', function(){
  return gulp.src([dist+'/*', '!' + dist+'/.git', '!' + dist+'/.svn'], {read: false})
    .pipe(clean());
});

// Watch task
gulp.task('watch',[], function() {
  watch([src+'/**/*.ejs',src+'/**/*.json'], function() {
    gulp.start('ejs');
  });
  watch(src+'/scss/**/*.{scss,sass}', function() {
    gulp.start('sass');
  });
  watch(src+'/images/**/*.{png,jpg,gif}', function() {
    gulp.start('imgmin');
  });
  watch(copypath, function() {
    gulp.start('copy');
  });
  watch(src+'/libs/bootstrap/scss/**/*.{scss,sass}', function() {
    gulp.start('bootstrap-sass');
  });
});

gulp.task('default', ['serve','sass','ejs','imgmin','copy','bootstrap-sass','watch']);
