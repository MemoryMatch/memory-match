import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Welcome from './Components/Welcome/Welcome';
import {GameBoard} from 'Components/GameBoard/GameBoard';
import EndGame from 'Components/EndGame/EndGame';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/game/:theme" element={<GameBoard/>}/>
        <Route path='/game_over' element={<EndGame/>}/>
      </Routes>
    </main>
  );
}

export default App;
