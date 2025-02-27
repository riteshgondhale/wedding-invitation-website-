// Auto-Sliding Image Gallery
let currentSlide = 1;
const totalSlides = 10;
const slideImg = document.getElementById("slide");

function changeSlide() {
    currentSlide = (currentSlide % totalSlides) + 1;
    slideImg.src = `images/slide${currentSlide}.jpg`;
}

setInterval(changeSlide, 2000); // Change every 2 seconds

// Countdown Timer
const weddingDate = new Date("March 2, 2025 11:30:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();
