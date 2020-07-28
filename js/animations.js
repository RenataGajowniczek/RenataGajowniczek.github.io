var $window = $(window),
    $document = $(document),
    $html = $('html'),
    $body = $('body'),
// needed for browserSize
    windowWidth = $window.width(),
    windowHeight = $window.height(),
    documentHeight = $document.height(), latestKnownScrollY, lastKnownScrollY;


$window.on('scroll', onScroll);
$window.on('resize', updateValues);

function onScroll() {
    latestKnownScrollY = $(document).scrollTop();
    lastKnownScrollY = latestKnownScrollY;
}

function updateValues() {
    $window = $(window),
        $document = $(document),
        $html = $('html'),
        $body = $('body'),
        windowWidth = $window.width(),
        windowHeight = $window.height(),
        documentHeight = $document.height();
}

function animateBorderOut() {


    var $border = $('.animation-container'),
        borderX = windowWidth / 2,
        borderY = windowHeight / 2;

    $border.css({
        top: 0,
        left: 0,
        scale: 1,
        width: windowWidth,
        height: windowHeight,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderColor: 'white',
        display: 'block'
    });

    TweenMax.to($border, 0.3, {
        borderTopWidth: borderY,
        borderBottomWidth: borderY,
        borderRightWidth: borderX,
        borderLeftWidth: borderX,
        onComplete: onTransitionEnd
    });

}

function animateProjectBorderOut($item) {


    var offset = $item.offset(),
        itemWidth = $item.outerWidth(),
        itemHeight = $item.outerHeight(),
        borderX = (itemWidth + 1) % 2 ? (itemWidth + 1) / 2 : itemWidth / 2 + 1,
        borderY = (itemHeight + 1) % 2 ? (itemHeight + 1) / 2 : itemHeight / 2 + 1,
        scaleX = windowWidth / itemWidth,
        scaleY = windowHeight / itemHeight,
        borderColor = $item.attr('data-animation-color'),
        moveX = windowWidth / 2 - offset.left - itemWidth / 2,
        moveY = windowHeight / 2 - (offset.top - latestKnownScrollY) - itemHeight / 2,
        $clone = $('.animation-container');

    $clone.css({
        display: 'block',
        top: offset.top - latestKnownScrollY - 1,
        left: offset.left - 1,
        width: itemWidth + 2,
        height: itemHeight + 2,
        borderColor: borderColor,
        borderWidth: 1,
        borderStyle: 'solid'
    });

    var timeline = new TimelineMax({
        paused: true,
        onComplete: onTransitionEnd
    });

    timeline.to($clone, .3, {
        borderTopWidth: borderY,
        borderBottomWidth: borderY,
        borderRightWidth: borderX,
        borderLeftWidth: borderX,
        'ease': Power3.easeOut,

        onComplete: function () {
            $clone.css('backgroundColor', $clone.css('borderTopColor'));
        }
    });

    timeline.fromTo($clone, .3, {
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1
    }, {
        x: moveX,
        y: moveY,
        scaleX: scaleX,
        scaleY: scaleY,
        ease: Power3.easeInOut
    });

    timeline.play();

}

function onTransitionEnd() {

    /*setTimeout(function () {
     $('.animation-container').removeAttr('style');
     }, 600);*/


    /* $('html, body').scrollTop(0);
     AjaxLoading.preparing = false;
     $('html').trigger('djax:transitionEnd');*/
}