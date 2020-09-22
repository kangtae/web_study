$(document).ready(function(){
   var guideTit = $('.guide-tit');
   var titNum = guideTit.length;
   for (var i = 0; i < titNum; i++) {
       var guideTxt = guideTit.eq(i).text();
       guideTit.eq(i).attr('id',i+1);
       $('.g-gnb__depth2-list').append('<li class="g-gnb__depth2-item"><a href="" class="g-gnb__depth2-link">'+guideTxt+'</a></li>');
   }
   $('.g-gnb__btn').on('click',function(e){
       e.preventDefault();
       $(this).toggleClass('is-active');
       var gnbW = $('.g-gnb').width();
       if ($(this).hasClass('is-active')) {
           $('.g-gnb').css('left',-gnbW);
           $(this).text('메뉴 보기');
       }else{
           $('.g-gnb').css('left','0');
           $(this).text('메뉴 닫기');
       }
   });

   $('.g-gnb__depth2-link').on('click',function(e){
       e.preventDefault();
       var nowNum = $(this).parents('.g-gnb__depth2-item').index();
       var offset = guideTit.eq(nowNum).offset();
       $('html, body').animate({scrollTop : offset.top +5}, 400);
   });


   $(window).on('scroll', function() {
       $('.guide-tit').each(function() {
           if($(window).scrollTop() >= $(this).offset().top) {
               var id = $(this).attr('id');
               $('.g-gnb__depth2-item').removeClass('is-active');
               $('.g-gnb__depth2-item').eq(id-1).addClass('is-active');
           }
       });
   });
 });
