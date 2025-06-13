let Container = document.querySelector(".Container");
let Color = document.querySelector(".Color");
let btn = document.querySelector(".btn");
let copy = document.querySelector(".copy");

const generate = () => {
    let c1 = Math.floor(Math.random() * 256);
    let c2 = Math.floor(Math.random() * 256);
    let c3 = Math.floor(Math.random() * 256);
    return `rgb(${c1}, ${c2}, ${c3})`;
};

btn.addEventListener('click', () => {
    let CurrColor = generate();
    Color.style.backgroundColor = CurrColor;
});

copy.addEventListener('click', () => {
    let value = Color.style.backgroundColor;

    if (value) {
        navigator.clipboard.writeText(value);

        let message = document.createElement("div");
        message.innerHTML = "Copied!";
        message.classList.add("message"); // spelling fix
        Container.appendChild(message);

        setTimeout(() => {
            message.remove();
        }, 1500);

        console.log(value);
    } else {
        alert("Generate the color first!");
    }
});
