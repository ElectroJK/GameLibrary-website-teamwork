const votes = {
  'Dota 2': { likes: 0, dislikes: 0 },
  'Deadlock': { likes: 0, dislikes: 0 },
  'Cyberpunk': { likes: 0, dislikes: 0 },
  'Elden Ring': { likes: 0, dislikes: 0 }
};

const gameIdMap = {
  'Dota 2': 'dota2',
  'Deadlock': 'deadlock',
  'Cyberpunk': 'cyberpunk',
  'Elden Ring': 'elden-ring'
};

function vote(type, game) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn !== "true") {
    alert("You must be logged in to cast a vote.");
    return;
  }

  if (!votes[game] || !gameIdMap[game]) return;

  const elementIdPrefix = gameIdMap[game];

  if (type === 'like') {
    votes[game].likes++;
    const likeElement = document.getElementById(`${elementIdPrefix}-likes`);
    if (likeElement) likeElement.innerText = `${votes[game].likes} Likes`;
  } else if (type === 'dislike') {
    votes[game].dislikes++;
    const dislikeElement = document.getElementById(`${elementIdPrefix}-dislikes`);
    if (dislikeElement) dislikeElement.innerText = `${votes[game].dislikes} Dislikes`;
  }
}
