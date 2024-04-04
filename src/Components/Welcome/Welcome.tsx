import { useState } from 'react';
import './Welcome.css';

const Welcome = () => {

  const [returningUser, setReturningUser] = useState<boolean>(false);

  function hidePopup() {
    console.log("test");
    if (returningUser === true) {
      const popup = document.getElementById('myPopup');
      if (popup) {
        popup.style.visibility = "invisible";
      }
    }
  }

  hidePopup();

  return (
    <section className="WelcomePage">
      <header>
        <h2>Welcome to Memory Match!</h2>
      </header>
      <div className="popup">
        <span className="popuptext" id="myPopup">
        <h3>Instructions</h3>
        <p>You will see a series of cards on your screen. They will be facing you for only a few seconds.
        Use those seconds to memorize the cards as best as you can! All cards will have an image on them that matches with another card somewhere else on your screen.
        The cards will then flip over, and it’s up to you to remember what was on them!
        Click on cards to match pairs of images until all cards have been matched in order to move on to the next level, where you will have twice as many cards to memorize and match!</p>
        <button type="button" onClick={() => {
          console.log('test');
          setReturningUser(true);
          hidePopup();
        }}>Close</button>
        </span>
      </div>
    </section>
  );
}

export default Welcome;