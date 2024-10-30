// Wait until the DOM is fully loaded before executing the code
document.addEventListener("DOMContentLoaded", function() {
  // Check if the user is logged in by looking at localStorage
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  
  // Show appropriate UI elements based on login status
  if (isLoggedIn === "true") {
    showLogout(); // User is logged in, show logout button
  } else {
    showLogin(); // User is not logged in, show login button
  }

  // Get references to the password input and toggle button
  const togglePasswordButton = document.getElementById("toggle-password");
  const passwordInput = document.getElementById("password");

  // Add click event listener to toggle the password visibility
  togglePasswordButton.addEventListener("click", function() {
    // Switch between password and text type
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type); // Change input type
    // Update button text based on current input type
    togglePasswordButton.textContent = type === "password" ? "Show" : "Hide";
  });
});

// Function to display the login modal
function toggleLogin() {
  const loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
  loginModal.show(); // Show the login modal
}

// Function to handle the login process
function login() {
  // Get username and password input values
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  // Define a regex pattern for strong password validation
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

  // Check if both username and password are provided
  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  // Validate password against the defined pattern
  if (!passwordPattern.test(password)) {
    alert("Password must be at least 8 characters long, contain at least one uppercase letter, one digit, and one special character.");
    return;
  }

  // If validation passes, set login status in localStorage
  localStorage.setItem("isLoggedIn", "true");
  showLogout(); // Update UI to show logout button

  // Hide the login modal after successful login
  const loginModal = bootstrap.Modal.getInstance(document.getElementById("loginModal"));
  loginModal.hide();
}

// Function to handle logout process
function logout() {
  // Confirm logout action with the user
  const isConfirmed = confirm("Are you sure you want to log out?");
  if (isConfirmed) {
    // Remove login status from localStorage and update UI
    localStorage.removeItem("isLoggedIn");
    showLogin(); // Update UI to show login button
  }
}

// Function to show the login button and hide logout button
function showLogin() {
  document.getElementById("login-btn").style.display = "inline-block"; // Show login button
  document.getElementById("logout-btn").style.display = "none"; // Hide logout button
}

// Function to show the logout button and hide login button
function showLogout() {
  document.getElementById("login-btn").style.display = "none"; // Hide login button
  document.getElementById("logout-btn").style.display = "inline-block"; // Show logout button
}
