$(document).ready(function(){
// //가입 register_2
//
     //입력시 숫자만 입력가능
     $("input.type-num").on("keyup", function() {
         $(this).val($(this).val().replace(/[^0-9]/g,""));
     });

//회원가입및 회원정보찾기등 서브밋 활성화 통합

//회원가입 공통 (인풋 다 채워지면 서브밋 버튼 활성화)
    var distinguish;
     var r_input = $(".js-r-input");
     var r_form = $("#register_form");

     $(r_input).on("change keyup paste", function() {
         check_fill(r_form, r_input,0);
     });

//register_2인증번호 받는 부분
    $(document).on("click",".register__certify__btn",function(){//인증버튼 클릭시
        var which = $(this);
        certify_btn_action(which);
     });

//함수 구역------------------------------------------------------------------
//register_2 인증버튼 함수
     function certify_btn_action(which){//인증버튼 클릭시 액션 함수
        var r_input2 = $(".js-r-input2");//회원가입2번 페이지 인풋
        var r_form2 = $("#register_form2");//회원가입2번 페이지 인풋

            if($(which).hasClass("is-start") == true){
                //인증번호 발송버튼누르면
                var certi_check_num = check_fill(r_form2, r_input2, 2);
                if(certi_check_num != 0){
                    $(which).addClass("bld");
                    $(".js-r-input2, .js-r-certify").attr("readonly",true);
                    $(".js-r-input2, .js-r-certify").addClass("block-focus");
                    $(".js-select").addClass("block-focus");
                    $(".is-during").removeClass("bld");
                    $(".js-r-certify").attr("readonly",false);
                    $(".js-r-certify").removeClass("block-focus");
                    $(".js-r-certify").attr("placeholder","인증번호 입력후 우측버튼 클릭");
                    $(".js-r-certify").focus();
                }
            }else if($(which).hasClass("is-during")){
                //인증번호 확인버튼을 누르면
                certify_check(which);


            }else if($(which).hasClass("is-done")){
                //인증완료 버튼을 누르면
                alert("확인이 완료 되었습니다. 다음 버튼을 눌러주세요");

            }
    }

//register_2 인증번호 값이 맞는지만 체크 함수 - 단독
     function certify_check(which){
             var certify_input = $(".js-r-certify").val();
             var certify_num = '1234';

             if(certify_input == certify_num){
                 $(which).addClass("bld");
                 $(".is-done").removeClass("bld");
                 submit_action();
             }else{
                 alert("인증번호를 다시 한번 확인해주세요");
                 $(".js-r-certify").focus();
             }
     }
//폼안의 전체 값이 다 채워졌는지 체크하는 함수 - 공통
     function check_fill(form_id, input_c,distinguish){
         var is_empty = false;

         //인풋체크
         $(form_id).find(input_c).each(function(){
             if(!$(this).val()) {
                 is_empty = true;
             }
        });
         if(is_empty) {//값이 비어있으면
             if(distinguish == 2){
                 alert("모든빈칸을 입력후 다시 눌러주세요");
                 return 0;
             }else{
                 $(".js-register-submit").attr('disabled', true);  //전송버튼 잠그기
                 return;

             }
             return;
         }else{//값이 다 찼으면
             if(distinguish == 2){
                 var right2 = check_right();
                 if(right2 == 0){//유효성 안맞으면
                    return 0;
                 }else{//맞으면
                     check_right();
                     return 1;
                 }
             }else{
                     submit_action();
             }
         }
     }
//생년월일 유효성 체크
    function check_right(){
        var birth = $("#register__birth").val();
        var birthExp =  /([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))/;

        if(birthExp.test(birth)){
         //올바른 생일이다!
         return 1;
        }else{
         alert("생년월일을 다시 입력해주세요.");
         return 0;
        }
    }
 //전송버튼 활성화 함수
     function submit_action(){
         $(".js-register-submit").attr('disabled', false);  //전송버튼 풀기
          $(".js-register-submit").removeClass("is-disabled");//버튼은 활성화
     }

});//제이쿼리 영역
