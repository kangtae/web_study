$('.js-gnb-btn').on('click',function(e){
    e.preventDefault();
    if($(this).hasClass('is-active')){
        $(this).removeClass('is-active');
        $('.gnb').removeClass('is-active');
    }else{
        $(this).addClass('is-active');
        $('.gnb').addClass('is-active');
    }
    
});

$('.gnb-depth1__link').on('click',function(e){
    e.preventDefault();
    var depth2 = $(this).parents('.gnb-depth1__item').find('.gnb-depth2__list');
    $('.gnb-depth2__list').removeClass('is-active');
    if(depth2.hasClass('is-active')){
        depth2.removeClass('is-active');
    }else{
        depth2.addClass('is-active');
    }
})
