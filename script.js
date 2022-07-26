let currentImg;
let scrollposition;
let imgCounter = 21;

/**
 * load images from src folder after initialising
 */
function init() { 
    document.getElementById('content').innerHTML = ''
    for (let i = 1; i < imgCounter + 1; i++) {
        const src = i + '.jpg'
        document.getElementById('content').innerHTML += `
        <img class="picture" id="img${i}" onclick="fullscreen('${i}')" src="./src/${src}">
        `
    };
};

/**
 * open fullscreen width chosed image
 * @param {Int} id -id from the image who is shown in fullscreen
 */
function fullscreen(id) {
    document.getElementById('fullscreen').style.display = 'flex'
    document.getElementById('fullscreenImg').src = './src/' + id + '.jpg'
    currentImg = id; 
    scrollToTop();
};

/**
 * close fullscreen and scroll back to position before fullscreen
 */
function closeFullscreen() {
    document.getElementById('fullscreen').style.display = 'none';
    scrollBack();
};

/**
 * move back to previous image
 */
function moveBack(){
    if (currentImg > 1){
        id = parseInt(currentImg) - 1;
    } else {
        id = imgCounter;
    };
    document.getElementById('fullscreenImg').src = './src/' + id + '.jpg'
    currentImg = id; 
};

/**
 * move forward to the next image
 */
function moveForward() {
    if (currentImg < imgCounter){
        id = parseInt(currentImg) + 1;
    } else {
        id = 1;
    };
    document.getElementById('fullscreenImg').src = './src/' + id + '.jpg'
    currentImg = id;
};

/**
 * scroll to top position for render fullscreen
 */
function scrollToTop() {
    scrollposition = window.scrollY;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.body.style.overflow = "hidden";
};

/**
 * scroll back to position before render fullscreen
 */
function scrollBack(){
    window.scrollTo(0,scrollposition);
    document.body.style.overflow = "inherit";
};