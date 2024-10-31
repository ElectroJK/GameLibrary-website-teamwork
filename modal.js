document.getElementById('reset-button').addEventListener('click', function() {
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';

});
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email) {
    alert("Please enter your email.");
    return;
  }
  if (!emailPattern.test(email)) {
    alert("Invalid email format.");
    return;
  }
  if (!message) {
    alert("Please write your message.");
    return;
  }
  alert("You have successfully sent a message.");
  var contactModal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
  contactModal.hide();
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
});
