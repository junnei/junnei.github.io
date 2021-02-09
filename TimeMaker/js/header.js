const topNav = document.getElementById('top-nav');
const navTime = topNav.querySelector('.nav-time-wrap');
const navWeather = topNav.querySelector('.nav-weather-wrap');

const timeDiv = document.createElement('img');
timeDiv.classList.add('nav-time');
timeDiv.src = nowTimeSVG();
timeDiv.alt = "time";
timeDiv.addEventListener('click',handleTime);
navTime.appendChild(timeDiv);
/*
const weatherDiv = document.createElement('img');
weatherDiv.classList.add('nav-weather');
weatherDiv.src = nowTimeSVG();
weatherDiv.alt = "weather";
navWeather.appendChild(weatherDiv);
*/
function handleTime(){
    const clockBody = document.querySelector('.clock-body');
    const inputWrap = document.getElementById('input-wrap');

    if(!this.classList.contains('active')){
        this.classList.add('active');
        clockBody.style.opacity = 1;
        inputWrap.classList.add('activeClock');
    }else{
        this.classList.remove('active');
        clockBody.style.opacity = 0;
        inputWrap.classList.remove('activeClock');
    }
}
function nowTimeSVG(){
    let output;
    const now = new Date();
    const hour = now.getHours();
    if(hour >= 6 && hour < 8){
        output = 4;
    }
    else if(hour >= 8 && hour < 10){
        output = 3;
    }
    else if(hour >= 10 && hour < 12){
        output = 2;
    }
    else if(hour >= 12 && hour < 14){
        output = 1;
    }
    else if(hour >= 14 && hour < 16){
        output = 2;
    }
    else if(hour >= 16 && hour < 18){
        output = 3;
    }
    else if(hour >= 18 && hour < 20){
        output = 4;
    }
    else{
        output = 5;
    }
    return "svg/"+output+".svg";
}