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