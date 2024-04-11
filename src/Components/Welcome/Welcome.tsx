import './Welcome.css';
import Instructions from 'Components/Instructions/Instructions';
import ThemeForm from 'Components/ThemeForm/ThemeForm';
import { Link } from "react-router-dom";


const Welcome = () => {

  return (
    <section className="WelcomePage">
      <header>
        <h2>Welcome to Memory Match!</h2>
      </header>
        <Instructions />
        <ThemeForm />
        <Link to={{pathname: `/game/${(JSON.parse(localStorage.getItem("selectedTheme") || '{}')).value || "random"}`}}>Play Game!</Link>
    </section>
  );
}

    //   // look into "onSubmit" to make the route look like /game/theme
    //   // instead of /game?theme=something
    //   Link to="something"

export default Welcome;