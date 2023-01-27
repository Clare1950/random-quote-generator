import React from "react";

export const ShareQuote = ({ quote }) => {
  const twitterLink = "https://twitter.com/intent/tweet?text=";
  const quoteLink = quote.split(" ").join('%20');
const shareLink = twitterLink + quoteLink
  return (
    <a href={shareLink} target="_blank">
      Share Quote
    </a>
  );
};
