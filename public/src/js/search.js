
$(document).ready(function(){
    var planSlider = $('.search-header__item').length;
    if (planSlider <= 3) {
        $('.search-header__btn').hide();
    } else {
        $('.search-header__btn').show();
    }
    $('.js-search-slider').slick({
        // autoplay: true,
        prevArrow: '.js-search-prev',
        nextArrow: '.js-search-next',
        slidesToShow: 1,
        infinite: false
    });
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    //레인지 슬라이더1
    function driveSlider(){
        var select1 = document.getElementById('drive-select1');

        // Append the option elements
        for (var i = 0; i <= 20; i++) {

            var option = document.createElement("option");
            var num = i;
            option.text = numberWithCommas(num) + '만 km';
            option.value = num*10000;

            select1.appendChild(option);
        }

        var select2 = document.getElementById('drive-select2');

        for (var i = 0; i <= 20; i++) {

            var option2 = document.createElement("option");
            var num = i;

            option2.text = numberWithCommas(num) + '만 km';
            option2.value = num*10000;

            select2.appendChild(option2);
        }

        var html5Slider = document.getElementById('drive-slider');
        var driveMin = -10000;
        var driveMax = 210000;
        noUiSlider.create(html5Slider, {
            start: [driveMin, driveMax],
            step: 10000,
            connect: true,
            range: {
                'min': driveMin,
                'max': driveMax
            }
        });
        html5Slider.noUiSlider.on('update', function (values, handle) {
            var value = values[handle];
            var value2 = html5Slider;
            if (handle) {
                if(Math.round(value) == driveMin){
                    select2.value = ""
                }else if(Math.round(value) == driveMax){
                    select2.value = ""
                }else{
                    select2.value = Math.round(value);
                }
            } else {
                if(Math.round(value) == driveMin){
                    select1.value = ""
                }else if(Math.round(value) == driveMax){
                    select1.value = ""
                }else{
                    select1.value = Math.round(value);
                }
            }
        });

        select1.addEventListener('change', function () {
            html5Slider.noUiSlider.set([this.value, null]);
        });

        select2.addEventListener('change', function () {
            html5Slider.noUiSlider.set([null, this.value]);
        });
    }

    function priceSlider(){
        var select1 = document.getElementById('price-select1');

        // Append the option elements
        for (var i = 0; i <= 100; i++) {
            var option = document.createElement("option");
            var num = i * 100;
            if(i == 100){
                option.text = '1억원';
                option.value = num;
                select1.appendChild(option);
            }else{
                option.text = numberWithCommas(num) + '만원';
                option.value = num;
                select1.appendChild(option);
            }

        }

        var select2 = document.getElementById('price-select2');

        for (var i = 0; i <= 100; i++) {

            var option2 = document.createElement("option");
            var num = i * 100;
            if(i == 100){
                option2.text = '1억원';
                option2.value = num;

                select2.appendChild(option2);
            }else{
                option2.text = numberWithCommas(num) + '만원';
                option2.value = num;

                select2.appendChild(option2);
            }

        }

        var html5Slider = document.getElementById('price-slider');
        var priceMin = -100;
        var priceMax = 10100;
        noUiSlider.create(html5Slider, {
            start: [priceMin, priceMax],
            connect: true,
            step:100,
            range: {
                'min': priceMin,
                'max': priceMax
            }
        });





        html5Slider.noUiSlider.on('update', function (values, handle) {

            var value = values[handle];

            if (handle) {
                if(Math.round(value) == priceMin){
                    select2.value = ""
                }else if(Math.round(value) == priceMax){
                    select2.value = ""
                }else{
                    select2.value = Math.round(value);
                }
            } else {
                if(Math.round(value) == priceMin){
                    select1.value = ""
                }else if(Math.round(value) == priceMax){
                    select1.value = ""
                }else{
                    select1.value = Math.round(value);
                }
            }
        });

        select1.addEventListener('change', function () {
            html5Slider.noUiSlider.set([this.value, null]);
        });

        select2.addEventListener('change', function () {
            html5Slider.noUiSlider.set([null, this.value]);
        });
    }
    priceSlider();
    driveSlider();

    $(".js-directly").on('click', function() {
        if ( $(this).prop('checked') ) {
            $(this).parents('.period-style2').addClass("is-directly");
        } else {
            $(this).parents('.period-style2').removeClass("is-directly");
         }
    });

    $(".js-tag-check").on('click', function() {
        if ( $(this).prop('checked') ) {
            $(this).parents('.tag__outer-item').find('.tag__outer-wrap').addClass('is-active');
            $(this).parents('.tag__inner-item').find('.tag__inner-wrap').addClass('is-active');
            if($(this).parent().attr('class') == 'tag__inner-item'){
                $(this).parents('.tag').addClass('is-block');
            }
        } else {
            $(this).parents('.tag__outer-item').find('.tag__outer-wrap').removeClass('is-active');
            $(this).parents('.tag__inner-item').find('.tag__inner-wrap').removeClass('is-active');
         }
    });

    $('.js-tag-toggle').on('click',function(){
        $(this).parents('.tag__box').toggleClass('is-arrow').find('.tag__body').slideToggle(500);
    });

    $('.js-more').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('is-active').parents('.tag__box').find('.tag__outer-list').toggleClass('is-more')
    });

    $(".js-custom-scrollbar").mCustomScrollbar({
        theme:"minimal-dark"
    });


    (function(){
        var availableCity = ["서울아","부산아","대구아","광주아","울산아","BMW올뉴5시리즈540i xDrive"];

        var $elem = $(".js-tag-search").autocomplete({
            source:availableCity,
            //  source:availableCity,
            position: {
                my: "left top+4",
                at: "left bottom",
                collision: "none"
            },
            autoFocus: true,
            response: function(event, ui) {
                //            console.log(ui);

            },
            select: function(event, ui) {
            //            console.log("Selected:" + ui.item.value);
            },
            focus: function(event, ui) {
                return false;
            },
            open: function(event, ui) {
        		$(this).autocomplete("widget").css({
                    "width": ($(this).outerWidth() + "px")
                });
            }
        }),
        elemAutocomplete = $elem.data("ui-autocomplete") || $elem.data("autocomplete");
        if (elemAutocomplete) {
            elemAutocomplete._renderItem = function (ul, item) {
                var newText = String(item.value).replace(
                new RegExp(this.term, "gi"),
                '<span class="search-match">$&</span>');
                return $("<li></li>")
                .data("item.autocomplete", item)
                .append("<div>" + newText + "</div>")
                .appendTo(ul);
            };
        }
    })();

});//ready끝
