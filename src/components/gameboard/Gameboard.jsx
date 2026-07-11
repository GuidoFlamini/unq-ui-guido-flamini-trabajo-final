import { ERROR_MESSAGES } from '../../utils/gameLogic';
import './GameBoard.css';

function CurrentWordHint({ chain }) {
  const lastWord = chain.at(-1)?.word;

  if (!lastWord) {
    return (
      <div className="current-word-hint">
        <span>Ingresá cualquier palabra para empezar</span>
      </div>
    );
  }

  const lastLetter = lastWord.at(-1);
  const rest = lastWord.slice(0, -1);

  return (
    <div className="current-word-hint">
      <span className="current-word-hint__label">Empezá con:</span>
      <span className="current-word-hint__word">
        {rest}
        <span className="current-word-hint__letter">{lastLetter}</span>
      </span>
    </div>
  );
}

function GameBoard({ state, currentWord }) {
  return (
    <div className="game-board">
      <div className="game-board__top">
        <span className="game-board__score">Puntaje: {state.score}</span>
        <span
          className={`game-board__timer${state.timeLeft <= 5 ? ' game-board__timer--danger' : ''}`}
        >
          {state.timeLeft}s
        </span>
      </div>

      <div className="chain">
        {state.chain.map((item, index) => (
          <span key={index} className="chain__chip">
            {item.word} ({item.points})
          </span>
        ))}
      </div>

      <CurrentWordHint chain={state.chain} />

      <div className="current-input">{currentWord || '\u00A0'}</div>

      <p className="error-message">
        {state.error ? ERROR_MESSAGES[state.error] : '\u00A0'}
      </p>
    </div>
  );
}

export default GameBoard;