const timeElement = document.querySelector(".timerDisplay");
const startTimerBtn = document.querySelector("#startTimer");
const pauseTimerBtn = document.querySelector("#pauseTimer");
const resetTimerBtn = document.querySelector("#resetTimer");

const hoursTimer = document.querySelector("#hoursTimer");
const minutesTimer = document.querySelector("#minutesTimer");
const secondsTimer = document.querySelector("#secondsTimer");

const timer = document.querySelectorAll(".timer");
 
timer.forEach((time) => time.addEventListener("keyup" , (e) => {
    if(time.value < 0){
        time.value = 0;
    }
}))


let [seconds , minutes , hours] = [0,0,0,0];

let int = null;

const displayTimer = () => {


    if(seconds == 0 && minutes == 0 && hours == 0){
        return false
    }

    if(seconds > 0){
        seconds-=1
    }

    if(seconds == 0){
        if(minutes >= 0){
            if(minutes > 0){
                seconds = 59;
                minutes--;  
            }
            if(minutes == 00){
                if(hours > 0){
                    minutes = 60;
                    hours--;    
                }
            }
        }
    }

    // hours = hours < 0 ? "0" + hours : hours;
    // minutes = minutes < 10 ? "0" + minutes : minutes;
    // seconds = seconds < 10 ? "0" + seconds : seconds;

    secondsTimer.value = seconds;
    minutesTimer.value = minutes;
    hoursTimer.value = hours;

}

startTimerBtn.addEventListener("click" , () => {

    seconds = secondsTimer.value;
    minutes = minutesTimer.value;
    hours = hoursTimer.value;

    
    if(int !== null){
        clearInterval(int);
    }

    int = setInterval(displayTimer,1000);
})

pauseTimerBtn.addEventListener("click" , () => {
    clearInterval(int);
})

resetTimerBtn.addEventListener("click" , () => {
    clearInterval(int);
    let [milliseconds , seconds , minutes , hours] = [0,0,0,0];

    secondsTimer.value = 00;
    minutesTimer.value = 00;
    hoursTimer.value = 00;
})
