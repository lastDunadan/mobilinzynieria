//Slider settings
/*$(".o-slider-1").owlCarousel({
    loop: true,
    nav: true,
    navContainer: ".o-slider-1-nav",
    dotsContainer: ".o-slider-1-dots",
    navText: ["<img src='https://img.obi.pl/articles-assets/common-files/img/arrow-1.svg'>", "<img src='https://img.obi.pl/articles-assets/common-files/img/arrow-1.svg'>"],
    stagePadding: 2,
    responsive: {
        0: {
            items: 1.25,
            margin: 35,
        },
        440: {
            items: 2,
            margin: 35,
        },
        768: {
            items: 3,
            margin: 35,
        },
        1024: {
            items: 4,
            margin: 20,
        },
    },
});*/

//Patch for navigation issues
/*$('.owl-carousel').find('.owl-nav').removeClass('disabled');
$('.owl-carousel').on('changed.owl.carousel', function(event) {
    $(this).find('.owl-nav').removeClass('disabled');
});*/

//Links patch for CMS and Smooth scroll for article menu
$(function () {

    //Links patch
    const links = {
        one: document.getElementById("link-one"),
        two: document.getElementById("link-two"),
        three: document.getElementById("link-three"),
        four: document.getElementById("link-four"),
        five: document.getElementById("link-five"),
        six: document.getElementById("link-six"),
        seven: document.getElementById("link-seven"),
        eight: document.getElementById("link-eight"),
        nine: document.getElementById("link-nine")
    }

    links.one.href = "#question-answer-one";
    links.two.href = "#question-answer-two";
    links.three.href = "#question-answer-three";
    links.four.href = "#question-answer-four";
    links.five.href = "#question-answer-five";
    links.six.href = "#question-answer-six";
    links.seven.href = "#question-answer-seven";
    links.eight.href = "#question-answer-eight";
    links.nine.href = "#question-answer-nine";

    //Smooth Scroll
    $('a.scroll[href^="#"]').on("click.scroll", function (e) {
        let target;
        e.preventDefault();
        target = this.hash;
        return $("html, body")
            .stop()
            .animate(
                {
                    scrollTop: $(target).offset().top - 60,
                },
                750,
                "swing"
            );
    });
});