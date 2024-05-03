// accesing the element by making variable 

let hours = document.getElementById('hour');
let minute = document.getElementById('min');
let second = document.getElementById('sec');

function displayTime(){
    let date = new Date();

    // getting hour, min, sec from date 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    // getting rotation for hour min sec 

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hours.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;

}

setInterval(displayTime, 1000)