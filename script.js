let currentImg;
let scrollposition;
let imgCounter = 21;

function init() { 
    document.getElementById('content').innerHTML = ''
    for (let i = 1; i < imgCounter + 1; i++) {
        const src = i + '.jpg'
        document.getElementById('content').innerHTML += `
        <img class="picture" id="img${i}" onclick="fullscreen('${i}')" src="./src/${src}">
        `
    };
};

function fullscreen(id) {
    document.getElementById('fullscreen').style.display = 'flex'
    document.getElementById('fullscreenImg').src = './src/' + id + '.jpg'
    currentImg = id; 
    scrollToTop();
};

function closeFullscreen() {
    document.getElementById('fullscreen').style.display = 'none';
    scrollBack();
};

function moveBack(){
    if (currentImg > 1){
        id = parseInt(currentImg) - 1;
    } else {
        id = imgCounter;
    };
    document.getElementById('fullscreenImg').src = './src/' + id + '.jpg'
    currentImg = id; 
};

function moveForward() {
    if (currentImg < imgCounter){
        id = parseInt(currentImg) + 1;
    } else {
        id = 1;
    };
    document.getElementById('fullscreenImg').src = './src/' + id + '.jpg'
    currentImg = id;
};

function scrollToTop() {
    scrollposition = window.scrollY;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.body.style.overflow = "hidden";
};

function scrollBack(){
    window.scrollTo(0,scrollposition);
    document.body.style.overflow = "inherit";
};