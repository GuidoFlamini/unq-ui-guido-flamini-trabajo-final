import { useState, useEffect, useRef } from 'react';
import Keyboard from './components/keyboard/Keyboard';


const handleKeyPress = () => {};

function App() {
  return (
    <div className="app">
      <Keyboard onKeyPress={handleKeyPress} />
    </div>
  );
}

export default App;
