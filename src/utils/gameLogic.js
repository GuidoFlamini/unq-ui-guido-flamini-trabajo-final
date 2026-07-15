export function calculateScore(word) {
  return word.length;
}

export function isWordUsed(word, usedWords) {
  return usedWords.has(word.toLowerCase());
}

export function isValidChaining(previousWord, newWord) {
  if (!previousWord) return true;
  return previousWord.at(-1).toLowerCase() === newWord.at(0).toLowerCase();
}

export function getInvalidReason(newWord, previousWord, usedWords) {
  if (isWordUsed(newWord, usedWords)) return 'ALREADY_USED';
  if (!isValidChaining(previousWord, newWord)) return 'INVALID_CHAINING';
  return null;
}

export const ERROR_MESSAGES = {
  DOES_NOT_EXIST: 'La palabra no existe.',
  ALREADY_USED: 'La palabra ya fue utilizada.',
  INVALID_CHAINING: 'La palabra no respeta la regla de encadenamiento.',
  NETWORK_ERROR: 'Sin conexión. Revisá tu internet e intentá de nuevo.',
};