document.addEventListener("DOMContentLoaded", function() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn === "true") {
    showLogout();
  } else {
    showLogin();
  }

  const togglePasswordButton = document.getElementById("toggle-password");
  const passwordInput = document.getElementById("password");

  togglePasswordButton.addEventListener("click", function() {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    togglePasswordButton.textContent = type === "password" ? "Show" : "Hide";
  });
});

function toggleLogin() {
  const loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
  loginModal.show();
}

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  if (!passwordPattern.test(password)) {
    alert("Password must be at least 8 characters long, contain at least one uppercase letter, one digit, and one special character.");
    return;
  }

  localStorage.setItem("isLoggedIn", "true");
  showLogout();
  const loginModal = bootstrap.Modal.getInstance(document.getElementById("loginModal"));
  loginModal.hide();
}

function logout() {
  const isConfirmed = confirm("Are you sure you want to log out?");
  if (isConfirmed) {
    localStorage.removeItem("isLoggedIn");
    showLogin();
  }
}

function showLogin() {
  document.getElementById("login-btn").style.display = "inline-block";
  document.getElementById("logout-btn").style.display = "none";
}

function showLogout() {
  document.getElementById("login-btn").style.display = "none";
  document.getElementById("logout-btn").style.display = "inline-block";
}
