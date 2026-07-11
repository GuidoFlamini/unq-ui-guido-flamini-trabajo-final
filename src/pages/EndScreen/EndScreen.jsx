import './EndScreen.css';

function EndScreen({ chain, score, onPlayAgain }) {
  return (
    <div className="end-screen">
      <h2>Partida terminada</h2>
      <p>Palabras encadenadas: {chain.length}</p>
      <p>Puntaje final: {score}</p>

      <div className="chain">
        {chain.map((item, index) => (
          <span key={index} className="chain__chip">
            {item.word} ({item.points})
          </span>
        ))}
      </div>

      <button onClick={onPlayAgain}>Ir al inicio</button>
    </div>
  );
}

export default EndScreen;