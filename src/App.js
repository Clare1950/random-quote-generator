import React, { useEffect, useState } from "react";
import "./App.css";
import { QuoteBox } from "./containers/QuoteBox.js";

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const getQuote = () => { 
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f05fb8a641mshc320019b4bdee61p121d5bjsnc6ac6a75af6e",
        "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
      },
    };
    
    
 fetch(
   "https://famous-quotes4.p.rapidapi.com/random?category=all&count=1",
   options
 )
   .then(response => response.json())
	.then((response) => {
    console.log(response)
  setQuote(response[0].text)
  setAuthor(response[0].author)})
	.catch(err => console.error(err))

}
  
  
  useEffect( getQuote, [] )

  return (
    <div id="app">
      <h1>Random Quote Generator</h1>
      <QuoteBox
        quote={quote}
        author={author}
        getQuote={getQuote}
      />
    </div>
  );
}

export default App;
