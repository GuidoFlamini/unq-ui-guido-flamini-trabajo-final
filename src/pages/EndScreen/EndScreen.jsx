import { Link } from 'react-router-dom';
import { getLeaderboard } from '../../utils/leaderboard';
import './EndScreen.css';

function EndScreen({ chain, score, onPlayAgain }) {
  const leaderboard = getLeaderboard();
  const madeTop10 = leaderboard.some((entry) => entry.score === score);

  return (
    <div className="end-screen">
      <h2>Partida terminada</h2>
      <p>Palabras encadenadas: {chain.length}</p>
      <p>Puntaje final: {score}</p>

      {madeTop10 && <p className="end-screen__highlight">¡Entraste al top 10!</p>}

      <div className="chain">
        {chain.map((item, index) => (
          <span key={index} className="chain__chip">
            {item.word} ({item.points})
          </span>
        ))}
      </div>

      <div className="end-screen__actions">
        <button onClick={onPlayAgain}>Ir al Inicio</button>
        <Link to="/leaderboard" className="end-screen__secondary">
          Ver leaderboard
        </Link>
      </div>
    </div>
  );
}

export default EndScreen;