$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        $(".header, .right-nav").addClass("is-active");
    } else {
        $(".header, .right-nav").removeClass("is-active");
    }
});

$('.js-gnb-btn').on('click',function(e){
    e.preventDefault();
    if($(this).hasClass('is-active')){
        $(this).removeClass('is-active');
        $('.gnb').removeClass('is-active');
        $('.right-nav').removeClass("type-white");
    }else{
        $(this).addClass('is-active');
        $('.gnb').addClass('is-active');
        $('.right-nav').addClass("type-white");
    }
    
});

$('.gnb-depth1__link').on('click',function(e){
    e.preventDefault();
    var depth1 = $(this).parents('.gnb-depth1__item')
    var depth2 = $(this).parents('.gnb-depth1__item').find('.gnb-depth2__list');
    $('.gnb-depth2__list').removeClass('is-active');
    if(depth1.hasClass('is-active')){
        depth1.removeClass('is-active');
        depth2.removeClass('is-active');
    }else{
        depth2.addClass('is-active');
        depth1.addClass('is-active').siblings().removeClass('is-active');
    }
})
