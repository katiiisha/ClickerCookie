const btn = document.querySelector('.btn');
const imgCookie = document.querySelector('.imgCookie');
const clickerCounter = document.querySelector('.click');
const clikerSpeeb = document.querySelector('.speed');
btn.onclick = StartGame
function StartGame() {
    let timer = document.createElement('p');
    timer.textContent = '0:10';
    timer.className = 'timer';
    btn.replaceWith(timer);
    let timerId = setInterval(() => {timerGame(timer, timerId)}, 1000)
    imgCookie.style.cursor = 'pointer';
    let counter = 0;
    let clickLast = 0;
    let index = 0; 
    const imgSrc = ['img/cookieStart.png', 'img/cookiePlay.png'];
    imgCookie.src = imgSrc[index];
    imgCookie.onclick = function () {
        index === 0 ? index = 1 : index = 0;
        imgCookie.src = imgSrc[index];
        counter += 1;
        clickerCounter.textContent = counter;
        let clickNow = new Date();
        let clickTime = Number(clickNow) - Number(clickLast);
        let speed = Math.abs((1 / clickTime) * 1000).toFixed(2);
        clickLast = Number(clickNow);
        clikerSpeeb.textContent = speed;
    };
}

function timerGame(timer, timerId) {
    let timerText = timer.textContent.split(':')[1];
    timerText = +timerText - 1
    timer.textContent = `0:0${timerText}`
    if (timerText == 0) {
        timer.replaceWith(btn);
        btn.textContent = 'restart';
        imgCookie.onclick = false;
        imgCookie.src = 'img/CookieGameOver.png';
        imgCookie.style.cursor = 'default';
        clearInterval(timerId);
    }
}




