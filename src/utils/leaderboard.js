const STORAGE_KEY = 'wordChainLeaderboard';
const MAX_ENTRIES = 10;

export function getLeaderboard() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveScore(score, wordCount) {
  const entry = {
    score,
    wordCount,
    date: new Date().toISOString(),
  };

  const current = getLeaderboard();
  const updated = [...current, entry]
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_ENTRIES);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}