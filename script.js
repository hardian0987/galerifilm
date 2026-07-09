const scrollBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('show', window.scrollY > 400);
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const cards = document.querySelectorAll('.film-card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('h2').textContent;
    const quote = card.querySelector('.overlay p').textContent;
    const rating = card.dataset.rating;
    const year = card.querySelector('.year').textContent;

    const info = `${title} (${year})\nRating: ${rating}\n\n${quote}`;
    // fallback for browsers that don't support clipboard API
    try {
      navigator.clipboard.writeText(info).then(() => {
        showToast(`Makna "${title}" disalin!`);
      });
    } catch {
      // silently fail
    }
  });
});

function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  document.body.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

const style = document.createElement('style');
style.textContent = `
.toast {
  position: fixed;
  bottom: 90px;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  background: #1a1a2e;
  color: #f0f0f0;
  padding: 14px 28px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(245, 175, 25, 0.2);
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 999;
  pointer-events: none;
  white-space: nowrap;
}
.toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
`;
document.head.appendChild(style);
