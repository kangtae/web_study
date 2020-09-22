
$(document).ready(function(){
    //영상 제어
    var themeIframe = $(".theme-header__iframe");
    var themePlayer = new Vimeo.Player(themeIframe);
    var videoState = "play";
    (function(){
    	var lineElem = document.querySelector('.js-theme-line');
    	function showValue(){
    		var posY = lineElem.getBoundingClientRect().top;
    		if(posY < 0){
                if(videoState == "pause") return false;
                themePlayer.pause();
                videoState = "pause"
    		}else{
                if(videoState == "play") return false;
                themePlayer.play();
                videoState = "play"
    		}
    	}
    	$(window).on('scroll',function(){
    		showValue();
    	});
    })();
});
