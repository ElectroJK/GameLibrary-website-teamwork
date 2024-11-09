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

image.addEventListener('mousedown', startDrag);
image.addEventListener('touchstart', startDrag);

function startDrag(e) {
  e.preventDefault();

  if (e.type === 'mousedown') {
    offsetX = e.clientX - image.getBoundingClientRect().left;
    offsetY = e.clientY - image.getBoundingClientRect().top;
  } else if (e.type === 'touchstart') {
    const touch = e.touches[0];
    offsetX = touch.clientX - image.getBoundingClientRect().left;
    offsetY = touch.clientY - image.getBoundingClientRect().top;
  }

  document.addEventListener('mousemove', mouseMoveHandler);
  document.addEventListener('touchmove', touchMoveHandler);
  document.addEventListener('mouseup', mouseUpHandler);
  document.addEventListener('touchend', touchEndHandler);

  image.style.cursor = 'grabbing';
}

function mouseMoveHandler(e) {
  const newLeft = e.clientX - offsetX;
  const newTop = e.clientY - offsetY;

  image.style.left = `${newLeft}px`;
  image.style.top = `${newTop}px`;


  localStorage.setItem('imageLeft', newLeft);
  localStorage.setItem('imageTop', newTop);
}

function touchMoveHandler(e) {
  const touch = e.touches[0];
  const newLeft = touch.clientX - offsetX;
  const newTop = touch.clientY - offsetY;

  image.style.left = `${newLeft}px`;
  image.style.top = `${newTop}px`;

  localStorage.setItem('imageLeft', newLeft);
  localStorage.setItem('imageTop', newTop);
}

function mouseUpHandler() {
  endDrag();
}

function touchEndHandler() {
  endDrag();
}

function endDrag() {
  document.removeEventListener('mousemove', mouseMoveHandler);
  document.removeEventListener('touchmove', touchMoveHandler);
  document.removeEventListener('mouseup', mouseUpHandler);
  document.removeEventListener('touchend', touchEndHandler);
  image.style.cursor = 'grab';
}
