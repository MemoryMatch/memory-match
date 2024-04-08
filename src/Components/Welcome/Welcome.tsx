import { useState, useEffect } from 'react';
import './Welcome.css';
import Instructions from 'Components/Instructions/Instructions';

const Welcome = () => {
  return (
    <section className="WelcomePage">
      <header>
        <h2>Welcome to Memory Match!</h2>
      </header>
        <Instructions />
      <div className="dropdown">
        <form action="/game">
          <select name="theme">
            <option value="random">Select a Theme</option>
            <option value="animals">Animals</option>
            <option value="flowers">Flowers</option>
            <option value="fruits">Fruits</option>
          </select>
          <br></br>
        <input type="submit" value="Play Game!"></input>
        </form>
      </div>
    </section>
  );
}

export default Welcome;