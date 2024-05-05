import Instructions from "Components/Instructions/Instructions";
import ThemeForm from "Components/ThemeForm/ThemeForm";
import { Link } from "react-router-dom";
import './EndGame.css';

const EndGame = () => {

  return (
    <section className="game-over-page">
      <h1>Game Over</h1>
      <div className="score-board">
        <p>(Make dynamic with localStorage items once gameBoard complete)</p>
        <p>Levels Completed: 5 (100 cards, 50 matching pairs)</p>
        <p>Accuracy Rating: 90% (10 incorrect matches) </p>
        <p>Seconds Spent Using Hint Feature: 14</p>
      </div>
      <div className='instructions-theme-container'>
        <Instructions />
        <ThemeForm />
      </div>
      <div className='link-container'>
        <Link className="play-game-link" to={{pathname: `/game/${(JSON.parse(localStorage.getItem("selectedTheme") || '{}')).value || "random"}`}}>Play Again!</Link>
      </div>
      <div className='footer'>
        <h2>Thanks For Playing!</h2>
        <p>To learn more about Memory Match or make code contributions, check out our <a href='https://github.com/MemoryMatch/memory-match'>GitHub repository!</a></p>
      </div>
    </section>
  );
}

export default EndGame;