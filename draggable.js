const image = document.getElementById('draggable-image');

let offsetX, offsetY;

window.addEventListener('load', () => {
  const savedLeft = localStorage.getItem('imageLeft');
  const savedTop = localStorage.getItem('imageTop');

  if (savedLeft && savedTop) {
    image.style.left = `${savedLeft}px`;
    image.style.top = `${savedTop}px`;
  } else {
    image.style.left = '650px';
    image.style.top = '100px';
  }
});

image.addEventListener('pointerdown', startDrag);

function startDrag(e) {
  e.preventDefault();

  offsetX = e.clientX - image.getBoundingClientRect().left;
  offsetY = e.clientY - image.getBoundingClientRect().top;

  document.addEventListener('pointermove', moveHandler);
  document.addEventListener('pointerup', endDrag);
  image.style.cursor = 'grabbing';
}

function moveHandler(e) {
  e.preventDefault();

  const newLeft = Math.max(0, Math.min(window.innerWidth - image.offsetWidth, e.clientX - offsetX));
  const newTop = Math.max(0, Math.min(window.innerHeight - image.offsetHeight, e.clientY - offsetY));

  image.style.left = `${newLeft}px`;
  image.style.top = `${newTop}px`;

  localStorage.setItem('imageLeft', newLeft);
  localStorage.setItem('imageTop', newTop);
}

function endDrag() {
  document.removeEventListener('pointermove', moveHandler);
  document.removeEventListener('pointerup', endDrag);
  image.style.cursor = 'grab';
}
