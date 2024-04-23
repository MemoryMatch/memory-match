import './Welcome.css';
import Instructions from 'Components/Instructions/Instructions';
import ThemeForm from 'Components/ThemeForm/ThemeForm';
import { Link } from "react-router-dom";


const Welcome = () => {

  return (
    <section className="welcome-page">
      <header>
        <h2>Welcome to Memory Match!</h2>
      </header>
        <Instructions />
        <ThemeForm />
        <Link to={{pathname: `/game/${(JSON.parse(localStorage.getItem("selectedTheme") || '{}')).value || "random"}`}}>Play Game!</Link>
    </section>
  );
}

export default Welcome;