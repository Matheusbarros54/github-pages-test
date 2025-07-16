const btn = document.getElementById('catch-btn');
const scoreDisplay = document.getElementById('score');
let score = 0;

function moveButton() {
  const padding = 20;
  const maxX = window.innerWidth - btn.offsetWidth - padding;
  const maxY = window.innerHeight - btn.offsetHeight - padding;
  const randX = Math.random() * maxX;
  const randY = Math.random() * maxY;
  btn.style.transform = `translate(${randX}px, ${randY}px)`;
}

btn.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = score;
  moveButton();
});

// no início, posiciona o botão no centro
window.addEventListener('load', () => {
  const centerX = (window.innerWidth - btn.offsetWidth) / 2;
  const centerY = (window.innerHeight - btn.offsetHeight) / 2;
  btn.style.transform = `translate(${centerX}px, ${centerY}px)`;
});
