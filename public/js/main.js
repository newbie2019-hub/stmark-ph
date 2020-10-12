
//Navbar
(function ($) {
    
    var navbarCollapse = function () {
        if ($("#navbar").offset().top > 100) {
            $("#navbar").addClass("sticky");
        } else {
            $("#navbar").removeClass("sticky");
        }
    };

    navbarCollapse();
    $(window).scroll(navbarCollapse);
    $("img").addClass('img-fluid')
})(jQuery);

$(window).on("load", function() {
    var preloaderDelay = 350,
            preloaderFadeOutTime = 800;

    function hidePreloader() {
        var loadingAnimation = $('#loading-animation'),
                preloader = $('#preloader');
        loadingAnimation.fadeOut();
        preloader.delay(preloaderDelay).fadeOut(preloaderFadeOutTime);
    }

    hidePreloader();
});

