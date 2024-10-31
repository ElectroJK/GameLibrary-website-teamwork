document.addEventListener('DOMContentLoaded', function() {
  function updateDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const dateTimeString = now.toLocaleDateString('en-US', options);
    document.getElementById('currentDateTime').innerText = `Current Date and Time: ${dateTimeString}`;
  }

  setInterval(updateDateTime, 1000);

  const readMoreButtons = document.querySelectorAll('.read-more');
  readMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
      const moreText = this.nextElementSibling;
      moreText.style.display = moreText.style.display === 'block' ? 'none' : 'block';
      this.innerText = moreText.style.display === 'block' ? 'Read less' : 'Read more';
        });
    });
});
