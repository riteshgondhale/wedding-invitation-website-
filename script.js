// Countdown Timer
const weddingDate = new Date("2025-12-15").getTime();

const timer = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = 
        `${days} Days ${hours} Hours ${minutes} Min ${seconds} Sec`;

    if (timeLeft < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "The Wedding Has Started!";
    }
}, 1000);

// Image Slideshow
let slideIndex = 1;
const totalSlides = 10;

function showSlide(index) {
    const img = document.getElementById("galleryImage");
    img.src = `images/slide${index}.jpg`;
}

function nextSlide() {
    slideIndex++;
    if (slideIndex > totalSlides) {
        slideIndex = 1;
    }
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    if (slideIndex < 1) {
        slideIndex = totalSlides;
    }
    showSlide(slideIndex);
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);
