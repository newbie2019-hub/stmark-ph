
//Navbar
(function ($) {
    
    var navbarCollapse = function () {
        if ($("#navbar").offset().top > 80) {
            $("#navbar").addClass("sticky");
        } else {
            $("#navbar").removeClass("sticky");
        }
    };

    navbarCollapse();
    $(window).scroll(navbarCollapse);
    $("img").addClass('img-fluid')
})(jQuery);


