import { Card } from '../Types/card'

function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
export function generateCards(): Card[] {
  let id = 0;
  const cards: Card[] = [];

  const uniqueCards: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  uniqueCards.forEach((image) => {
    const card1: Card = { id: `${id++}`, image: image, isFlipped: false, isMatched: false };
    const card2: Card = { id: `${id++}`, image: image, isFlipped: false, isMatched: false };
    cards.push(card1, card2);
  });

  return shuffle(cards);
}