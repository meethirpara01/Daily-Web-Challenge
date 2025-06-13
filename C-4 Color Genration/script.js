let generateColor = () =>
{
    let random = Math.floor(Math.random() * 16777215);
    let Hex = random.toString(16);
    let fullHex = Hex.padStart(6, '0');
    let Hexcolor = `#${fullHex}`;
    console.log(Hexcolor);

    return Hexcolor;
}

function isLightColor(hex)
{
    const r = parseInt(hex.substr(1, 2), 16);
    const g = parseInt(hex.substr(3, 2), 16);
    const b = parseInt(hex.substr(5, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 155; // Adjust threshold as needed
}



let Genrate = document.querySelector(".Genrate");
let GColor = document.querySelector(".GColor");

let AddData = "";
function createColorCard(color) 
{
    let colorDiv = document.createElement('div');
    colorDiv.classList.add('color');
    colorDiv.style.backgroundColor = color;

    let text = document.createElement('p');
    text.classList.add('HEXCOLOR');
    text.textContent = color;
    text.style.color = isLightColor(color) ? 'black' : 'white';

    let copy = document.createElement('button');
    copy.textContent = 'Copy';
    copy.classList.add('Copy');

    let Delete = document.createElement('button');
    Delete.textContent = 'Delete';
    Delete.classList.add('delete');

    colorDiv.appendChild(text);
    colorDiv.appendChild(copy);
    colorDiv.appendChild(Delete);

    GColor.prepend(colorDiv);  // or appendChild if you want reverse
}
Genrate.addEventListener('click', () =>
{
    let Color = generateColor();

    createColorCard(Color);

    saveColorToStorage(Color);


});

GColor.addEventListener('click', (e) =>
{

    if (e.target.classList.contains('Copy')) 
    {
        console.log(e.target.previousElementSibling.textContent);
        let textContente = e.target.previousElementSibling.textContent;

        navigator.clipboard.writeText(textContente);

        let messege = document.createElement('div');
        messege.textContent = 'Copied!';
        messege.classList.add("message");
        e.target.parentElement.appendChild(messege);

        setTimeout(() =>
        {
            messege.remove();
        }, 1500);
    }
    
    if (e.target.classList.contains('delete')) 
    {
        let colorToDelete = document.querySelector('.HEXCOLOR').textContent;
        let storedColors = JSON.parse(localStorage.getItem("colors")) || [];
        let updatedColors = storedColors.filter(c => c !== colorToDelete);
        localStorage.setItem("colors", JSON.stringify(updatedColors));

        
        let card = e.target.parentElement;
        card.classList.add('fade-out');
        setTimeout(() => card.remove(), 300);     
    }
});

let history = document.querySelector(".history");
history.addEventListener('click', () =>
{
    GColor.innerHTML = "";
    localStorage.removeItem("colors");

});




function saveColorToStorage(color) 
{
    let storedColors = JSON.parse(localStorage.getItem("colors")) || [];

    storedColors.unshift(color); // latest on top
    localStorage.setItem("colors", JSON.stringify(storedColors));
}

window.addEventListener("DOMContentLoaded", () => {
    let saved = JSON.parse(localStorage.getItem("colors")) || [];
    saved.forEach((color) => createColorCard(color));
});


