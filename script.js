const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

function newQuote() {
  showLoadingSpinner();
  const quote = apiQuote;

  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }

  if (quote.content.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  quoteText.textContent = quote.content;
  removeLoadingSpinner();
}

// fetch quote
async function getQuote() {
  showLoadingSpinner();
  const apiUrl = "https://api.quotable.io/random";

  try {
    const response = await fetch(apiUrl);
    apiQuote = await response.json();
    console.log(apiQuote);
    newQuote();
  } catch (error) {
    console.log(error);
  }
}

// tweet quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

// new quote event handler
newQuoteBtn.addEventListener("click", getQuote);

// tweet quote event listener
twitterBtn.addEventListener("click", tweetQuote);

getQuote();
