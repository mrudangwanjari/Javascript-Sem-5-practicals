// timer.js — contains countdown and session highlight logic
import { formatTime, logEvent } from './helper.js';

// Function to start a countdown timer
export function startCountdown(duration, display) {
  let time = duration; // time in seconds

  const timer = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    // Update countdown message
    display.textContent = `Next session starts in ${formatTime(minutes, seconds)}`;

    // Add red warning color when < 1 minute
    if (time < 60) {
      display.classList.add('warning');
    } else {
      display.classList.remove('warning');
    }

    time--;

    if (time < 0) {
      clearInterval(timer);
      display.textContent = "Session Started!";
      display.classList.remove('warning');
      logEvent("Countdown finished!");
    }
  }, 1000);
}

// Function to highlight the currently active session
export function highlightActiveSession() {
  const sessions = document.querySelectorAll('.session');
  const now = new Date();
  const currentHour = now.getHours();

  sessions.forEach(session => {
    const hour = parseInt(session.dataset.time.split(':')[0]);
    if (hour === currentHour) {
      session.classList.add('active');
    } else {
      session.classList.remove('active');
    }
  });
}
