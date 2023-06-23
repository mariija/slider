let img = document.getElementById("activeImg");
let activeNum = document.getElementById("activeNum");
let maxNum = document.getElementById("maxNum");
let currentImg = 1;
let maxImg = 3;

maxNum.innerText = maxImg;
activeNum.innerText = currentImg;

function nextImg() {
    currentImg++;
    if (currentImg > maxImg) {
        currentImg = 1;
    }
    img.setAttribute('src', `pics/img${currentImg}.jpg`)
    activeNum.innerText = currentImg;
}

function prevImg() {
    currentImg--;
    if (currentImg < 1) {
        currentImg = maxImg;
    }
    img.setAttribute('src', `pics/img${currentImg}.jpg`)
    activeNum.innerText = currentImg;
}
