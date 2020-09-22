$(document).ready(function(){
    var planSlider = $('.main-plan__item').length;
    if(planSlider <= 5){
		$('.js-plan-prev, .js-plan-next').hide();
	}else{
		$('.js-plan-prev, .js-plan-next').show();
	}
    // 기획 슬라이더
    $('.js-plan-slider').slick({
        autoplay: true,
        prevArrow: '.js-plan-prev',
        nextArrow: '.js-plan-next',
        infinite: true,
        swipe:false,
        slidesToShow: 5
    });

    // 배너 슬라이더
    var recommendProduct = $('.js-recommend-product').slick({
        autoplay: false,
        arrows: false,
        infinite: true,
        speed: 400,
        swipe:false,
        slidesToShow:1,
        zIndex:10
    });
    var recommendItem = $('.js-recommend-banner .main-recommend__item').length -1;
    var recommendBanner = $('.js-recommend-banner').slick({
        autoplay: false,
        prevArrow: '.js-recommend-prev',
        nextArrow: '.js-recommend-next',
        infinite: true,
        slidesToShow:1,
        speed: 400,
        swipe:false,
        zIndex:10
    });
    recommendBanner.on('swipe', function(event, slick, direction){
        if(direction=='right'){
            recommendBanner.slick("slickPrev");
            recommendProduct.slick("slickPrev");
        }
        if(direction=='left'){
            recommendBanner.slick("slickNext");
            recommendProduct.slick("slickNext");
        }
    });
    recommendProduct.on('swipe', function(event, slick, direction){
        if(direction=='right'){
            recommendBanner.slick("slickPrev");
            recommendProduct.slick("slickPrev");
        }
        if(direction=='left'){
            recommendBanner.slick("slickNext");
            recommendProduct.slick("slickNext");
        }
    });
    $('.js-recommend-next').on('click',function(){
        recommendBanner.slick("slickNext");
        recommendProduct.slick("slickNext");
    });
    $('.js-recommend-prev').on('click',function(){
        recommendBanner.slick("slickPrev");
        recommendProduct.slick("slickPrev");
    });
});
