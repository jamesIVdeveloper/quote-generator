// fetch quote
async function getQuote() {
  const apiUrl = "https://api.quotable.io/random";

  try {
    const response = await fetch(apiUrl);
    apiQuote = await response.json();
    console.log(apiQuote);
  } catch (error) {
    console.log(error);
  }
}

getQuote();
