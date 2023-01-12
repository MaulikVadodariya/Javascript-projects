let [milliseconds , seconds , minutes , hours] = [0,0,0,0];

const timeElement = document.querySelector(".timerDisplay");
const startTimerBtn = document.querySelector("#startTimer");
const pauseTimerBtn = document.querySelector("#pauseTimer");
const resetTimerBtn = document.querySelector("#resetTimer");

let int = null;

const displayTimer = () => {
    milliseconds+=10;

    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 0 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timeElement.innerHTML = ` ${h} : ${m} : ${s} : ${ms} `;
}

startTimerBtn.addEventListener("click" , () => {
    if(int !== null){
        clearInterval(int);
    }

    int = setInterval(displayTimer,10);
})

pauseTimerBtn.addEventListener("click" , () => {
    clearInterval(int);
})

resetTimerBtn.addEventListener("click" , () => {
    clearInterval(int);
    let [milliseconds , seconds , minutes , hours] = [0,0,0,0];
    timeElement.innerHTML = '00 : 00 : 00 : 000';
})