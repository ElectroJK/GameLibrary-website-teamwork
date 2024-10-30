// Function to check if an element is currently in the viewport
function isElementInViewport(el) {
  // Get the bounding rectangle of the element
  const rect = el.getBoundingClientRect();
  
  // Check if the element's rectangle is within the viewport's dimensions
  return (
    rect.top >= 0 && // Element's top is not above the viewport
    rect.left >= 0 && // Element's left is not outside the viewport
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && // Element's bottom is not below the viewport
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) // Element's right is not outside the viewport
  );
}

// Function to check the visibility of specific elements
function checkVisibility() {
  // Select elements to check visibility
  const shortText = document.querySelector('.shorttext'); // Element with the class 'shorttext'
  const container = document.querySelector('.containercss'); // Element with the class 'containercss'

  // If the shortText element is in the viewport, add the 'show' class
  if (isElementInViewport(shortText)) {
    shortText.classList.add('show');
  }

  // If the container element is in the viewport, add the 'show' class
  if (isElementInViewport(container)) {
    container.classList.add('show');
  }
}

// Add event listeners to check visibility on scroll and load events
window.addEventListener('scroll', checkVisibility); // Check visibility when scrolling
window.addEventListener('load', checkVisibility); // Check visibility when the page loads
window.addEventListener('show', checkVisibility); // Check visibility for custom 'show' event (not standard)
