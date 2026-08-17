// ABOUT.HTML PAGE (hobbies)
const buttons = document.querySelectorAll(".hobby-btn");
const sections = document.querySelectorAll(".hobby-section");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const target = document.getElementById(button.dataset.target);
        const isOpen = target.classList.contains("active");

        sections.forEach(section => {
            section.classList.remove("active");
        });

        if (!isOpen) {
            target.classList.add("active");
        }
    });
});