import React from "react";

export const NewQuote = ({ getQuote }) => {
  return (
    <button id="new-quote" onClick={getQuote}>
      Get New Quote
    </button>
  );
};
