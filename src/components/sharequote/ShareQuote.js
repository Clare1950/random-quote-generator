import React from "react";

export const ShareQuote = ({ quote }) => {
  const twitterLink = "https://twitter.com/intent/tweet?text=";
  const quoteLink = quote.split(" ").join('%20');
const shareLink = twitterLink + quoteLink
  return (
    <a id="tweet-quote"  href={shareLink} target="_blank">
      <i class="fa fa-twitter" aria-hidden="true"></i>
    </a>
  );
};
