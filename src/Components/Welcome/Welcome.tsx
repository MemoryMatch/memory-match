import './Welcome.css';
import Instructions from 'Components/Instructions/Instructions';
import ThemeForm from 'Components/ThemeForm/ThemeForm';
import { Link } from "react-router-dom";


const Welcome = () => {

  return (
    <section className="welcome-page">
      <header>
        <h2 className='welcome-text'>Welcome to Memory Match!</h2>
      </header>
      <div className='instructions-theme-container'>
        <Instructions />
        <ThemeForm />
      </div>
      <div className='link-container'>
        <Link className="play-game-link" to={{pathname: `/game/${(JSON.parse(localStorage.getItem("selectedTheme") || '{}')).value || "random"}`}}>Play Game!</Link>
      </div>
    </section>
  );
}

export default Welcome;