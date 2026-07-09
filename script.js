const scrollBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('show', window.scrollY > 400);
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const cards = document.querySelectorAll('.film-card');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const img = card.querySelector('.poster img');
    const title = card.querySelector('h2').textContent;
    const year = card.querySelector('.year').textContent;
    const rating = card.dataset.rating;
    const quote = card.querySelector('.overlay p').textContent;
    const stars = card.querySelector('.rating').innerHTML;

    document.getElementById('modal-poster').src = img.src;
    document.getElementById('modal-poster').alt = img.alt;
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-year').textContent = year;
    document.getElementById('modal-stars').innerHTML = stars;
    document.getElementById('modal-rating-num').textContent = rating;
    document.getElementById('modal-quote').textContent = quote;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
