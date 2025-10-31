// Function to update clock every second
function updateClock() {
  const now = new Date();

  // Get hours, minutes, seconds
  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let seconds = now.getSeconds().toString().padStart(2, '0');

  // Combine time string
  const timeString = `${hours}:${minutes}:${seconds}`;

  // Display in HTML element
  document.getElementById('clock').textContent = timeString;
}

// Run clock every 1 second
setInterval(updateClock, 1000);

// Run immediately on load
updateClock();
