$(document).ready(function () {
    $("select.form-kat").mousedown(function (e) {
        e.preventDefault();

        var select = this;
        var scroll = select.scrollTop;

        e.target.selected = !e.target.selected;

        setTimeout(function () {
            select.scrollTop = scroll;
        }, 0);

        $(select).focus();
        var formKatVal = $("select.form-kat").val();
        if (formKatVal.length > 0) {
            $(".form-kat-div").html(" <ul style='display:grid;grid-template-columns: 1fr 1fr;'> <li> " + formKatVal.join("<li> "));
        } else {
            $(".form-kat-div").html("<p>Jeszcze nic nie zostało wybrane</p>");
        }
        $('.form-check').addClass('d-none');
        if (jQuery.inArray("Grafika", formKatVal) > -1) {
            $('.grafika_mot').removeClass('d-none');
        }
        if (jQuery.inArray("Programowanie", formKatVal) > -1) {
            $('.programowanie_mot').removeClass('d-none');
        }
        if (jQuery.inArray("Tworzenie muzyki", formKatVal) > -1) {
            $('.muzyka_mot').removeClass('d-none');
        }
        if (jQuery.inArray("Fotografia", formKatVal) > -1) {
            $('.fotografia_mot').removeClass('d-none');
        }
    });
});

function szukajKat() {
    var input = $('input#form_SzukajKat').val();
    var inputUp = input.toUpperCase();
    var opcje = $('.form_OptKat');
    var i;
    var txtValue;
    if (input) {
        for (i = 0; i < opcje.length; i++) {
            txtValue = opcje[i].innerText;
            if (txtValue.toUpperCase().indexOf(inputUp) > -1) {
                opcje[i].style.display = "";
            } else {
                opcje[i].style.display = "none";
            }
        }
    } else {
        for (i = 0; i < opcje.length; i++) {
            opcje[i].style.display = "";
        }
    }
}
