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

    const targetTime = new Date("19 november, 2022 23:59:59").getTime()

    const now = new Date().getTime()

    const diff = targetTime - now

    const d = Math.floor(diff / (1000 * 60 * 60 * 24))
    const h = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const m = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60))
    const s = Math.floor(diff % (1000 * 60) / 1000)


    document.querySelector("#daysLeft").innerHTML = d
    document.querySelector("#hoursLeft").innerHTML = h
    document.querySelector("#minLeft").innerHTML = m
    document.querySelector("#secLeft").innerHTML = s
}


setInterval(() => {
    timerUpdater()
}, 1000);


const menu = [
    {
        id: 1,
        img: "/images/menu-items/1.jpg",
        title: "Bread-Butter with omlet",
        price: 30,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores nam aspernatur minus atque iusto quis laboriosam quia corrupti ipsa.",
        category: "breakfast"
    },

    {
        id: 2,
        img: "/images/menu-items/2.jpg",
        title: "Fruit Sandwitch",
        price: 40,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores nam aspernatur minus atque iusto quis laboriosam quia corrupti ipsa.",
        category: "breakfast"
    },

    {
        id: 3,
        img: "/images/menu-items/3.jpg",
        title: "non-veg salad",
        price: 60,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores nam aspernatur minus atque iusto quis laboriosam quia corrupti ipsa.",
        category: "breakfast"
    },

    {
        id: 4,
        img: "/images/menu-items/4.jpg",
        title: "Pan cake",
        price: 50,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores nam aspernatur minus atque iusto quis laboriosam quia corrupti ipsa.",
        category: "snaks"
    },

    {
        id: 5,
        img: "/images/menu-items/5.jpg",
        title: "veg salad",
        price: 50,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores nam aspernatur minus atque iusto quis laboriosam quia corrupti ipsa.",
        category: "snaks"
    },

    {
        id: 6,
        img: "/images/menu-items/6.jpg",
        title: "chicken biriyani",
        price: 180,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores nam aspernatur minus atque iusto quis laboriosam quia corrupti ipsa.",
        category: "lunch"
    },

    {
        id: 7,
        img: "/images/menu-items/7.jpg",
        title: "Butter naan",
        price: 80,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores nam aspernatur minus atque iusto quis laboriosam quia corrupti ipsa.",
        category: "dinner"
    },

    {
        id: 8,
        img: "/images/menu-items/8.jpg",
        title: "grilled chicken",
        price: 150,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores nam aspernatur minus atque iusto quis laboriosam quia corrupti ipsa.",
        category: "lunch"
    },

    {
        id: 9,
        img: "/images/menu-items/9.jpg",
        title: "Shahi paneer with rice",
        price: 200,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores nam aspernatur minus atque iusto quis laboriosam quia corrupti ipsa.",
        category: "lunch"
    },

    {
        id: 10,
        img: "/images/menu-items/10.jpg",
        title: "Shahi Bengali thali",
        price: 450,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores nam aspernatur minus atque iusto quis laboriosam quia corrupti ipsa.",
        category: "dinner"
    }
]


const menuItems = document.querySelector(".menu-items")
const btnContainer = document.querySelector(".btn-container")
console.log(btnContainer);


window.addEventListener("DOMContentLoaded", function () {
    displayMenu(menu)
    displayBtns()
})


const displayMenu = (mymenu) => {
    menuItems.innerHTML = mymenu.map(function (item) {
        return `
                <article>
                    <div class="image flex justify-center item-center">
                        <img src=${item.img} alt="">
                    </div>
                    <div class="item-description">
                        <div class="heading">
                            <h4>${item.title}</h4>
                            <p class="price">₹ ${item.price}</p>
                        </div>
                        <p>${item.desc}</p>
                    </div>
                </article>
              `
    }).join("")
}


const displayBtns = () => {
    const categories = menu.reduce(function (categoryCollection, item) {

        if (!categoryCollection.includes(item.category)) {
            categoryCollection.push(item.category)
        }
        return categoryCollection

    }, ["all"])

    btnContainer.innerHTML = categories.map(function (category) {
        return `
                  <button class="btn btn-primary filter-btn"   data-category=${category}>${category}</button>
               `
    }).join("")


    const filterBtns = document.querySelectorAll(".filter-btn")

    filterBtns.forEach(btn => {

        btn.addEventListener("click", (event) => {

            const category = event.currentTarget.dataset.category

            const filteredMenu = menu.filter(function (item) {
                if (category === item.category) {
                    return category
                }
            })
            if (category === "all") {
                displayMenu(menu)
            } else {
                displayMenu(filteredMenu)
            }
        })
    })



}

