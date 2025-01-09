var leftBtn = document.getElementById("left");
var rightBtn = document.getElementById("right");

var images = document.getElementById("imgs");
var image = images.getElementsByTagName("img");

var currentIndex = 0;
var thumbLength = 0;

var thumbImages = document.getElementById("thumb-slider");
var thumbImageList = thumbImages.getElementsByTagName("img");



function moveImages(n) {
    if (n < 0) {
        n = image.length - 1
    }
    else if (n >= image.length) {
        n = 0
    }
    images.style.transform = `translateX(-${n * 100}%)`;
    thumbImages.style.transform = `translateX(-${n * 105}px)`;
    currentIndex = n
    thumbImageList[n].classList.add("active");
}
function left() {
    thumbImageList[currentIndex].classList.remove("active");
    moveImages(currentIndex - 1);
}
leftBtn.addEventListener("click", left);

function right() {
    thumbImageList[currentIndex].classList.remove("active");
    moveImages(currentIndex + 1);
}
rightBtn.addEventListener("click", right);



for (let j = 0; j < thumbImageList.length; j++) {
    thumbImageList[j].addEventListener("click", function () {
        for (let k = 0; k < thumbImageList.length; k++) {
            if (k != j) {
                thumbImageList[k].classList.remove("active");
            }
        }
        moveImages(j);
    })
}

thumbImageList[0].classList.add("active");

const leftslide = setInterval(left,5000);




