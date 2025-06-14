let clockHours = document.querySelector('.clockHours');
let clockMinute = document.querySelector('.clockMinute');
let clockSecoend = document.querySelector('.clockSecoend');
let PmOrAm = document.querySelector('.PmOrAm');
let PmAm = document.querySelector('.PmAm');

let DayDate = document.querySelector('.DayDate');
let Switch = document.querySelector('.Switch');

let is12Hour = true;

setInterval(() =>
{
    let now = new Date();

    let hours = now.getHours();
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');

    if (is12Hour)
    {
        hours = hours % 12 || 12;
    }
    
    let period = hours >= 12 ? 'PM' : 'AM';

    // let time = `${String(hours).padStart(2, '0')} : ${minutes} : ${seconds} ${period}`
    // console.log(time);

    PmAm.textContent = is12Hour ? period : '';
    clockHours.textContent = `${String(hours).padStart(2, '0')}`;
    clockMinute.textContent = minutes;
    clockSecoend.textContent = seconds;
    
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayName = days[now.getDay()];
    let date = String(now.getDate()).padStart(2, '0');
    let month = String(now.getMonth()).padStart(2, '0');
    let year = now.getFullYear();

    let allInfoOfDate = `${dayName}, ${date}/${month}/${year}`;
    DayDate.textContent = allInfoOfDate;

}, 1000);


Switch.addEventListener('click', () =>
{
    if (is12Hour) 
    {
        is12Hour = false;
        PmOrAm.style.display = 'none';
    }
    else
    {
        is12Hour = true;
        PmOrAm.style.display = 'flex'; 
    }
});