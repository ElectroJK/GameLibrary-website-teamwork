function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function checkVisibility() {
  const shortText = document.querySelector('.shorttext');
  const container = document.querySelector('.containercss');

  if (isElementInViewport(shortText)) {
    shortText.classList.add('show');
  }

  if (isElementInViewport(container)) {
    container.classList.add('show');
  }
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
window.addEventListener('show', checkVisibility);

