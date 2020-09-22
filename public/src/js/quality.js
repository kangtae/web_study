
$(document).ready(function(){
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
});
