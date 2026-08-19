// ABOUT.HTML PAGE (hobbies)
const buttons = document.querySelectorAll(".hobby-btn");
const sections = document.querySelectorAll(".hobby-section");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const target = document.getElementById(button.dataset.target);
        const isOpen = target.classList.contains("active");

        sections.forEach((section) => {
            section.classList.remove("active");
        });

        if (!isOpen) {
            target.classList.add("active");
        }
    });
});

// Hobby image lightbox
const hobbyLightbox = document.getElementById("hobby-lightbox");
const hobbyLightboxImg = document.getElementById("hobby-lightbox-img");
const hobbyLightboxClose = document.querySelector(".hobby-lightbox-close");

const hobbyGalleryImages = document.querySelectorAll(".hobby-gallery img");

hobbyGalleryImages.forEach((image) => {
    image.addEventListener("click", () => {
        hobbyLightbox.style.display = "flex";
        hobbyLightboxImg.src = image.src;
        hobbyLightboxImg.alt = image.alt;
    });
});

function closeHobbyLightbox() {
    hobbyLightbox.style.display = "none";
    hobbyLightboxImg.src = "";
}

hobbyLightboxClose.addEventListener("click", closeHobbyLightbox);

hobbyLightbox.addEventListener("click", (event) => {
    if (event.target === hobbyLightbox) {
        closeHobbyLightbox();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeHobbyLightbox();
    }
});