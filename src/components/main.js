/* ═══════════════════════════════════════
   OULIPO PORTFOLIO — main.js
   Navigation · Filters · Reveal
═══════════════════════════════════════ */

// ── PAGE NAVIGATION ──
function navigate(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const page = document.getElementById('page-' + pageId);
  const navBtn = document.querySelector(`[data-page="${pageId}"]`);

  if (page)   page.classList.add('active');
  if (navBtn) navBtn.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
  triggerReveals();
}

// ── TOP NAV BUTTONS ──
document.querySelectorAll('.nav-item').forEach(btn => {
  btn.addEventListener('click', () => navigate(btn.dataset.page));
});

// ── PUBLICATION FILTER ──
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    document.querySelectorAll('.pub-item').forEach(item => {
      item.style.display =
        (filter === 'all' || item.dataset.type === filter) ? 'grid' : 'none';
    });
  });
});

// ── REVEAL ON SCROLL ──
function triggerReveals() {
  const reveals = document.querySelectorAll('.page.active .reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('v');
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  reveals.forEach(el => io.observe(el));

  setTimeout(() => {
    reveals.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) el.classList.add('v');
    });
  }, 80);
}

// ── INIT ──
triggerReveals();
