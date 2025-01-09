
const images = [
    'images/image_01.jpg',
    'images/image_02.jpg',
    'images/image_03.jpg',
    'images/image_04.jpg',
    'images/image_05.jpg',
    'images/image_06.jpg'
];
let currentIndex = 0;
let timer;

function changeBackground() {
    document.body.style.backgroundImage = `url(${images[currentIndex]})`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    changeBackground();
    resetTimer();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    changeBackground();
    resetTimer();
}

function resetTimer() {
    clearInterval(timer); // Stop the current timer
    timer = setInterval(nextImage, 5000); // Restart the timer
}

document.getElementById('forward').addEventListener('click', nextImage);
document.getElementById('backward').addEventListener('click', prevImage);

// Change background automatically every 5 seconds
resetTimer(); // Start the timer when the page loads

// Initially set the background
changeBackground();