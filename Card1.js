// Card.js

import React from 'react';

const Card = ({ card }) => {
  return (
    <div className="card">
      {/* Display card information based on its type (burner or subscription) */}
      <div className="card-type">{card.card_type}</div>
      <div className="card-name">{card.name}</div>
      {card.card_type === 'burner' ? (
        <div className="card-expiry">Expiry: {card.expiry}</div>
      ) : (
        <div className="card-limit">Limit: {card.limit}</div>
      }
      {/* Display other card details like budget name, spent, etc. */}
    </div>
  );
};

export default Card;