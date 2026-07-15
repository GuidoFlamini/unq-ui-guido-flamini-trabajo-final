export async function validateWord(word) {
  try {
    const res = await fetch(
      `https://word-api-hmlg.vercel.app/api/validate?word=${word}`
    );

    if (!res.ok) {
      return { success: false, error: 'NETWORK_ERROR' };
    }

    const data = await res.json();
    return { success: true, exists: data.exists };
  } catch {
    return { success: false, error: 'NETWORK_ERROR' };
  }
}