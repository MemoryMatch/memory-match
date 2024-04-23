import React, { useState } from 'react';
import { Card } from '../Card/Card';
import { Card as CardType } from '../../Types/card';
import { generateCards } from '../../Utils/cards';

export const GameBoard: React.FC = () => {
  const [cards, setCards] = useState<CardType[]>(generateCards());
  const [flippedCards, setFlippedCards] = useState<CardType[]>([]);

  const handleCardClick = (clickedCard: CardType) => {
    if (clickedCard.isFlipped || clickedCard.isMatched) return;

    const updatedCards = cards.map(card =>
      card.id === clickedCard.id ? { ...card, isFlipped: true } : card
    );
    setCards(updatedCards);
    const updatedFlippedCards = [...flippedCards, { ...clickedCard, isFlipped: true }];
    setFlippedCards(updatedFlippedCards);

    if (updatedFlippedCards.length === 2) {
      const [firstCard, secondCard] = updatedFlippedCards;
      if (firstCard.image === secondCard.image) {
        setCards(prevCards =>
          prevCards.map(card =>
            card.image === firstCard.image ? { ...card, isMatched: true } : card
          )
        );
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(card =>
              card.id === firstCard.id || card.id === secondCard.id
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
    }
  };


  return (
    <div className="game-board">
      {cards.map((card) => (
        <Card key={card.id} card={card} onCardClicked={handleCardClick} />
      ))}
    </div>
  );
};