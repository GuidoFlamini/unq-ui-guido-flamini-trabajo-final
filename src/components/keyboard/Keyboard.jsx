import { useEffect, useRef } from 'react';
import './Keyboard.css';

const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'],
  ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Backspace'],
];

const Keyboard = ({ onKeyPress }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current?.focus();
  }, []);

  const handleKeyDown = (event) => {
    const key = event.key;

    if (key === 'Enter' || key === 'Backspace' || /^[a-zñ]$/i.test(key)) {
      event.preventDefault();
      onKeyPress(key.toUpperCase());
    }
  };

  const handleClick = (key) => {
    onKeyPress(key.toUpperCase());
  };

  return (
    <div
      className="keyboard"
      tabIndex={-1}
      ref={containerRef}
      onKeyDown={handleKeyDown}
    >
      {KEYBOARD_ROWS.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((key) => (
            <button
              key={key}
              type="button"
              className={`keyboard-key${key.length > 1 ? ' keyboard-key--wide' : ''}`}
              onClick={() => handleClick(key)}
            >
              {key === 'Backspace' ? '⌫' : key === 'Enter' ? '⏎' : key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
