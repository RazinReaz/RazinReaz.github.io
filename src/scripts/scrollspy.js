// Highlights the navbar link for the section currently being read.
// A section becomes active once its top passes ACTIVATION_LINE (fraction of viewport height).
const LINK_SELECTOR = ".nav-list__link[href^='#']";
const ACTIVE_CLASS = "is-active";
const ACTIVATION_LINE = 0.4;

const entries = [...document.querySelectorAll(LINK_SELECTOR)]
  .map((link) => ({ link, section: document.getElementById(link.hash.slice(1)) }))
  .filter((entry) => entry.section);

function setActive(activeEntry) {
  entries.forEach(({ link }) => {
    const isActive = link === activeEntry?.link;
    link.classList.toggle(ACTIVE_CLASS, isActive);
    if (isActive) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}

function update() {
  const line = window.innerHeight * ACTIVATION_LINE;
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

  let active = atBottom ? entries[entries.length - 1] : null;
  if (!active) {
    for (const entry of entries) {
      if (entry.section.getBoundingClientRect().top <= line) active = entry;
    }
  }
  setActive(active);
}

let ticking = false;
function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    update();
    ticking = false;
  });
}

if (entries.length) {
  document.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();
}
