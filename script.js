const countdownEl = document.getElementById("countdown");
const mainContent = document.getElementById("main-content");
const countdownContainer = document.getElementById("countdown-container");

const releaseDate = new Date("May 22, 2025 00:00:00").getTime();

const interval = setInterval(() => {
  const now = new Date().getTime();
  const distance = releaseDate - now;

  if (distance <= 0) {
    clearInterval(interval);
    countdownContainer.style.display = "none";
    mainContent.style.display = "block";
  } else {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}, 1000);

function showNote(index) {
  document.getElementById(`note${index}`).style.display = "block";
}

// Floating emoji animation
const floatEmojis = ['🩵', '🤍', '✨'];

setInterval(() => {
  const emoji = document.createElement('div');
  emoji.classList.add('heart');
  emoji.innerText = floatEmojis[Math.floor(Math.random() * floatEmojis.length)];
  emoji.style.left = Math.random() * 100 + 'vw';
  emoji.style.top = '100vh';
  document.body.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 4000);
}, 800);

// Music player logic
let isPlaying = false;
const music = document.getElementById("bg-music");
const toggleBtn = document.getElementById("music-toggle");

function toggleMusic() {
  if (isPlaying) {
    music.pause();
    toggleBtn.innerText = "🔈";
  } else {
    music.play();
    toggleBtn.innerText = "🔊";
  }
  isPlaying = !isPlaying;
}

document.addEventListener("click", () => {
  if (!isPlaying) {
    music.play().then(() => {
      isPlaying = true;
      toggleBtn.innerText = "🔊";
    }).catch(() => {});
  }
}, { once: true });

// Fade out heading as you scroll
window.addEventListener('scroll', () => {
  const heading = document.getElementById('fade-heading');
  const scrollY = window.scrollY;
  const fadePoint = 300; // adjust for when fade ends
  const opacity = Math.max(1 - scrollY / fadePoint, 0);
  heading.style.opacity = opacity;
});
