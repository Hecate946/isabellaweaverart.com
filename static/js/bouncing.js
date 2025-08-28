const image = document.getElementById('homepage-image');
const wrapper = document.querySelector('.homepage-wrapper');

let x = 0;
let y = 0;
let dx = 3;
let dy = 3;

let imageWidth, imageHeight;
let wrapperWidth, wrapperHeight;

function updateBounds() {
  imageWidth = image.offsetWidth;
  imageHeight = image.offsetHeight;

  wrapperWidth = wrapper.offsetWidth;
  wrapperHeight = wrapper.offsetHeight;

  // Prevent negative bounds by clamping to 0
  const maxX = Math.max(wrapperWidth - imageWidth, 0);
  const maxY = Math.max(wrapperHeight - imageHeight, 0);

  x = Math.min(x, maxX);
  y = Math.min(y, maxY);
}

function animate() {
  const maxX = Math.max(wrapperWidth - imageWidth, 0);
  const maxY = Math.max(wrapperHeight - imageHeight, 0);

  x += dx;
  y += dy;

  if (x >= maxX || x <= 0) {
    dx = -dx;
    x = Math.max(0, Math.min(x, maxX)); // clamp within bounds
  }

  if (y >= maxY || y <= 0) {
    dy = -dy;
    y = Math.max(0, Math.min(y, maxY)); // clamp within bounds
  }

  image.style.transform = `translate(${x}px, ${y}px)`;
  requestAnimationFrame(animate);
}

function startBouncing() {
  updateBounds();
  requestAnimationFrame(animate);
}

window.addEventListener('load', startBouncing);
window.addEventListener('resize', () => {
  updateBounds();
});
