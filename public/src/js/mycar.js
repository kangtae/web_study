$(document).ready(function(){

    //높이 맞추기

 //자동완성

    var arr = [];
    var car = "BMW올뉴5시리즈540i";

    var i;
    for(i=0; i<30; i++){
        arr.push(i+car);
    }
     var $elem = $(".auto_input").autocomplete({
    // source:"my_car_keyword.php",
        source:arr,
        position: {
            my: "left top+4",
            at: "left bottom",
            collision: "none"
        },
        autoFocus: true,
        response: function(event, ui) {
        },
        select: function(event, ui) {
        //console.log("Selected:" + ui.item.value);
        },
        focus: function(event, ui) {
            return false;
        }
    }),
    elemAutocomplete = $elem.data("ui-autocomplete") || $elem.data("autocomplete");
    if (elemAutocomplete) {
        elemAutocomplete._renderItem = function (ul, item) {
            var newText = String(item.value).replace(
                    new RegExp(this.term, "gi"),
                    '<span style="color:#3897f0">$&</span>');

            return $("<li></li>")
                .data("item.autocomplete", item)
                .append("<div>" + newText + "</div>")
                .appendTo(ul);
        };
    }//자동완성


// 기획 슬라이더
    $('.js-plan-slider').slick({
        autoplay: true,
        prevArrow: '.js-plan-prev',
        nextArrow: '.js-plan-next',
        infinite: true,
        slidesToShow: 4
    });//슬릭슬라이더

//결과페이지 js
$(document).ready(function(){
    try{//->차트 부분은 서버 업로드시 삭제하고 업로드 해야함
        var ctx = document.getElementById('myChart').getContext('2d');
       var chart = new Chart(ctx, {
           // The type of chart we want to create
           type: 'radar',
           data: {
               labels: ['주행거리', '피해금액', '용도변경', '특수사고', '사고이력'],
               datasets: [{

                       label: 'mine',

                       backgroundColor: 'rgba(13, 94, 254, 0.5)',
                       borderColor: '#2764ef',
                       borderWidth: 1,


                       data: [1,2,3,4,5],

                       pointRadius: 0,


                   },
                   {
                       label: 'average',

                       backgroundColor: 'rgba(102, 102, 102, 0.5)',
                       borderColor: '#6e6e6e',
                       borderWidth: 1,


                       data: [5,4,3,2,1],

                       pointRadius: 0,


                   }
               ]
           },



           options: {
               responsive: false,
               scale: {
                   ticks: {
                       max: 5,
                       min: 0,
                       stepSize: 1,
                       display: false
                       //           fontSize:0,
                       //      fontColor:"#888888"
                   },
                   pointLabels: {
                       fontSize: 14,
                       fontColor: '#888888',
                       fontFamily: "'nsL', sans-serif",
                   }
               },
               legend: {
                   display: false
               },
               tooltips: {
                   enabled: false,
                   custom: function(tooltip) {

                       if (tooltip.body) {
                           tooltipEl.style.display = 'block';
                           //오류나서 안뜸
                       }
                   },
               }
           }
       });
   }catch(e){};



   //슬롯 부분


       var punkt = $(".alpha"),
           punkt2 = $(".alpha2"),

           to_punkt = $(punkt).text(), //현재값
           to_punkt2 = $(punkt2).text(), //현재값
           text = $(".slot_text"),
           text2 = $(".slot_text2");
       var how;


       var f_height = $(".slot .slot_text2>span").height();
       var height = f_height; //개별 높이
       var count = 7 * 3;

       A(text, to_punkt);
       setTimeout(second, 400);

       function second() {
           A(text2, to_punkt2);
       }



       function A(ab, who) { //슬롯 함수

           $(ab).css({
               "opacity": "1"
           });



           switch (who) {
               case 'SS':
                   how = -(height * count);
                   break;
               case 'A':
                   how = -(height * (count + 1));
                   break;
               case 'B':
                   how = -(height * (count + 2));
                   break;
               case 'C':
                   how = -(height * (count + 3));
                   break;
               case 'D':
                   how = -(height * (count + 4));
                   break;
               case 'E':
                   how = -(height * (count + 5));
                   break;
               case 'F':
                   how = -(height * (count + 6));
                   break;
               case '+':
                   how = -(height * 18);
                   break;
               case '0':
                   how = -(height * 19);
                   break;
               case '-':
                   how = -(height * 20);
                   break;

               default: ;
                   //console.log("오류");

           } //케이스문 끝

           $(ab).animate({
               "top": how + "px"
           }, 1000, 'easeOutCirc');
       }

   });

   $('.js-dot').each(function() {
       var length = 40; //표시할 글자수 정하기
       $(this).each(function() {
           if ($(this).text().length >= length) {
               $(this).text($(this).text().substr(0, length) + '...');
           }
       });
   });

   $('.js-counter, .counter').counterUp({

       delay: 10,

       time: 1000

   });


//공유버튼 클릭시 토글
$(".mycar7__evaluation-mine__btn.type-register").click(function(e){
    e.stopPropagation();
    $(this).find(".mycar7__popbox").toggle();
});
//다른 영역 클릭시 토글
$(".wrap_my_car_7").click(function(){
    $(".mycar7__popbox").hide();
});
$(".mycar7__popbox").click(function(e){
    e.stopPropagation();
});

    //url copy
    $('.js-url-copy').on('click',function(e){
        e.preventDefault();
        $(this).append('<input class="copy-input sr-only"type="text"/>')
        var newURL = window.location.protocol
             + "//" + window.location.host
             + "/" + window.location.pathname;
        var copyInput = $('.copy-input');
        copyInput.val(newURL).select();
        document.execCommand("Copy");
        copyInput.remove();
    });

    Kakao.init('727e34786209474898a0abef89d69856');
    // // 카카오링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
    Kakao.Link.createDefaultButton({
      container: '#kakao-link-btn',  // 컨테이너는 아까 위에 버튼이 쓰여진 부분 id
      objectType: 'feed',
      content: {  // 여기부터 실제 내용이 들어갑니다.
        title: '딸기 치즈 케익', // 본문 제목
        description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',  // 본문 바로 아래 들어가는 영역?
        imageUrl: 'document.images[0].src', // 이미지
        link: {
          mobileWebUrl: document.location.href,
          webUrl: document.location.href
        }
      },
      buttons: [
        {
          title: 'open',
          link: {
              mobileWebUrl: document.location.href,
              webUrl: document.location.href
          }
        }
      ]
    });


});//제이쿼리 로드영역
