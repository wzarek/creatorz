$(document).ready(function () {
    $('a[href*="#"]').click(function (event) {
        console.log("klikniete");

        var thisS = $(this);
        var target = thisS.attr('href');
        var targetOff = jQuery(target).offset();
        console.log(target);

        if (target.length) {
            if (target != '#top') {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: targetOff.top
                }, 500);
            } else {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: 0
                }, 500);
            }
        }

    });
});
