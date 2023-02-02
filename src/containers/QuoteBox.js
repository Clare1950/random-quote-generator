import React from "react";
import { Text } from "../components/quote/Text.js";
import { Author } from "../components/author/Author.js";
import { NewQuote } from "../components/newQuote/NewQuote.js";
import { ShareQuote } from "../components/sharequote/ShareQuote.js";

export const QuoteBox = ({ quote, author , getQuote}) => {
  return (
    <div id="quote-box">
      <Text  text={quote} />
      <Author  author={author} />
      <div id="buttons">
        <NewQuote  getQuote={getQuote} />
        <ShareQuote  quote={quote} />
      </div>
    </div>
  );
};
