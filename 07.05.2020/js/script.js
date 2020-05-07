$(function () {
//фиксированная шапка
    let header = $("#header");
    let intro = $("#intro")
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, introH)

    $(window).on("scroll", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH){
            header.addClass("fixed");
        }else {
            header.removeClass("fixed")
        }
    }

    //плавный скролл
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');

        let elementOffset = $(elementId).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset
        }, 500);
    });

    //reviews
    let slider = $("#introSlider");
    slider.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        fade: true,
        arrows: true
    });


});