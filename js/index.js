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
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }

        ]
    });


})

const siteContentWrapper = document.querySelector(".site-content-wrapper")
document.querySelector(".nav-trigger").addEventListener("click", function () {
    siteContentWrapper.classList.toggle("scaled")
})






const timerUpdater = () => {

    const endDay = new Date("20 November, 2022 11:59:59").getDate()
    const endHour = new Date("20 November, 2022 11:59:59").getHours()
    const endMin = new Date("20 November, 2022 11:59:59").getMinutes()
    const endSec = new Date("20 November, 2022 11:59:59").getSeconds()

    const d = new Date().getDate()
    const h = new Date().getHours()
    const m = new Date().getMinutes()
    const s = new Date().getSeconds()
    document.querySelector("#daysLeft").innerHTML = endDay - d
    document.querySelector("#hoursLeft").innerHTML = endHour - h
    document.querySelector("#minLeft").innerHTML = endMin - m
    document.querySelector("#secLeft").innerHTML = endSec - s
}


setInterval(() => {
    timerUpdater()
}, 1000);



