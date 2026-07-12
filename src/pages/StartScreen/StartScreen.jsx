import { Link } from 'react-router-dom';
import './StartScreen.css';

function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <h1>El jueguito de las palabritas</h1>
      <p>Formá la cadena más larga posible antes de que se agote el tiempo.</p>
      <button onClick={onStart}>Jugar</button>
      <Link to="/leaderboard" className="start-screen__secondary">
        Ver leaderboard
      </Link>
    </div>
  );
}

export default StartScreen;