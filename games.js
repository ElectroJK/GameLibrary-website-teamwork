// Object to store votes for each game, initialized with likes and dislikes
const votes = {
  'Dota 2': { likes: 0, dislikes: 0 },
  'Deadlock': { likes: 0, dislikes: 0 },
  'Cyberpunk': { likes: 0, dislikes: 0 },
  'Elden Ring': { likes: 0, dislikes: 0 }
};

// Mapping of game names to their corresponding HTML element IDs
const gameIdMap = {
  'Dota 2': 'dota2',
  'Deadlock': 'deadlock',
  'Cyberpunk': 'cyberpunk',
  'Elden Ring': 'elden-ring'
};

// Function to handle voting for a game
function vote(type, game) {
  // Check if the user is logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  // Alert the user if they are not logged in and exit the function
  if (isLoggedIn !== "true") {
    alert("You must be logged in to cast a vote."); // Inform the user
    return; // Exit the function if not logged in
  }

  // Validate the game input and ensure it exists in the votes object and gameIdMap
  if (!votes[game] || !gameIdMap[game]) return; // Exit if the game is invalid

  // Get the corresponding HTML element ID prefix for the game
  const elementIdPrefix = gameIdMap[game];

  // Handle the 'like' voting logic
  if (type === 'like') {
    votes[game].likes++; // Increment the like count for the game
    const likeElement = document.getElementById(`${elementIdPrefix}-likes`); // Get the like element by ID
    if (likeElement) likeElement.innerText = `${votes[game].likes} Likes`; // Update the inner text to show new like count
  } 
  // Handle the 'dislike' voting logic
  else if (type === 'dislike') {
    votes[game].dislikes++; // Increment the dislike count for the game
    const dislikeElement = document.getElementById(`${elementIdPrefix}-dislikes`); // Get the dislike element by ID
    if (dislikeElement) dislikeElement.innerText = `${votes[game].dislikes} Dislikes`; // Update the inner text to show new dislike count
  }
}
