$(document).ready(function(){
     //new-tab
     var historyNum = 0;
     var navList = $('.mycar-header__item').length;
 	$('.mycar-header__link').on('click',function(e){
        e.preventDefault();
        var currentNum = $(this).parents('.mycar-header__item').index();
        if(currentNum <= historyNum){
            var tabClass = $(this).attr('href');
            $('.mycar-header__item').removeClass('is-active');
            $(this).parents('.mycar-header__item').addClass('is-active').prevAll().addClass('is-active');;

     		$('.mycar-body__item').removeClass('is-active');
     		$("."+tabClass).addClass('is-active');
             mycarCheck();
        }
 	});

    //풉옵션 체크시 해제
    var checkOption = $(".js-one-check");
    var checkFulloption = $(".js-all-check");

    checkFulloption.click(function(){
        var gap = $(this).val();
        if(gap =! ""){//체크가 됬다면
            unlock_check(checkOption);
        }
    });
    checkOption.click(function(){
        var gap = $(this).val();
        if(gap =! ""){//체크가 됬다면
            unlock_check(checkFulloption);
        }
    });

    function unlock_check(who,who2){//해제하기 함수
        $(who).prop("checked", false);
    }








    //구매방식 체크
    $('input[name=purchase]').change(function(){
        var which = $(this).prop('checked');
        var formBtn = $(this).parents('.mycar-form').find('.submit-v1');
        var form = $(this).parents('.mycar-form');
        var error = $(this).parents('.mycar-form').find('.error-message');
        var errorRadio = $(this).parents('.mycar-form').find('.radio-v1__label');
        if (which == true) {
            formBtn.addClass('is-active');
            error.removeClass('is-active');
            errorRadio.removeClass('error');
        }else{
            formBtn.removeClass('is-active');
            error.addClass('is-active');
            errorRadio.addClass('error');
        }
    });



    //연식 체크
    var yearSelect = $('.mycar-body__item.page-2 .select-v1');
    yearSelect.change(function() {
        var formBtn = $(this).parents('.mycar-form').find('.js-step-next');
        var error = $(this).parents('.mycar-form').find('.error-message');
        var selectError = $(this).parents('.mycar-form').find('.select-v1');
        var year = $('#year_year');
        var month = $('#year_month');
        if(year.val() != ""){
            error.eq(0).addClass('is-check');
            error.eq(0).removeClass('is-active');
            selectError.eq(0).removeClass('error');
        }else{
            error.eq(0).removeClass('is-check');
        }

        if(month.val() != ""){
            error.eq(1).addClass('is-check');
            error.eq(1).removeClass('is-active');
            selectError.eq(1).removeClass('error');
        }else{
            error.eq(1).removeClass('is-check');
        }

        if(year.val() != "" && month.val() != ""){
            formBtn.addClass('is-active');
        }else{
            formBtn.removeClass('is-active')
            // error.addClass('is-active')
        }
    });

    //사고이력 체크
    $('.js-all-acci').change(function() {
        var formBtn = $(this).parents('.mycar-form').find('.js-step-next');
        var error = $(this).parents('.mycar-form').find('.error-message');
        var specialCount = $('input[name=special_accident]').is(':checked');
        var specialCount0 = $('input[name=special_accident_0]').is(':checked');
        if(specialCount == true || specialCount0 == true){
            formBtn.addClass('is-active');
            error.removeClass('is-active')
        }else{
            formBtn.removeClass('is-active')
            error.addClass('is-active')
        }
    });

    //주행거리 체크
    var mileageSelect = $('.mycar-body__item.page-4 .select-v1, .mycar-distance__input');
    mileageSelect.on('change keyup',function(){
        var mileage = $('#mileage').val();
        var mileageText = $('#mileageText').val();
        var formBtn = $(this).parents('.mycar-form').find('.js-step-next');
        var error = $(this).parents('.mycar-form').find('.error-message');
        var selectError = $(this).parents('.mycar-form').find('.select-v1');
        if(mileage != "" || mileageText != ""){
            formBtn.addClass('is-active');
            error.removeClass('is-active');
            selectError.removeClass('error');
        }else{
            formBtn.removeClass('is-active')
            error.addClass('is-active')
        }
    })

    //옵션 체크
    var colorSelect = $('.mycar-body__item.page-5 .select-v1');
    colorSelect.on('change keyup',function(){
        var carColor = $('#car_color').val();
        var formBtn = $(this).parents('.mycar-form').find('.js-total-submit');
        var error = $(this).parents('.mycar-form').find('.error-message');
        var selectError = $(this).parents('.mycar-form').find('.select-v1');
        if(carColor != ""){
            formBtn.addClass('is-active');
            error.removeClass('is-active');
            selectError.removeClass('error');
        }else{
            formBtn.removeClass('is-active')
            error.addClass('is-active')
            selectError.addClass('error');
        }
    })


    //특수사고이력 없음 숨긴값과 동일하게 처리
    $('#special_accident_0').change(function(){
        var which = $(this).prop('checked');
        if (which == true) {
            $('#special_accident_3').prop("checked", true);
        }else{
            $('#special_accident_3').prop("checked", false);
        }
    });

    $("input#write_check").change(function(){
        var which = $(this).prop('checked');
        var formBtn = $(this).parents('.mycar-form').find('.js-step-next');
        var error = $(this).parents('.mycar-form').find('.error-message');
        var selectError = $(this).parents('.mycar-form').find('.select-v1');
        if (which == true) {
            alert(1)
            var $this = $(this).parents('.mycar-form');
            $this.addClass('is-active');
            $this.find('.select-v1').removeClass('is-check').prop('disabled', true);
            $this.find('.select-v1').val('').addClass('is-disabled');
            $this.find('.mycar-distance__input').prop('readonly', false);
            $this.find('.mycar-distance').addClass('is-active');
            selectError.removeClass('error');
            formBtn.removeClass('is-active');
            // error.addClass('is-active');
        } else {
            var $this = $(this).parents('.mycar-form');
            $this.addClass('is-active');
            $this.find('.select-v1').prop('disabled', false);
            $this.find('.select-v1').val('').removeClass('is-disabled');
            $this.find('.mycar-distance__input').prop('readonly', true).val("");
            $this.find('.mycar-distance').removeClass('is-active')
            formBtn.removeClass('is-active');
            // error.addClass('is-active');
        }
    });

    $('.js-step-next').on('click',function(e){
        var num = $(this).parents('.mycar-body__item').index();
        var error = $(this).parents('.mycar-body__item').find('.error-message').not('.is-check');
        var selectError = $(this).parents('.mycar-body__item').find('.select-v1').not('.is-check');
        var txt = 'is-active';
        e.preventDefault();
        var active = $(this).attr('class');
        if(active.indexOf(txt) != -1){
            $('.mycar-body__item').eq(num).removeClass('is-active').next().addClass('is-active');
            $('.mycar-header__item').removeClass('is-active');
            $('.mycar-header__item').eq(num).addClass('is-check')
            $('.mycar-header__item').eq(num+1).prevAll().addClass('is-active').next().addClass('is-active');
            if(historyNum <= navList){
                historyNum++;
            }
        }else{
            error.addClass('is-active');
            selectError.addClass('error');
            if(num == 0){
                $('.radio-v1__label').addClass('error');
            }
        }
    });

    $('.js-step-prev').on('click',function(e){
        var num = $(this).parents('.mycar-body__item').index();
        e.preventDefault();
        $('.mycar-body__item').eq(num).removeClass('is-active').prev().addClass('is-active');
        $('.mycar-header__item').removeClass('is-active');
        $('.mycar-header__item').eq(num).prevAll().addClass('is-active')
    });
    $('.js-total-submit').on('click', function (e) {
        e.preventDefault();
        var num = $(this).parents('.mycar-body__item').index();
        var error = $(this).parents('.mycar-body__item').find('.error-message').not('.is-check');
        var selectError = $(this).parents('.mycar-body__item').find('.select-v1').not('.is-check');
        var txt = 'is-active';
        var active = $(this).attr('class');
        if(active.indexOf(txt) != -1){
            alert('완료')
        }else{
            alert('실패')
            error.addClass('is-active');
            selectError.addClass('error')
        }
    });


    $("select#accident_price_1").change(function(){
       var gap_1 = $(this).val();
       var idx = $("option:selected",this).index();
       console.log(idx);

       $("select#accident_price_2").val(gap_1);
       $("select#accident_price_2 option:gt("+idx+")").show();
       $("select#accident_price_2 option:lt("+idx+")").hide();
   });


    var acciAll = $(".js-all-acci");
    var acciOne = $(".js-one-acci");

    //없음을 눌렀을때
    acciAll.click(function(){
        var gap = $(this).val();

        if(gap =! ""){//체크가 됬다면
            unlock_check(acciOne);
        }
    });

    //사고중에 눌렀을때
    acciOne.click(function(){
        unlock_check(acciAll);
    });

    function unlock_check(who,who2){//해제하기 함수
        $(who).prop("checked", false);
    }


    //사고횟수 0이면 피해금액 0
    $("select#accident_count").change(function(){
        var gap_count = $(this).val();
        if(gap_count == 0){
            $("select#accident_price_1, select#accident_price_2").val(0);
        }
    });

 });
