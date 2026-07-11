import { useState, useEffect, useRef } from 'react';
import Keyboard from './components/keyboard/Keyboard';
import { useGame } from './hooks/useGame';
import GameBoard from './components/GameBoard/GameBoard';
import StartScreen from './pages/StartScreen/StartScreen';
import './App.css';



function App() {
  const { state, currentWord, handleKeyPress, startGame } = useGame();
  return (
    <div className="app">
      {state.status === 'idle' && <StartScreen onStart={startGame} />}

      {state.status === 'playing' && (
        <>
          <GameBoard state={state} currentWord={currentWord} />
          <Keyboard onKeyPress={handleKeyPress} />
        </>
      )}
    </div>
  );
}

export default App;
