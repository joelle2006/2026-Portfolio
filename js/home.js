const homeSlides = document.querySelectorAll(".home-slide");
const homeDots = document.querySelectorAll(".home-dot");
const previousButton = document.querySelector(".home-carousel-prev");
const nextButton = document.querySelector(".home-carousel-next");

let activeSlide = 0;

function renderHomeCarousel() {
  const totalSlides = homeSlides.length;
  const previousSlide = (activeSlide - 1 + totalSlides) % totalSlides;
  const nextSlide = (activeSlide + 1) % totalSlides;

  homeSlides.forEach((slide, index) => {
    slide.classList.remove("active", "previous", "next");

    if (index === activeSlide) {
      slide.classList.add("active");
    } else if (index === previousSlide) {
      slide.classList.add("previous");
    } else if (index === nextSlide) {
      slide.classList.add("next");
    }
  });

  homeDots.forEach((dot, index) => {
    dot.classList.toggle("active", index === activeSlide);
  });
}

function showSlide(index) {
  activeSlide = (index + homeSlides.length) % homeSlides.length;
  renderHomeCarousel();
}

previousButton.addEventListener("click", () => {
  showSlide(activeSlide - 1);
});

nextButton.addEventListener("click", () => {
  showSlide(activeSlide + 1);
});

homeSlides.forEach((slide, index) => {
  slide.addEventListener("click", (event) => {
    if (event.target.closest(".home-project-button")) {
      return;
    }

    if (index !== activeSlide) {
      showSlide(index);
    }
  });
});

homeDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

renderHomeCarousel();