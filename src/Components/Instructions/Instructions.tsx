import './Instructions.css';

const Instructions = () => {

  function closePopup() {
    localStorage.setItem("returningUser", "true");
    var popup:any = document.getElementById("popup");
    popup.style.display = "none";
  };

  window.onload = function() {
    if (localStorage.getItem("returningUser") != "true") {
      var popup:any = document.getElementById("popup");
      popup.style.display = "inline-block";
    }
  };

  function openPopup() {
    var popup:any = document.getElementById("popup");
    popup.style.display = "inline-block";
  };

  return (
    <section>
      <button type="button" onClick={openPopup} className="instructions">?</button>
      <dialog id="popup">
        <h3>Instructions</h3>
        <p>You will see a series of cards on your screen. They will be facing you for only a few seconds.
        Use those seconds to memorize the cards as best as you can! All cards will have an image on them that matches with another card somewhere else on your screen.
        The cards will then flip over, and it’s up to you to remember what was on them!
        Click on cards to match pairs of images until all cards have been matched in order to move on to the next level, where you will have twice as many cards to memorize and match!</p>
        <button type="button" onClick={closePopup}>Close</button>
      </dialog>
    </section>
  );
}

export default Instructions;