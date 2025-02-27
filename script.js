// Open Google Maps when button is clicked
function openGoogleMaps() {
    window.open("https://g.co/kgs/FVu2b7h", "_blank");
}

// Countdown Timer Logic
function updateCountdown() {
    const weddingDate = new Date("March 2, 2025 11:30:00").getTime();
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

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to avoid 1-second delay

// Image Slideshow Logic
const images = [];
for (let i = 1; i <= 10; i++) {
    images.push(`images/slide${i}.jpg`);
}

let currentIndex = 0;

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("slideImage").src = images[currentIndex];
}

// Change image every 2 seconds
setInterval(changeImage, 2000);
