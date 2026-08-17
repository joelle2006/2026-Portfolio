// ===============================
// LIGHTBOX
// ===============================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxVideo = document.getElementById("lightbox-video");
const closeBtn = document.querySelector(".lightbox-close");

// Every image inside a project gallery
const galleryImages = document.querySelectorAll(".project-gallery img");

// Every video preview link
const videoLinks = document.querySelectorAll(".video-link");


// ---------- Image Lightbox ----------

galleryImages.forEach(image => {
    image.addEventListener("click", () => {

        lightbox.style.display = "flex";

        // Hide video
        lightboxVideo.pause();
        lightboxVideo.style.display = "none";
        lightboxVideo.src = "";

        // Show image
        lightboxImg.style.display = "block";
        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt;
    });
});


// ---------- Video Lightbox ----------

videoLinks.forEach(link => {
    link.addEventListener("click", (e) => {

        e.preventDefault();

        lightbox.style.display = "flex";

        // Hide image
        lightboxImg.style.display = "none";

        // Show video
        lightboxVideo.style.display = "block";
        lightboxVideo.src = link.href;
        lightboxVideo.load();
        lightboxVideo.play();

    });
});


// ---------- Close Lightbox ----------

function closeLightbox() {

    lightbox.style.display = "none";

    // Reset image
    lightboxImg.src = "";
    lightboxImg.style.display = "block";

    // Reset video
    lightboxVideo.pause();
    lightboxVideo.currentTime = 0;
    lightboxVideo.src = "";
    lightboxVideo.style.display = "none";
}


// Close button
closeBtn.addEventListener("click", closeLightbox);

// Click outside media
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeLightbox();
    }
});