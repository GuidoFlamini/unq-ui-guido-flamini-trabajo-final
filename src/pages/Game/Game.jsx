import { useGame } from '../../hooks/useGame';
import StartScreen from '../StartScreen/StartScreen';
import GameBoard from '../../components/gameboard/GameBoard';
import EndScreen from '../EndScreen/EndScreen';
import Keyboard from '../../components/keyboard/Keyboard';

function Game() {
  const { state, currentWord, startGame, restartGame, handleKeyPress } = useGame();

  return (
    <>
      {state.status === 'idle' && <StartScreen onStart={startGame} />}

      {state.status === 'playing' && (
        <>
          <GameBoard state={state} currentWord={currentWord} />
          <Keyboard onKeyPress={handleKeyPress} />
        </>
      )}

      {state.status === 'finished' && (
        <EndScreen
          chain={state.chain}
          score={state.score}
          onPlayAgain={restartGame}
        />
      )}
    </>
  );
}

export default Game;