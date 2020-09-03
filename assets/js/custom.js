$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    // Do animations for navbar brand and navbarNavLeft

    // deal with prefix
    var animationEnd = (function (el) {
        var animations = {
            animation: 'animationend',
            OAnimation: 'oAnimationEnd',
            MozAnimation: 'mozAnimationEnd',
            WebkitAnimation: 'webkitAnimationEnd',
        };

        for (var t in animations) {
            if (el.style[t] !== undefined) {
                return animations[t];
            }
        }
    })(document.getElementsByClassName('navbar-brand')[0]);

    // callbacks

    var handleAboveCallback = function (element) {
        $(element).one(animationEnd, function () {
            // also animate navbarNavLeft using FLIP: https://github.com/googlearchive/flipjs
            var flip = new FLIP({
                element: document.getElementById("navbarNavLeft"),
                duration: 150
            });
            flip.first();
            element.classList.add("d-none");
            flip.last();
            flip.invert();
            flip.play();
        });
    };

    var handleBelowCallback = function (element) {
        $(element).off(animationEnd);
        // also animate navbarNavLeft using FLIP: https://github.com/googlearchive/flipjs
        var flip = new FLIP({
            element: document.getElementById("navbarNavLeft"),
            duration: 150
        });
        flip.first();
        element.classList.remove("d-none");
        flip.last();
        flip.invert();
        flip.play();
    };

    // init animations

    var navbarHeight = document.getElementsByClassName("navbar")[0].getClientRects()[0].height;
    var boundingClientRect = document.getElementById("large-brand").getBoundingClientRect();

    ScrollPosStyler.init({
        scrollOffsetY: (boundingClientRect.top + boundingClientRect.bottom) / 2 - navbarHeight,
        onAboveCallback: handleAboveCallback,
        onBelowCallback: handleBelowCallback
    });
})
