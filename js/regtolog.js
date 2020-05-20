$(function () {
    var regtolog = $('.regtolog');
    var reg = $('.registration');
    var log = $('.login');
    var form1to2 = $('.form1to2');
    var form2to3 = $('.form2to3');
    var form1 = $('.form_reg_1');
    var form2 = $('.form_reg_2');
    var form3 = $('.form_reg_3');

    regtolog.click(function () {
        log.toggleClass('d-none');
        reg.toggleClass('d-none');
    });

    form1to2.click(function () {
        form1.toggleClass('d-none');
        form2.toggleClass('d-none');
    });

    form2to3.click(function () {
        form2.toggleClass('d-none');
        form3.toggleClass('d-none');
        if (form2.hasClass('d-none') && form1.hasClass('d-none')) {
            $('.parallax-4 form').addClass('fwider');
        } else {
            $('.parallax-4 form').removeClass('fwider');
        }
    });
});
