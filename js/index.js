$(document).ready(function () {

    $('.food-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        prevArrow: ".prev-btn",
        nextArrow: ".next-btn",
        responsive: [
            {
                breakpoint:992,
                settings:{
                    slidesToShow: 2,
                }
            },
            {
                breakpoint:768,
                settings:{
                    slidesToShow:1,
                }
            }

        ]
    });


})

const siteContentWrapper = document.querySelector(".site-content-wrapper")
document.querySelector(".nav-trigger").addEventListener("click", function () {
    siteContentWrapper.classList.toggle("scaled")
})