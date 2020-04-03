/* Preloader */
$(document).ready(function() {
    //Preloader
    preloaderFadeOutTime = 1000;
    function hidePreloader() {
    var preloader = $('.spinner-wrapper');
    preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
    });
/* Animate on Scroll */
AOS.init();
/* Navigation Menu */
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});
/* Homepage Header Fullheight */
$(document).ready(function(){
    $('.header').height($(window).height());})

