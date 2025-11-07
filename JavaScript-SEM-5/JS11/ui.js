// ui.js — handles dynamic UI and responsive design behavior
import { logEvent } from './helper.js';

export function handleViewportChange() {
  if (window.innerWidth < 600) {
    document.body.style.background = '#f0f8ff';
  } else {
    document.body.style.background = 'white';
  }
}

export function addDynamicSessions() {
  const sessionsDiv = document.getElementById('sessions');
  sessionsDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('session')) {
      alert("You selected: " + e.target.textContent);
    }
  });
}

// Function to add a new session dynamically
export function enableAddSession() {
  const addButton = document.getElementById('addSessionBtn');
  const sessionsDiv = document.getElementById('sessions');

  addButton.addEventListener('click', () => {
    const sessionName = prompt("Enter session name:");
    const sessionTime = prompt("Enter session time (HH:MM, 24-hour):");

    if (sessionName && sessionTime) {
      const newDiv = document.createElement('div');
      newDiv.classList.add('session');
      newDiv.dataset.time = sessionTime;
      newDiv.textContent = `${sessionName} - ${sessionTime}`;
      sessionsDiv.appendChild(newDiv);
      logEvent(`Added new session: ${sessionName} at ${sessionTime}`);
    } else {
      alert("Invalid input. Session not added.");
    }
  });
}
