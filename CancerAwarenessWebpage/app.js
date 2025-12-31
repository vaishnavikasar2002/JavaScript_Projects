const quotes = [
    "Cancer is tough, but so are you.",
    "Awareness today can save lives tomorrow.",
    "Strength, hope, and courage define every survivor.",
    "You are stronger than you think.",
    "No one fights alone. We stand together.",
    "Every journey matters. Every life matters.",
    "Hope is stronger than fear.",
    "Early detection saves lives. Awareness creates change.",
    "Together, we fight cancer with courage and care.",
    "Support gives strength. Awareness gives power."
];

let index = 0;

const quoteElement = document.getElementById("quote");
const button = document.getElementById("changeBtn");

function showQuote() {
    quoteElement.innerText = quotes[index];
    index = (index + 1) % quotes.length;
}

// after Page load - showing first quote
showQuote();

// clicking btn for new quote
button.addEventListener("click", showQuote);

// Auto change every 5 seconds
setInterval(showQuote, 5000);