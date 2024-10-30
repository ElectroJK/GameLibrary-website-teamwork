// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
  
  // Function to update the current date and time display
  function updateDateTime() {
    const now = new Date(); // Create a new Date object representing the current date and time
    // Define formatting options for displaying the date and time
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    };
    // Convert the date to a string based on the specified locale and options
    const dateTimeString = now.toLocaleDateString('en-US', options);
    // Update the inner text of the element with ID 'currentDateTime' to show the formatted date and time
    document.getElementById('currentDateTime').innerText = `Current Date and Time: ${dateTimeString}`;
  }

  // Call updateDateTime every second (1000 milliseconds) to keep the display updated
  setInterval(updateDateTime, 1000);

  // Select all elements with the class 'read-more' to add click event listeners
  const readMoreButtons = document.querySelectorAll('.read-more');
  // Iterate through each button and add a click event listener
  readMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
      const moreText = this.nextElementSibling; // Get the next sibling element (hidden text)
      // Toggle the display style between 'block' and 'none'
      moreText.style.display = moreText.style.display === 'block' ? 'none' : 'block';
      // Change the button text based on the visibility of the additional text
      this.innerText = moreText.style.display === 'block' ? 'Read less' : 'Read more';
    });
  });
});
