
// let bg = document.querySelector('#bg');
let man = document.querySelector('#man');
let ml = document.querySelector('#mountain_left');
let mr = document.querySelector('#mountain_right');
let wel = document.querySelector('#welcome');
let c1 = document.querySelector('#clouds_1');
let c2 = document.querySelector('#clouds_2');
let am = document.querySelector('#am');
let para = document.querySelector('#para');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    console.log(value);
    mr.style.left = value * 0.5 + 'px';
    ml.style.left = -value * 0.5 + 'px';
    c1.style.left = value * 0.35 + 'px';
    c2.style.left = -value * 0.35 + 'px';
    man.style.top = value * 0.35 + 'px';
    if (window.screen.width > 1300) {
        para.style.left = value * 0.7 + 'px';
        am.style.left = -value * 1.2 + 'px';
    }
    wel.style.transform = `scale(${value * 0.005})`;

})



jQuery(function ($) {

    // Function which adds the 'animated' class to any '.animatable' in view
    var doAnimations = function () {

        // Calc current offset and get all animatables
        var offset = $(window).scrollTop() + $(window).height(),
            $animatables = $('.animatable');

        // Unbind scroll handler if we have no animatables
        if ($animatables.length == 0) {
            $(window).off('scroll', doAnimations);
        }

        // Check all animatables and animate them if necessary
        $animatables.each(function (i) {
            var $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                $animatable.removeClass('animatable').addClass('animated');
            }
        });

    };

    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');

});
