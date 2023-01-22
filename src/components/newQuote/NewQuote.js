import React from "react";

export const NewQuote = ({ getQuote }) => {
  return <button onClick={getQuote}>Get New Quote</button>;
};
