//뷰페이지.js

$(document).ready(function(){
//차량 메인이미지 처리



//관심.좋아요 버튼처리
    $(".add_btn").click(function(){
        if($(this).hasClass("is-active")){
            $(this).removeClass("is-active");
            //이부분에 좋아요, 또는 관심리스트 제거문작성
        }else{
            $(this).addClass("is-active");
            //이부분에 좋아요, 또는 관심리스트 추가문작성
        }
    });


//탭 처리
    $(".view-tab__item").click(function(){
        var idx = $(this).index();
        var tabarea = $(this).closest(".view-tab").siblings(".tabarea");

        $(this).siblings().removeClass("is-active");
        $(this).addClass("is-active");
        $(tabarea).removeClass("is-active");
        $(tabarea).eq(idx).addClass("is-active");

    });

//댓글 더보기 버튼 클릭시
    $(".replylist__morebtn").click(function(){
        for(var i=0; i<3; i++){
            $(".replylist__list").append("<li class='replylist__item'><p class='replylist__txt'>텍스트내용</p><p class='replylist__bottom'><span class='replylist__writer'>작성자</span><span class='replylist__date'>년.월.일</span></p></li>");
        }
    });


//슬롯 부분
    var punkt = $(".js-alpha"),
        punkt2 = $(".js-alpha2"),
        punkt3 = $(".js-alpha3"),

        to_punkt = $(punkt).text(), //현재값
        to_punkt2 = $(punkt2).text(), //현재값
        to_punkt3 = $(punkt3).text(), //현재값
        text = $(".js-slot-text"),
        text2 = $(".js-slot-text2"),
        text3 = $(".js-slot-text3");
    var how;


    var f_height = $(".js-slot-text>span").height();
    var height = f_height; //개별 높이
    var count = 7 * 3;
    $(".js-score-box").css("height",height);
    // $(".mycar7__slot__word").css("height","109px");

    A(text, to_punkt);
    setTimeout(second, 400);
    setTimeout(third, 800);

    function second() {
        A(text2, to_punkt2);
    }
    function third() {
        A(text3, to_punkt3);
    }


    function A(ab, who) { //슬롯 함수

        $(ab).css({
            "opacity": "1"
        });

        switch (who) {
            case 'S':
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

            default:
                console.log("오류");

        } //케이스문 끝

        $(ab).animate({
            "top": how + "px"
        }, 1000, 'easeOutCirc');
    }

//  클러스터
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
        mapOption = {
    //      center: new daum.maps.LatLng(<?=$mycar[lng]?>, <?=$mycar[lat]?>), // 지도의 중심좌표
            center: new daum.maps.LatLng(36.2683, 127.6358), // 지도의 중심좌표
            level: 13 // 지도의 확대 레벨
        };

    var map = new daum.maps.Map(mapContainer, mapOption);

    ///----------------------지도생성

    var clusterer = new kakao.maps.MarkerClusterer({
            map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
            averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
            minLevel: 12 // 클러스터 할 최소 지도 레벨
        });

    //    $.get("../map_json.php?c_code=<?//=$c_code*$carfora_goods?>", function(data) {//json.json 파일을 데이터를 가지고 온다
        $.get("../../js/libs/map_json.json", function(data) {//json.json 파일을 데이터를 가지고 온다
            // 데이터에서 좌표 값을 가지고 마커를 표시합니다
            // 마커 클러스터러로 관리할 마커 객체는 생성할 때 지도 객체를 설정하지 않습니다
            var markers = $(data.positions).map(function(i, position) { //json.json 파일의 positions
                return new kakao.maps.Marker({
                    position : new kakao.maps.LatLng(position.lat, position.lng)
                });
            });

            // 클러스터러에 마커들을 추가합니다
            clusterer.addMarkers(markers);

        });











});//제이쿼리 영역
