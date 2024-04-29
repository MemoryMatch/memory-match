import React, { useState, useEffect } from "react";
import { Card } from "../Card/Card";
import { Card as CardType } from "../../Types/card";
import { generateCards } from "../../Utils/cards";

export const GameBoard: React.FC = () => {
  const [cards, setCards] = useState<CardType[]>(generateCards());
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (flippedCards.length === 2) {
      setMoves((moves) => moves + 1); // Increment moves count
      checkForMatch();
    }
  }, [flippedCards]);

  const checkForMatch = () => {
    const [firstCardId, secondCardId] = flippedCards;
    const firstCard = cards.find((card) => card.id === firstCardId);
    const secondCard = cards.find((card) => card.id === secondCardId);

    if (firstCard && secondCard && firstCard.image === secondCard.image) {
      setScore((score) => score + 10);
      handleMatch(firstCardId, secondCardId);
    } else {
      resetFlippedCards();
    }
  };

  const handleMatch = (firstCardId: string, secondCardId: string) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === firstCardId || card.id === secondCardId
          ? { ...card, isMatched: true }
          : card
      )
    );
    setFlippedCards([]);
  };

  const resetFlippedCards = () => {
    setTimeout(() => {
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.isFlipped && !card.isMatched
            ? { ...card, isFlipped: false }
            : card
        )
      );
      setFlippedCards([]);
    }, 1000);
  };
  const handleCardClick = (clickedCard: CardType) => {
    if (clickedCard.isFlipped || clickedCard.isMatched) return;
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === clickedCard.id ? { ...card, isFlipped: true } : card
      )
    );
    setFlippedCards((prevFlipped) => [...prevFlipped, clickedCard.id]);
  };

  return (
    <div>
      <h3>Score: {score}</h3>
      <h3>Moves: {moves}</h3>
      <div className="game-board">
        {cards.map((card) => (
          <Card key={card.id} card={card} onCardClicked={handleCardClick} />
        ))}
      </div>
    </div>
  );
};
