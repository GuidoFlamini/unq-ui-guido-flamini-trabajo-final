import { useNavigate } from 'react-router-dom';
import { getLeaderboard } from '../../utils/leaderboard';
import './Leaderboard.css';

function Leaderboard() {
  const navigate = useNavigate();
  const entries = getLeaderboard();

  return (
    <div className="leaderboard">
      <h2>Mejores puntajes</h2>

      {entries.length === 0 ? (
        <p className="leaderboard__empty">Todavía no jugaste ninguna partida.</p>
      ) : (
        <ol className="leaderboard__list">
          {entries.map((entry, index) => (
            <li key={index} className="leaderboard__item">
              <span className="leaderboard__rank">{index + 1}</span>
              <span className="leaderboard__score">{entry.score} pts</span>
              <span className="leaderboard__words">{entry.wordCount} palabras</span>
            </li>
          ))}
        </ol>
      )}

      <button onClick={() => navigate(-1)}>Volver</button>
    </div>
  );
}

export default Leaderboard;