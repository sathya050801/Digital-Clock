const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const am_pm = document.getElementById("ampm");

function updateClock()
{
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h>12)
    {
        h=h-12
        ampm = "PM"
    }

    h = h<10 ? "0"+h : h; /* ternary operator if time is 8 am or 8 pm it displays 08*/
    m = m<10 ? "0"+m : m;
    s = s<10 ? "0"+s : s; 

    hour.innerHTML = h
    minutes.innerHTML= m
    seconds.innerHTML= s
    am_pm.innerHTML= ampm
    setTimeout(() => { updateClock(),1000})  /* for dynamically updating the time in the website */

}

updateClock();