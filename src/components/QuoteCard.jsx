import React from 'react';
import './QuoteCard.css';

function QuoteCard ({ quotes }) {
  return (
    quotes && (
      <div className="QuoteCard">
        <img src={quotes.image} alt=""></img>
        <p>Character : {quotes.character}</p>
        <p>Quote : {quotes.quote}</p>
        </div>
    )
  )
}

export default QuoteCard;