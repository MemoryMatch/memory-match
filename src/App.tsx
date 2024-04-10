import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Welcome from './Components/Welcome/Welcome';
import {GameBoard} from 'Components/GameBoard/GameBoard';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/playgame/:theme" element={<GameBoard/>}/>
      </Routes>
    </main>
  );
}

export default App;
