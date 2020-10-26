
$(document).ready(function(){
    $('.js-celebrity1').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots:false,
        arrows:false,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    });
});
