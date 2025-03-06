// Modal functionality
const modal = document.getElementById("registerModal");
const ctaButton = document.querySelector(".cta-button");
const closeButton = document.querySelector(".close-button");
const form = document.getElementById("registrationForm");

// Open modal
ctaButton.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Close modal
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Countdown timer
function updateCountdown() {
  // Set a fixed end date (December 31, 2023)
  const endDate = new Date("December 31, 2026");
  const today = new Date();

  // Get total seconds between the dates
  let secondsLeft = (endDate - today) / 1000;

  // Calculate days, hours, minutes and seconds
  let days = Math.floor(secondsLeft / (24 * 60 * 60));
  secondsLeft = secondsLeft % (24 * 60 * 60);

  let hours = Math.floor(secondsLeft / (60 * 60));
  secondsLeft = secondsLeft % (60 * 60);

  let minutes = Math.floor(secondsLeft / 60);
  let seconds = Math.floor(secondsLeft % 60);

  // Add leading zeros if needed (e.g., 9 becomes 09)
  if (days < 10) days = "0" + days;
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  // Update the display
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Run it once immediately
