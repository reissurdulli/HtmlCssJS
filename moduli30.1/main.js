var wakeUpTime;
var dsTime;
var sleepTime;
var noon = 12;

function showCurrentTime(){
    var clock=document.getElementById('clock');
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var meridian = "AM";

    if(hours >= noon){
        meredian = "PM"
    }

    var clocktime = hours + ":"+minutes+":"+seconds+" - "+meredian;
    clock.innerHTML = clocktime;
}

var oneSeoncd = 1000;

setInterval(showCurrentTime, oneSeoncd)

