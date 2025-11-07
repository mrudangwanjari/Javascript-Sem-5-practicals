// helper.js — utility functions

// Format time as mm:ss
export function formatTime(minutes, seconds) {
  const m = minutes < 10 ? '0' + minutes : minutes;
  const s = seconds < 10 ? '0' + seconds : seconds;
  return `${m}:${s}`;
}

// Simple console logger
export function logEvent(message) {
  console.log(`[LOG ${new Date().toLocaleTimeString()}] ${message}`);
}
