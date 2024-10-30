let ratingsData = [];

document.getElementById('rating-form').addEventListener('submit', function (event) {
  event.preventDefault();

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
    review: review
  });

  alert("Thank you for your review!");

  document.querySelector('input[name="rating"]:checked').checked = false;
  document.getElementById('game-review').value = '';

  displayReviews();
});

function displayReviews() {
  const reviewsContainer = document.getElementById('reviews-container');
  reviewsContainer.innerHTML = '';
  ratingsData.forEach((item, index) => {
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review');
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
  displayReviews();
}
