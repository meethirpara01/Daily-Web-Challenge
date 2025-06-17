const quotes = [
    { text: "Believe in yourself.", author: "Anonymous" },
    { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { text: "Do something today that your future self will thank you for.", author: "Unknown" },
];

const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");
const newQuoteBtn = document.querySelector(".new-quote");
const copyQuoteBtn = document.querySelector(".copy-quote");
const copyMessage = document.querySelector(".copy-message");

const quoteInput = document.querySelector("#quoteInput");
const timer = document.querySelector("#timer");
const restart = document.querySelector("#restart");
const WPM = document.querySelector("#wpm");

let isStarted = false;
let Timer = 0;
let intervalID;

function getRandomQuote() {
    const random = Math.floor(Math.random() * quotes.length);
    const quote = quotes[random];
    quoteText.textContent = `"${quote.text}"`;
    quoteAuthor.textContent = `- ${quote.author}`;
    quoteInput.disabled = false;
    quoteInput.value = '';
    quoteInput.classList.remove('correct', 'incorrect');
    timer.textContent = '0';
    Timer = 0;
    isStarted = false;
}

getRandomQuote();

newQuoteBtn.addEventListener("click", getRandomQuote);

copyQuoteBtn.addEventListener("click", () => {
    const fullQuote = `${quoteText.textContent} ${quoteAuthor.textContent}`;
    navigator.clipboard.writeText(fullQuote).then(() => {
        copyMessage.style.display = "block";
        setTimeout(() => (copyMessage.style.display = "none"), 1500);
    });
});

function startTime() {
    intervalID = setInterval(() => {
        Timer++;
        timer.textContent = Timer;
    }, 1000);
}

quoteInput.addEventListener('input', () => {
    const userInput = quoteInput.value.trim();
    const targetQuote = quoteText.textContent.replace(/"/g, '').trim();

    // Real-time feedback
    if (targetQuote.startsWith(userInput)) {
        quoteInput.classList.add('correct');
        quoteInput.classList.remove('incorrect');
    } else {
        quoteInput.classList.add('incorrect');
        quoteInput.classList.remove('correct');
    }

    // Start timer once
    if (!isStarted) {
        startTime();
        isStarted = true;
    }

    // If completed
    if (userInput === targetQuote) {
        clearInterval(intervalID);
        let words = targetQuote.split(" ").length;
        let minutes = Timer / 60;
        let wpm = Math.round(words / minutes);

        WPM.textContent = wpm;
        alert(`🎉 Well done! Time: ${Timer}s\nWPM: ${wpm}`);
        quoteInput.disabled = true;
    }
});

restart.addEventListener('click', () => {
    clearInterval(intervalID);
    getRandomQuote();
});
