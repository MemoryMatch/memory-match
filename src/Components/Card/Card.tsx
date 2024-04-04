import React from 'react';
import { Card as CardType } from '../../Types/card';

interface CardProps {
  card: CardType;
  onCardClicked: (card: CardType) => void;
}

export const Card: React.FC<CardProps> = ({ card, onCardClicked }) => {
  const handleClick = () => {
    onCardClicked(card);
  };

  return (
    <div className={`card ${card.isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      {card.isFlipped || card.isMatched ? (
        <img src={card.image} alt="card" />
      ) : (
        <div className="card-back"></div>
      )}
    </div>
  );
};