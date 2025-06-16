const quotes = 
[
    { text: "Believe in yourself.", author: "Anonymous" },
    { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { text: "Do something today that your future self will thank you for.", author: "Unknown" },
];

const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");
const newQuoteBtn = document.querySelector(".new-quote");
const copyQuoteBtn = document.querySelector(".copy-quote");
const copyMessage = document.querySelector(".copy-message");

function getRandomQuote() 
{
    const random = Math.floor(Math.random() * quotes.length);
    const quote = quotes[random];
    quoteText.textContent = `"${quote.text}"`;
    quoteAuthor.textContent = `- ${quote.author}`;
}

// Show random quote on page load
getRandomQuote();

// New quote on button click
newQuoteBtn.addEventListener("click", getRandomQuote);

// Clipboard API to copy quote
copyQuoteBtn.addEventListener("click", () => 
{
    const fullQuote = `${quoteText.textContent} ${quoteAuthor.textContent}`;
    navigator.clipboard.writeText(fullQuote).then(() => 
    {
        copyMessage.style.display = "block";
        setTimeout(() => (copyMessage.style.display = "none"), 1500);
    });
});


const quoteInput = document.querySelector("#quoteInput");
const timer = document.querySelector("#timer");
let isStarted = false;
let Timer = 0;
let intervalID;

let startTime = () =>
{
    intervalID = setInterval(() =>
    {
        Timer++;
        timer.textContent = Timer;
    }, 1000);
}
quoteInput.addEventListener('input', () =>
{
    if (!isStarted) 
    {
        startTime();
        isStarted = true;
        
    }
    const userInput = quoteInput.value.trim();
    const targetQuote = quoteText.textContent.replace(/"/g, '').trim();

    if (userInput === targetQuote) 
    {
        clearInterval(intervalID);          // Stop timer
        alert(`🎉 Well done! You typed it in ${Timer} seconds.`);
        isStarted = false;                  // Reset for next quote
        Timer = 0;
        timer.textContent = '0';
        quoteInput.value = '';
        getRandomQuote();                   // Load next quote
    }
})
