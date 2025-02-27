let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(n) {
    slides.forEach((slide, i) => {
        slide.style.display = i === n ? "block" : "none";
    });
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

document.addEventListener("DOMContentLoaded", () => {
    showSlide(index);
});
