
$("#mv").slick({
    fade: true,
    autoplay: true,
    prevArrow: "<button type='button'class='slick-prev'><img src='images/slide_skin_type.png' alt='이전 슬라이드' /></button>",
    nextArrow: "<button type='button'class='slick-next'><img src='images/slide_skin_type.png' alt='이후 슬라이드' /></button>",
    dots: true
});

function scrollchk() {
    var scr = $(window).scrollTop();
    if (scr > 100) {
        $("#totop").stop().fadeIn();
    }
    else {
        $("#totop").stop().fadeOut();
    }
}

scrollchk();

$(window).scroll(function () {
    scrollchk();
});


$("#totop").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 400)
})


