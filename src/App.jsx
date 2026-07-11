import { useState, useEffect, useRef } from 'react';
import Keyboard from './components/keyboard/Keyboard';
import { useGame } from './hooks/useGame';
import GameBoard from './components/GameBoard/GameBoard';
import './App.css';



function App() {
  const { state, currentWord, handleKeyPress } = useGame();
  return (
    <div className="app">
      
          <GameBoard state={state} currentWord={currentWord} />
          <Keyboard onKeyPress={handleKeyPress} />

    </div>
  );
}

export default App;
