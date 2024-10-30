// Add event listener to the reset button
document.getElementById('reset-button').addEventListener('click', function() {
  // Clear the email and message input fields when the reset button is clicked
  document.getElementById('email').value = ''; // Clear the email field
  document.getElementById('message').value = ''; // Clear the message field
});

// Add event listener to the contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the values from the input fields
  const email = document.getElementById('email').value; // Get email input value
  const message = document.getElementById('message').value; // Get message input value

  // Define the email pattern for validation
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // Validate email input
  if (!email) {
    alert("Please enter your email."); // Alert if the email field is empty
    return; // Exit the function if validation fails
  }
  if (!emailPattern.test(email)) {
    alert("Invalid email format."); // Alert if the email format is invalid
    return; // Exit the function if validation fails
  }

  // Validate message input
  if (!message) {
    alert("Please write your message."); // Alert if the message field is empty
    return; // Exit the function if validation fails
  }

  // Alert success message if all validations pass
  alert("You have successfully sent a message.");

  // Hide the contact modal after successful submission
  var contactModal = bootstrap.Modal.getInstance(document.getElementById('contactModal')); // Get the modal instance
  contactModal.hide(); // Hide the modal

  // Clear the email and message fields after submission
  document.getElementById('email').value = ''; // Clear the email field
  document.getElementById('message').value = ''; // Clear the message field
});
