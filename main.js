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

// ── SIDEBAR NAV BUTTONS ──
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

  // Immediately reveal above-fold elements
  setTimeout(() => {
    reveals.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) el.classList.add('v');
    });
  }, 80);
}

// ── MOBILE SIDEBAR TOGGLE ──
// Inject hamburger on small screens
function initMobileNav() {
  if (window.innerWidth <= 700) {
    if (!document.getElementById('hamburger')) {
      const btn = document.createElement('button');
      btn.id = 'hamburger';
      btn.innerHTML = '☰';
      btn.style.cssText = `
        position:fixed; top:1rem; left:1rem; z-index:200;
        font-size:1.2rem; background:var(--ink); color:var(--vellum);
        border:none; padding:0.3em 0.5em; cursor:pointer;
        font-family:'Source Code Pro',monospace;
      `;
      btn.addEventListener('click', () => {
        document.querySelector('.sidebar').classList.toggle('open');
      });
      document.body.appendChild(btn);
    }
  }
}

window.addEventListener('resize', initMobileNav);
initMobileNav();

// ── INIT ──
triggerReveals();
