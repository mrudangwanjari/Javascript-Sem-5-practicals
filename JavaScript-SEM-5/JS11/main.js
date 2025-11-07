// Import functions from timer.js, ui.js, and helper.js
import { startCountdown, highlightActiveSession } from './timer.js';
import { handleViewportChange, addDynamicSessions, enableAddSession } from './ui.js';

// DOM references
const countdownDisplay = document.getElementById('countdown');

// Start a 5-minute countdown
startCountdown(300, countdownDisplay);

// Highlight active session every minute
setInterval(highlightActiveSession, 60000);
highlightActiveSession();

// Handle responsive background
window.addEventListener('resize', handleViewportChange);
handleViewportChange();

// Enable event delegation and adding new sessions
addDynamicSessions();
enableAddSession();
