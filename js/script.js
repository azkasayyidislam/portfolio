$(document).ready(function () {
    // load Halaman 
    $(window).on("load", function () {
        $(".about .pkiri").addClass("pmuncul");
        $(".about .pkanan").addClass("pmuncul");
    })


    //smooth scroll
    $('.page-scroll').on("click", function (e) {


        // ambil isi href nya
        var href = $(this).attr("href");
        //ambil tag section nya
        var tujuan = $(href);

        // animasi
        $('html,body').animate({
            scrollTop: tujuan.offset().top - 60
        }, 1000, "easeInOutExpo");
        e.preventDefault();

    })


    // parallax
    $(window).on("scroll", function () {
        var wScroll = $(this).scrollTop();
        $(".jumbotron img").css({
            'transform': 'translate(0,' + wScroll / 5 + '%)'
        });
        $(".jumbotron h3").css({
            'transform': 'translate(0,' + wScroll / 2.5 + '%)'
        });
        $(".jumbotron p").css({
            'transform': 'translate(0,' + wScroll / 1.5 + '%)'
        });

        // membuat photos muncul

        if (wScroll > $(".photos .img-thumbnail").offset().top - 250) {
            $(".photos .img-thumbnail").each(function (i) {
                setTimeout(() => {
                    $(".photos .img-thumbnail").eq(i).addClass("muncul");
                }, 300 * (i + 1))
            })
        }




    })



})