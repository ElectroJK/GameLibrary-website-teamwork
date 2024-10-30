let ratingsData = []; // Array to store the ratings and reviews data

// Event listener for the rating form submission
document.getElementById('rating-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the selected game, rating, and review text
  const gameSelected = document.getElementById('game-select').value;
  const rating = document.querySelector('input[name="rating"]:checked')?.value || '';
  const review = document.getElementById('game-review').value;

  // Check if both rating and review are provided
  if (!rating || !review) {
    alert("Please fill out both the rating and review."); // Alert the user if inputs are missing
    return; // Exit the function if validation fails
  }

  // Push the new rating and review into the ratingsData array
  ratingsData.push({
    game: gameSelected,
    rating: parseInt(rating), // Convert rating to an integer
    review: review
  });

  alert("Thank you for your review!"); // Thank the user for their submission

  // Reset the rating input and review text area
  document.querySelector('input[name="rating"]:checked').checked = false; // Uncheck the rating radio button
  document.getElementById('game-review').value = ''; // Clear the review text area

  displayReviews(); // Call the function to update the displayed reviews
});

// Function to display the reviews in the UI
function displayReviews() {
  const reviewsContainer = document.getElementById('reviews-container'); // Select the container for reviews
  reviewsContainer.innerHTML = ''; // Clear any existing reviews in the container

  // Loop through the ratingsData array and create review elements
  ratingsData.forEach((item, index) => {
    const reviewElement = document.createElement('div'); // Create a new div for the review
    reviewElement.classList.add('review'); // Add a class to style the review
    reviewElement.innerHTML = `
      <h3>${item.game}</h3> <!-- Display the game name -->
      <p>Rating: ${item.rating} stars</p> <!-- Display the rating -->
      <p>${item.review}</p> <!-- Display the review text -->
      <button class="btn btn-danger btn-sm" onclick="deleteReview(${index})">Delete</button> <!-- Button to delete the review -->
    `;
    reviewsContainer.appendChild(reviewElement); // Append the review element to the reviews container
  });
}

// Function to delete a review based on its index in the ratingsData array
function deleteReview(index) {
  ratingsData.splice(index, 1); // Remove the review from the ratingsData array
  displayReviews(); // Refresh the displayed reviews
}
