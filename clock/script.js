const deg = 6;
const hr = document.querySelector('#hr');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

setInterval(()=>{

    let day = new Date();
    let hh = day.getHours()*30;
    let mm = day.getMinutes()* deg;
    let ss = day.getSeconds()* deg;
    
    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    min.style.transform = `rotateZ(${(mm)}deg)`;
    sec.style.transform = `rotateZ(${(ss)}deg)`;

    let h = new Date().getHours();
    let m = new Date(). getMinutes();
    let s = new Date(). getSeconds();
    
    h = (h<10) ? "0"+ h : h;
    m = (m<10) ? "0"+ m : m;
    s = (s<10) ? "0"+ s : s;

    document.querySelector('#digital_hour').innerHTML = h+":" ;
    document.querySelector('#digital_minute').innerHTML = m+":";
    document.querySelector('#digital_second').innerHTML =s;
})

// Alarm

let alarmSound = new Audio();
alarmSound.src = './Alarm.mp3';
let alarmTimer ;

function setAlarm(button){
    let ms = document.getElementById('alarmTime').valueAsNumber;
    if(isNaN(ms)){
        alert('Invalid Date');
        return;
    }
    let alarm = new Date(ms);
    let alarmTime = new Date(alarm.getUTCFullYear(),alarm.getUTCMonth(), alarm.getUTCDate(), alarm.getUTCHours(), alarm.getUTCMinutes(), alarm.getUTCSeconds());
    let differenceInTime = alarmTime.getTime() - (new Date()).getTime();
    if(differenceInTime<0){
        alert('Invaid Time selection!!');
        return ;
    }
    alarmTimer = setTimeout(initAlarm, differenceInTime);
    button.innerText = 'Cancel Alarm';
    button.setAttribute('onclick','cancelAlarm(this)');
};

function initAlarm() {
    alarmSound.play();
    document.getElementById('alarmOptions').style.display = '';
};

function cancelAlarm(button){
   button.innerText = 'Set Alarm';
   button.setAttribute('onclick','setAlarm(this)');
   clearTimeout(alarmTimer);
};

function stopAlarm(){
    alarmSound.pause();
    alarmSound.currentTime = 0;
    document.getElementById('alarmOptions').style.display = 'none';
    cancelAlarm(document.getElementById('alarmButton'));
};

function snooze(){
    stopAlarm();
    setTimeout(initAlarm,36000);
};