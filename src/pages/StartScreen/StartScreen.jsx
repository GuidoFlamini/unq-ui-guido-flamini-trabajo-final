import './StartScreen.css';

function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <h1>El juegito de las palabritas</h1>
      <p>Formá la cadena más larga posible antes de que se agote el tiempo.</p>
      <button onClick={onStart}>Jugar</button>
    </div>
  );
}

export default StartScreen;