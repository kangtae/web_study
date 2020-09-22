$(window).on("load resize", function () {
    var footerH = $('.footer').outerHeight();
    $('body').css('padding-bottom',footerH);
});
$(document).ready(function(){
//자동완성
    try{
        (function(){
            var availableCity = ["서울아","부산아","대구아","광주아","울산아","BMW올뉴5시리즈540i xDrive"];

            var $elem = $(".js-total-search").autocomplete({
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
                    .append("<div>" + newText + "<span class='search-model'>모델</span></div>")
                    .appendTo(ul);
                };
            }
        })();

        //박스 높이값 맞추기
        $('.js-height, .js-height2').matchHeight({
        	byRow: true,
        	target: null
        });
    }catch(error){}




    //히스토리
    $('.js-history-open').on('click',function(e){
        e.preventDefault();
        $('.history').addClass('is-active');
        $('.dim').fadeIn(300);
    });
    $('.js-history-close').on('click',function(e){
        e.preventDefault();
        $(this).parents('.history').removeClass('is-active');
        $('.dim').fadeOut(300);
    });


    function historyCheck(){
        var historyProduct = $(".history-product__item .checkbox-only");
        var historyAll = $('#chkAll')
        $(document).on('click','#chkAll',function(){
			var productItem = $(".product__item .checkbox-only");
            if($(this).is(':checked')){
                historyProduct.prop("checked",true);
                try{
					productItem.prop("checked",true);
                    mypageAll.prop("checked",true);
                }catch (e){}
            }else{
                historyProduct.prop("checked",false);
                try{
					productItem.prop("checked",false);
                    mypageAll.prop("checked",false);
                }catch (e){}
            }
        });
        try{
            var mypageAll = $('#mypageChkAll');
        }catch (e){}
        historyProduct.on('click',function(){
            var productChkNum = historyProduct.length;
            if(historyAll.is(':checked')){
                if($(".history-product__item .checkbox-only:checked").length == productChkNum){
                    historyProduct.prop("checked",true);
                }else{
                    historyAll.prop("checked",false);
                }
            }
            try{
                var prodcutId = $(this).attr('id').replace(/[^0-9]/g, '');
                if($(this).is(":checked")){
                    $('#mypageChk' + prodcutId + '').prop("checked", true);
                }else{
                    $('#mypageChk' + prodcutId + '').prop("checked", false);
                }
            }catch (e){}
        });

        $('.history-product__item .checkbox-only, #chkAll').change(function(){
            var isCheck = $('.history-product__item .checkbox-only:checked').length;
            if(isCheck != 0){
                try{
                    $('.mypage').find('.button-v4').addClass('is-active').removeClass('is-disabled');
                }catch (e){}
                $('.history__scroll').find('.button-v4').addClass('is-active').removeClass('is-disabled');
            }else{
                try{
                    $('.mypage').find('.button-v4').removeClass('is-active').addClass('is-disabled');
                }catch (e){}
                $('.history__scroll').find('.button-v4').removeClass('is-active').addClass('is-disabled');
            }
        });
        //삭제
        $('.js-check-remove').on('click',function(e){
            e.preventDefault();
            $('.history-product__item .checkbox-only:checked').parents('.history-product__item').remove();
            try{
                $('.product__item .checkbox-only:checked').parents('.product__item').remove();
            }catch (e){}

            var isCheck = $('.history-product__item .checkbox-only:checked').length;
            var productNum = $('.history-product__item .checkbox-only').length;
            if(productNum == 0){
                $('.history-count').hide();
				$('.no-message').removeClass('bld');
            }else{
                $('.history-count').text(productNum);
            }
            try{
                $('.mypage-body').find('.tab-v2__num').eq(0).text(productNum);
            }catch (e){}
            if(isCheck != 0){
                $('.history__scroll').find('.button-v4').addClass('is-active').removeClass('is-disabled');

                try{
                    $('.mypage').find('.button-v4').addClass('is-active').removeClass('is-disabled');
                }catch (e){}
            }else{
                $('.history__scroll').find('.button-v4').removeClass('is-active').addClass('is-disabled');
                $('.mypage').find('.button-v4').removeClass('is-active').addClass('is-disabled');
                $('#chkAll').prop("checked",false);
                try{
                    $('#mypageChkAll').prop("checked",false);
                    $('.mypage').find('.button-v4').removeClass('is-active').addClass('is-disabled');
                }catch (e){}
            }
        });

        $(document).mouseup(function (e){
            var container = $('.history');
            if( container.has(e.target).length === 0){
                container.removeClass('is-active');
                $('.dim').fadeOut(300);
            }
        });
    }

    historyCheck();

    $('.select-v1, .select-v2').change(function() {
        if($(this).val() !=""){
            $(this).addClass('is-check');
        }else{
            $(this).removeClass('is-check');
        }
    });

//헤더 알림 클릭시
        $(".js-alarm-btn").click(function(){
            $(this).next().toggle();
        });



});//ready끝
