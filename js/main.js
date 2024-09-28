var windowHeight;
var windowWidth;

function setHeight() {

    windowHeight = $(window).innerHeight();
    windowWidth = $(window).innerWidth();
    $('.slideshow-main > div').css('min-height', windowWidth <= 745 ? 350 : windowHeight);

    var navHeight = windowHeight - 80;
    var navPadding = ((navHeight - 250) / 2);
    $('.navbar-collapse .navbar-nav > li:first-child').css('padding-top', windowWidth <= 745 ? navPadding : '');
    $('.navbar-collapse .navbar-nav > li:last-child').css('padding-bottom', windowWidth <= 745 ? navPadding : '');

}

var hideMobileMenu = function () {
    $('#mobile-menu-button').trigger('click');
};

$('.navbar-collapse a').bind('click', function () {
    if (windowWidth <= 745)
        hideMobileMenu();
});

$(document).ready(function () {

    setHeight();

    $('.slideshow-main').cycle();

    $(window).resize(function () {
        setHeight();
    });


    $('.item').hover(function () {
        $('.item').not(this).css("opacity", 0.2);
    }, function () {
        $('.item').css("opacity", 1);
    });
});

