// Modal functionality
const modal = document.getElementById("registerModal");
const ctaButton = document.querySelector(".cta-button");
const closeButton = document.querySelector(".close-button");
const form = document.getElementById("registrationForm");

// Open modal
ctaButton.addEventListener("click", () => {
  modal.style.display = "block";
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

// Form submission
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;

  try {
    // Here you would typically send the email to your backend
    // This is a mock API call
    await mockApiCall(email);

    alert("Thank you for registering! Check your email for confirmation.");
    modal.style.display = "none";
    form.reset();
  } catch (error) {
    alert("There was an error. Please try again.");
  }
});

// Mock API call function
function mockApiCall(email) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
}

// Countdown timer
function updateCountdown() {
  // Set the launch date (example: 3 months from now)
  const launchDate = new Date();
  launchDate.setMonth(launchDate.getMonth() + 3);

  const currentDate = new Date();
  const difference = launchDate - currentDate;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days
    .toString()
    .padStart(2, "0");
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call
