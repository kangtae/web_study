
$(document).ready(function(){
    // var productLayout;
    // $(window).on('load resize',function(){
    //         productLayout = $('.js-product-list').masonry({
    //         columnWidth: '.product__item',
    //         itemSelector: '.product__item',
    //         horizontalOrder: true
    //     });
    // });


    function mypageCheck(){
       var mypageAll = $('#mypageChkAll');
       //전체선택클릭시 전체선택
       $(document).on('click','#mypageChkAll',function(){
           if($(this).is(':checked')){
               $(".product__item .checkbox-only, .history-product__item .checkbox-only").prop("checked",true);
           }else{
               $(".product__item .checkbox-only, .history-product__item .checkbox-only").prop("checked",false);
           }
       });

       $(document).on('click','.product__item .checkbox-only',function(){
           var productChkNum = $(".product__item .checkbox-only").length;
           var prodcutId = $(this).attr('id').replace(/[^0-9]/g, '');
             //하나해제시 전체선택해제
           if(mypageAll.is(':checked')){
               if($(".product__item .checkbox-only:checked").length == productChkNum){
                   $(".product__item .checkbox-only").prop("checked",true);
               }else{
                   mypageAll.prop("checked",false);
               }
           }
           if($(this).is(":checked")){
               $('#productChk' + prodcutId + '').prop("checked", true);
           }else{
               $('#productChk' + prodcutId + '').prop("checked", false);
           }

       });
       $(document).on('change','.product__item .checkbox-only, #mypageChkAll',function(){
           var isCheck = $('.product__item .checkbox-only:checked').length;
           if(isCheck != 0){
               $('.mypage').find('.button-v4').addClass('is-active').removeClass('is-disabled');
               $('.history__scroll').find('.button-v4').addClass('is-active').removeClass('is-disabled');
           }else{
               $('.mypage').find('.button-v4').removeClass('is-active').addClass('is-disabled');
               $('.history__scroll').find('.button-v4').addClass('is-active').removeClass('is-disabled');
           }
       });
       //삭제
       $(document).on('click','.js-mypage-remove',function(){

           $('.product__item .checkbox-only:checked').parents('.product__item').remove();
           $('.history-product__item .checkbox-only:checked').parents('.history-product__item').remove();
           var productNum = $('.mypage-body .product__item .checkbox-only').length;
           var isCheck = $('.mypage-body .product__item .checkbox-only:checked').length;
           if(productNum == 0){
               $('.history-count').hide();
			   $('.no-message').removeClass('bld');
               $('.mypage-body').find('.tab-v2__num').eq(0).text('');
           }else{
               $('.history-count').text(productNum);
               $('.mypage-body').find('.tab-v2__num').eq(0).text(productNum);
           }
           if(isCheck != 0){
               $('.mypage').find('.button-v4').addClass('is-active').removeClass('is-disabled');
               $('.history__scroll').find('.button-v4').addClass('is-active').removeClass('is-disabled');
               $("#mypageChkAll, #chkAll").prop("checked",true);
           }else{
               $("#mypageChkAll, #chkAll").prop("checked",false);
               $('.mypage').find('.button-v4').removeClass('is-active').addClass('is-disabled');
               $('.history__scroll').find('.button-v4').removeClass('is-active').addClass('is-disabled');
           }
       });
   }



    mypageCheck();

});
