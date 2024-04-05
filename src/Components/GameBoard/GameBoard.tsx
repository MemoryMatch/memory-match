import React, { useState, useEffect } from 'react';
import { Card } from '../Card/Card';
import { Card as CardType } from '../../Types/card';
import { generateCards } from '../../Utils/cards';

export const GameBoard: React.FC = () => {
  const [cards, setCards] = useState<CardType[]>(generateCards());
  const [flippedCards, setFlippedCards] = useState<CardType[]>([]);

  const handleCardClick = (card: CardType) => {
  };

  useEffect(() => {
  }, [flippedCards]);

  return (
    <div className="game-board">
      {cards.map((card) => (
        <Card key={card.id} card={card} onCardClicked={handleCardClick} />
      ))}
    </div>
  );
};