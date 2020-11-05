
$(document).ready(function(){
    $('.js-celebrity1').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots:false,
        arrows:false,
        responsive: [
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:true,
                    dotsClass:'celebrity__dot slide-dot'
                }
            }
        ]
    });

    //포커스픽
    // $('.focus__list').slick({
    //     autoplay: true,
    //     prevArrow: '.js-focus-prev',
    //     nextArrow: '.js-focus-next',
    //     slidesToShow:3,
    //     slidesToScroll: 3,
    //     centerPadding:'10px',
    //     infinite: true,
    //     dots:true,
    //     dotsClass:'focus__dot slide-dot',
    //     responsive: [
    //         {
    //             breakpoint: 993,
    //             arrows:false,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2
    //             }
    //         },
    //         {
    //             breakpoint: 681,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // });

    //collection
    var collectionNum = 0;
    var collectionTotal = $('.collection-img__item').length -1;
    $('.js-collection-next').on('click',function(e){
        e.preventDefault();
        if (collectionNum < collectionTotal){
            collectionNum++;
        }else{
            collectionNum = 0;
        }
        $('.collection-img__item').removeClass('is-past').each(function () {
            var itemClass = $(this).attr('class');
            $(this).attr('class', itemClass.replace('is-active', 'is-past'));
        });
        $('.collection-txt__item').removeClass('is-active').eq(collectionNum).addClass('is-active');
        $('.collection-img__item').removeClass('is-active').eq(collectionNum).addClass('is-active');
        $('.collection-nav__item').removeClass('is-active').eq(collectionNum).addClass('is-active');
        setTimeout(function(){
            $('.collection-img__item').removeClass('is-past')
        },500)       
    });

    $('.js-collection-prev').on('click', function (e) {
        e.preventDefault();
        if (collectionNum > 0) {
            collectionNum--;
        } else {
            collectionNum = collectionTotal;
        }
        $('.collection-img__item').removeClass('is-past').each(function () {
            var itemClass = $(this).attr('class');
            $(this).attr('class', itemClass.replace('is-active', 'is-past'));
        });
        $('.collection-txt__item').removeClass('is-active').eq(collectionNum).addClass('is-active');
        $('.collection-img__item').removeClass('is-active').eq(collectionNum).addClass('is-active');
        $('.collection-nav__item').removeClass('is-active').eq(collectionNum).addClass('is-active');   
        setTimeout(function () {
            $('.collection-img__item').removeClass('is-past')
        }, 500) 
    });

    $('.collection-nav__item').on('click',function(e){
        e.preventDefault();
        collectionNum = $(this).index();
        $('.collection-img__item').removeClass('is-past').each(function () {
            var itemClass = $(this).attr('class');
            $(this).attr('class', itemClass.replace('is-active', 'is-past'));
        });
        $('.collection-txt__item').removeClass('is-active').eq(collectionNum).addClass('is-active');
        $('.collection-img__item').removeClass('is-active').eq(collectionNum).addClass('is-active');
        $('.collection-nav__item').removeClass('is-active').eq(collectionNum).addClass('is-active');
        setTimeout(function () {
            $('.collection-img__item').removeClass('is-past')
        }, 500)
    });
});
