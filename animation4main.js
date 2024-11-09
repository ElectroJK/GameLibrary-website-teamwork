function observeVisibility(elements) {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach(element => observer.observe(element));
}


document.addEventListener('DOMContentLoaded', () => {
  const shortText = document.querySelector('.shorttext');
  const container = document.querySelector('.containercss');
  observeVisibility([shortText, container]);
});
