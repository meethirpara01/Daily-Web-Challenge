let themeToggle = document.querySelector('.themeToggle');
let logo = document.querySelector('.logo');
let counter = document.querySelector('.counter');
let count = document.querySelector('.count');
let inc = document.querySelector('.inc');
let dec = document.querySelector('.dec');
let reset = document.querySelector('.reset');

let flag = true;
themeToggle.addEventListener('click', () =>
{
    document.body.classList.toggle('dark-theme');
    if (flag) 
    {
        themeToggle.innerHTML = '☀️';
        logo.style.color = '#fff';
        counter.style.color = '#fff';
        count.style.color = '#fff';
        count.style.border = '1px solid white';
        inc.style.color = '#fff';
        dec.style.color = '#fff';
        reset.style.color = '#fff';
        inc.style.backgroundColor = '#111';
        dec.style.backgroundColor = '#111';
        reset.style.backgroundColor = '#111';
        flag = false;
    } 
    else
    {
        themeToggle.innerHTML = '🌚'
        logo.style.color = '#111';
        counter.style.color = '#111';
        count.style.color = '#111';
        count.style.border = '1px solid black';
        inc.style.color = '#111';
        dec.style.color = '#111';
        reset.style.color = '#111';
        inc.style.backgroundColor = '#fff';
        dec.style.backgroundColor = '#fff';
        reset.style.backgroundColor = '#fff';
        flag = true;
    }
});


let COUNT = 0;
if (localStorage.getItem('COUNT')) 
    COUNT = Number(localStorage.getItem('COUNT'));
else
    COUNT = 0;

count.textContent = COUNT;
inc.addEventListener('click', ()=>
{
    COUNT++;
    count.textContent = COUNT;
    localStorage.setItem('COUNT', COUNT);
});

dec.addEventListener('click', ()=>
{
    if (COUNT > 0) 
    {
        COUNT--; 
        count.textContent = COUNT; 
        localStorage.setItem('COUNT', COUNT);
    }  
});

reset.addEventListener('click', ()=>
{
    COUNT = 0;
    count.textContent = 0; 
    localStorage.setItem('COUNT', COUNT);
});