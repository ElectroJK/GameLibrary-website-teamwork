document.addEventListener("DOMContentLoaded", function() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const username = localStorage.getItem("username");

  if (isLoggedIn === "true" && username) {
    showLogout(username);
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

  if (username.length > 14) {
    alert("Username must be 14 characters or fewer.");
    return;
  }

  const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  if (password.length > 30) {
    alert("Relax, are you really afraid of hackers? Max symbols are 30 for password.");
    return;
  }

  if (!passwordPattern.test(password)) {
    alert("Password must be at least 8 characters long, contain at least one uppercase letter, one digit, and one special character. Yeah I know that this is insane, but this is for your safety");
    return;
  }

  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("username", username);
  showLogout(username);
  const loginModal = bootstrap.Modal.getInstance(document.getElementById("loginModal"));
  loginModal.hide();
}

function logout() {
  const isConfirmed = confirm("Are you sure you want to log out?");
  if (isConfirmed) {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    showLogin();
  }
}

function showLogin() {
  document.getElementById("login-btn").style.display = "inline-block";
  document.getElementById("logout-btn").style.display = "none";
  document.getElementById("username-display").style.display = "none";
}

function showLogout(username) {
  document.getElementById("login-btn").style.display = "none";
  document.getElementById("logout-btn").style.display = "inline-block";
  const usernameDisplay = document.getElementById("username-display");
  usernameDisplay.innerHTML = `<a href="profile" style="font-weight: bold; text-decoration: none; color: inherit;">Gamer: ${username}</a>`;
  usernameDisplay.style.display = "inline-block";
}
