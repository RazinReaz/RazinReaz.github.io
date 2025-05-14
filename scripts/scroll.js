
const NAVBAR_HEIGHT = 80; // Adjust to actual height
const SCROLL_DURATION = 700; // ms

const easeInOutCubic = t =>
  t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;

const scrollToTarget = (targetEl) => {
  const targetY = targetEl.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  const animate = (now) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / SCROLL_DURATION, 1);
    const eased = easeInOutCubic(progress);
    window.scrollTo(0, startY + distance * eased);
    if (progress < 1) requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
};

document.querySelectorAll('.nav-list a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (!href || href === "#") return;

    const targetId = href.slice(1);
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;

    e.preventDefault();
    history.pushState(null, '', `#${targetId}`); // preserves hash without jumping
    scrollToTarget(targetEl);
  });
});

