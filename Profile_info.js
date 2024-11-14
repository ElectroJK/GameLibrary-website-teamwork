document.getElementById('save-btn').addEventListener('click', function() {
  const favoriteGame = document.getElementById('favorite-game').value;
  const birthday = document.getElementById('birthday').value;
  const aboutMe = document.getElementById('about-me').value;

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const username = localStorage.getItem("username");

  if (isLoggedIn === "true" && username) {
    localStorage.setItem(`${username}_favoriteGame`, favoriteGame);
    localStorage.setItem(`${username}_birthday`, birthday);
    localStorage.setItem(`${username}_aboutMe`, aboutMe);

    alert('Your profile has been saved!');
  } else {
    alert('Please log in to save your profile.');
  }
});

window.onload = function() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const username = localStorage.getItem("username");

  if (isLoggedIn === "true" && username) {
    const usernameDisplay = document.getElementById('username-display');
    usernameDisplay.textContent = `Gamer: ${username}`;
    usernameDisplay.style.fontWeight = "bold";
    usernameDisplay.style.display = "inline-block";

    if (localStorage.getItem(`${username}_favoriteGame`)) {
      document.getElementById('favorite-game').value = localStorage.getItem(`${username}_favoriteGame`);
    }
    if (localStorage.getItem(`${username}_birthday`)) {
      document.getElementById('birthday').value = localStorage.getItem(`${username}_birthday`);
    }
    if (localStorage.getItem(`${username}_aboutMe`)) {
      document.getElementById('about-me').value = localStorage.getItem(`${username}_aboutMe`);
    }
  } else {
    const usernameDisplay = document.getElementById('username-display');
    usernameDisplay.style.display = "none";
  }
};
