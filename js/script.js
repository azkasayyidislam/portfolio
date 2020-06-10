$(document).ready(function () {

    $('.page-scroll').on("click", function (e) {


        // ambil isi href nya
        var href = $(this).attr("href");
        //ambil tag section nya
        var tujuan = $(href);

        // animasi
        $('html,body').animate({
            scrollTop: tujuan.offset().top - 60
        }, 1200, "easeInOutExpo");
        e.preventDefault();

    })




})