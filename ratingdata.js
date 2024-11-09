let ratingsData = JSON.parse(localStorage.getItem('ratingsData')) || [];

document.getElementById('rating-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const username = localStorage.getItem("username");

  if (!isLoggedIn || !username) {
    alert("Please log in first before submitting a review.");
    toggleLogin();
    return;
  }

  const gameSelected = document.getElementById('game-select').value;
  const rating = document.querySelector('input[name="rating"]:checked')?.value || '';
  const review = document.getElementById('game-review').value;

  if (!rating || !review) {
    alert("Please fill out both the rating and review.");
    return;
  }

  ratingsData.push({
    game: gameSelected,
    rating: parseInt(rating),
    review: `${review} (Reviewed by: ${username})`
  });

  localStorage.setItem('ratingsData', JSON.stringify(ratingsData));

  alert(`Thank you for your review, ${username}!`);

  document.querySelector('input[name="rating"]:checked').checked = false;
  document.getElementById('game-review').value = '';

  displayReviews();
});

function displayReviews() {
  const reviewsContainer = document.getElementById('reviews-container');
  reviewsContainer.innerHTML = '';

  const currentTheme = localStorage.getItem('theme') || 'gray';
  let reviewTextColor;

  if (currentTheme === 'dark') {
    reviewTextColor = 'white';
  } else if (currentTheme === 'white') {
    reviewTextColor = 'black';
  } else {
    reviewTextColor = 'white';
  }

  ratingsData.forEach((item, index) => {
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review');
    reviewElement.style.color = reviewTextColor;
    reviewElement.innerHTML = `
      <h3>${item.game}</h3>
      <p>Rating: ${item.rating} stars</p>
      <p>${item.review}</p>
      <button class="btn btn-danger btn-sm" onclick="deleteReview(${index})">Delete</button>
    `;
    reviewsContainer.appendChild(reviewElement);
  });
}

function deleteReview(index) {
  ratingsData.splice(index, 1);
  localStorage.setItem('ratingsData', JSON.stringify(ratingsData));
  displayReviews();
}

function filterReviews() {
  const searchGameQuery = document.getElementById('search-input').value.toLowerCase();
  const searchNameQuery = document.getElementById('search-name-input').value.toLowerCase();

  const filteredReviews = ratingsData.filter(review =>
    review.game.toLowerCase().includes(searchGameQuery) &&
    review.review.toLowerCase().includes(searchNameQuery)
  );

  const reviewsContainer = document.getElementById('reviews-container');
  reviewsContainer.innerHTML = '';

  const currentTheme = localStorage.getItem('theme') || 'gray';

  if (currentTheme === 'dark') {
    reviewTextColor = 'white';
  } else if (currentTheme === 'white') {
    reviewTextColor = 'black';
  } else {
    reviewTextColor = 'white';
  }

  filteredReviews.forEach((item, index) => {
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review');
    reviewElement.style.color = reviewTextColor;
    reviewElement.innerHTML = `
      <h3>${item.game}</h3>
      <p>Rating: ${item.rating} stars</p>
      <p>${item.review}</p>
      <button class="btn btn-danger btn-sm" onclick="deleteReview(${index})">Delete</button>
    `;
    reviewsContainer.appendChild(reviewElement);
  });
}


displayReviews();
