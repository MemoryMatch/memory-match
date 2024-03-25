import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Welcome from './Components/Welcome/Welcome';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Welcome />}/>
      </Routes>
    </main>
  );
}

export default App;
