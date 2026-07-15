import { useState, useEffect, useRef } from 'react';
import { calculateScore, getInvalidReason } from '../utils/gameLogic';
import { saveScore } from '../utils/leaderboard';
import { validateWord } from '../utils/wordApi';

const TURN_DURATION = 15;

const INITIAL_STATE = {
  chain: [],
  usedWords: new Set(),
  score: 0,
  timeLeft: TURN_DURATION,
  status: 'idle',
  error: null,
  isChecking: false,
};

export function useGame() {
  const [state, setState] = useState(INITIAL_STATE);
  const [currentWord, setCurrentWord] = useState('');
  const intervalRef = useRef(null);

  // 1. EL TEMPORIZADOR INTELIGENTE
  useEffect(() => {
    if (state.status !== 'playing') return;

    intervalRef.current = setInterval(() => {
      setState((prev) => {
        if (prev.timeLeft <= 1) {
          clearInterval(intervalRef.current);
          
          // Si estamos esperando la API, nos quedamos en 0 pero NO terminamos el juego (suspenso)
          if (prev.isChecking) {
            return { ...prev, timeLeft: 0 }; 
          }
          
          // Si no hay nada pendiente, el juego termina normalmente
          return { ...prev, timeLeft: 0, status: 'finished' };
        }
        return { ...prev, timeLeft: prev.timeLeft - 1 };
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [state.status, state.chain.length]); // chain.length ayuda a reiniciar el intervalo cuando se suma una palabra

  useEffect(() => {
    if (state.status === 'finished') {
      saveScore(state.score, state.chain.length);
    }
  }, [state.chain.length, state.score, state.status]);

  function startGame() {
    setState({ ...INITIAL_STATE, status: 'playing' });
    setCurrentWord('');
  }

  function restartGame() {
    setState(INITIAL_STATE);
    setCurrentWord('');
  }

  async function submitWord(word) {
    const normalizedWord = word.trim().toLowerCase();
    if (!normalizedWord) return;

    const previousWord = state.chain.at(-1)?.word ?? null;
    const syncReason = getInvalidReason(normalizedWord, previousWord, state.usedWords);

    if (syncReason) {
      setState((prev) => ({ ...prev, error: syncReason }));
      return;
    }

    setState((prev) => ({ ...prev, isChecking: true, error: null }));

    const result = await validateWord(normalizedWord);

    if (!result.success || !result.exists) {
      setState((prev) => {
        const isTimeUp = prev.timeLeft === 0;
        
        return {
          ...prev,
          error: !result.success ? result.error : 'DOES_NOT_EXIST',
          isChecking: false,
          status: isTimeUp ? 'finished' : 'playing'
        };
      });
      return;
    }

    const points = calculateScore(normalizedWord);

    setState((prev) => ({
      ...prev,
      chain: [...prev.chain, { word: normalizedWord, points }],
      usedWords: new Set(prev.usedWords).add(normalizedWord),
      score: prev.score + points,
      timeLeft: TURN_DURATION, 
      status: 'playing',       
      error: null,
      isChecking: false,
    }));
    setCurrentWord('');
  }

  function handleKeyPress(key) {
    if (state.status !== 'playing' || state.isChecking) return;

    const upperKey = key.toUpperCase();

    if (upperKey === 'ENTER') {
      submitWord(currentWord);
      return;
    }

    if (upperKey === 'BACKSPACE') {
      setCurrentWord((prev) => prev.slice(0, -1));
      return;
    }

    if (/^[A-ZÑ]$/i.test(key)) {
      setCurrentWord((prev) => prev + key.toLowerCase());
    }
  }

  return { state, currentWord, startGame, restartGame, handleKeyPress };
}