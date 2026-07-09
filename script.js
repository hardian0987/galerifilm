const scrollBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('show', window.scrollY > 400);
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ─── GENRE FILTER ───

const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.film-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    cards.forEach(card => {
      if (filter === 'all') {
        card.classList.remove('hidden');
      } else {
        const genres = card.dataset.genre.split(',');
        if (genres.includes(filter)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      }
    });
  });
});

// ─── MODAL ───

const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const img = card.querySelector('.poster img');
    const title = card.querySelector('h3').textContent;
    const year = card.querySelector('.year').textContent;
    const rating = card.dataset.rating;
    const quote = card.querySelector('.makna').textContent;
    const stars = card.querySelector('.rating-stars').innerHTML;
    const genreBadge = card.querySelector('.genre-badge').textContent;
    const genreModal = document.getElementById('modal-genre');

    document.getElementById('modal-poster').src = img.src;
    document.getElementById('modal-poster').alt = img.alt;
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-year').textContent = year;
    document.getElementById('modal-stars').innerHTML = stars;
    document.getElementById('modal-rating-num').textContent = rating;
    document.getElementById('modal-quote').textContent = quote;
    genreModal.textContent = genreBadge;

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
