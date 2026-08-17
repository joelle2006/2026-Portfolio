const carousel = document.querySelector(".carousel");

const slides = carousel.querySelectorAll(".carousel-item");
const dots = carousel.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index) {

    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
}

carousel.querySelector(".next").addEventListener("click", () => {
    showSlide(currentSlide + 1);
});

carousel.querySelector(".prev").addEventListener("click", () => {
    showSlide(currentSlide - 1);
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showSlide(index);
    });
});


// HEADER SCROLL HIDE/SHOW
// let lastScrollY = window.scrollY;

// const header = document.querySelector("header");

// window.addEventListener("scroll", () => {

//     if (window.scrollY > lastScrollY) {
//         // scrolling down
//         header.classList.add("hide");
//     } else {
//         // scrolling up
//         header.classList.remove("hide");
//     }

//     lastScrollY = window.scrollY;

// });

let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    // Always show the header near the top of the page
    if (window.scrollY < 100) {
        header.classList.remove("hide");
    } else if (window.scrollY > lastScrollY) {
        // Scrolling down
        header.classList.add("hide");
    } else {
        // Scrolling up
        header.classList.remove("hide");
    }

    lastScrollY = window.scrollY;

});



