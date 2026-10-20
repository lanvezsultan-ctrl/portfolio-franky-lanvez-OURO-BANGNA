// Script unique du site : quelques Ko, aucune dépendance.
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const root = document.documentElement;

/* ---------- Thème ---------- */
document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) =>
  btn.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch {}
  }),
);

/* ---------- Menu mobile ---------- */
const menuBtn = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const menu = document.getElementById('mobile-menu');
if (menuBtn && menu) {
  const setOpen = (open: boolean) => {
    menuBtn.setAttribute('aria-expanded', String(open));
    menu.toggleAttribute('data-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  menuBtn.addEventListener('click', () => setOpen(menuBtn.getAttribute('aria-expanded') !== 'true'));
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
  addEventListener('keydown', (e) => e.key === 'Escape' && setOpen(false));
}

/* ---------- Apparitions + titres tapés à la machine ---------- */
const typeOut = (el: HTMLElement) => {
  const text = el.dataset.full ?? '';
  if (reduced) { el.textContent = text; el.classList.add('done'); return; }
  let i = 0;
  const step = () => {
    el.textContent = text.slice(0, ++i);
    if (i < text.length) setTimeout(step, 38);
    else el.classList.add('done');
  };
  step();
};
document.querySelectorAll<HTMLElement>('[data-type]').forEach((el) => {
  el.dataset.full = el.textContent ?? '';
  el.setAttribute('aria-label', el.dataset.full);
  if (!reduced) el.textContent = ' ';
});
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target as HTMLElement;
    if (el.hasAttribute('data-type')) typeOut(el);
    else el.classList.add('is-in');
    io.unobserve(el);
  }),
  { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
);
document.querySelectorAll('[data-reveal], [data-type]').forEach((el) => io.observe(el));

/* ---------- Compteurs ---------- */
const countIO = new IntersectionObserver((entries) => entries.forEach((e) => {
  if (!e.isIntersecting) return;
  const el = e.target as HTMLElement;
  countIO.unobserve(el);
  const end = Number(el.dataset.count);
  if (reduced) { el.textContent = end.toLocaleString(root.lang); return; }
  const t0 = performance.now();
  const tick = (t: number) => {
    const k = Math.min(1, (t - t0) / 1600);
    el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))).toLocaleString(root.lang);
    if (k < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}), { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach((el) => countIO.observe(el));

/* ---------- Rôle tapé à la machine (accueil) ---------- */
const typer = document.querySelector<HTMLElement>('[data-typer]');
if (typer && !reduced) {
  const words: string[] = JSON.parse(typer.dataset.typer ?? '[]');
  let w = 0, i = words[0]?.length ?? 0, deleting = true;
  const step = () => {
    const word = words[w];
    i += deleting ? -1 : 1;
    typer.textContent = word.slice(0, i);
    let delay = deleting ? 35 : 70;
    if (!deleting && i === word.length) { deleting = true; delay = 1800; }
    else if (deleting && i === 0) { deleting = false; w = (w + 1) % words.length; delay = 250; }
    setTimeout(step, delay);
  };
  setTimeout(step, 2000);
}

/* ---------- Carrousel 3D ---------- */
document.querySelectorAll<HTMLElement>('[data-carousel]').forEach((car) => {
  const slides = [...car.querySelectorAll<HTMLElement>('.slide')];
  const caps = [...car.querySelectorAll<HTMLElement>('[data-cap]')];
  const label = car.querySelector<HTMLElement>('[data-count-label]');
  const n = slides.length;
  let cur = 0;
  const render = () => {
    slides.forEach((s, i) => {
      let o = i - cur;
      if (o > n / 2) o -= n;
      if (o < -n / 2) o += n;
      const a = Math.abs(o);
      s.style.setProperty('--o', String(o));
      s.style.setProperty('--a', String(a));
      s.toggleAttribute('data-far', a > 2);
      s.classList.toggle('current', o === 0);
    });
    caps.forEach((c, i) => (c.hidden = i !== cur));
    if (label) label.textContent = `${String(cur + 1).padStart(2, '0')} / ${String(n).padStart(2, '0')}`;
  };
  const go = (i: number) => { cur = (i + n) % n; render(); };
  car.querySelector('[data-prev]')?.addEventListener('click', () => go(cur - 1));
  car.querySelector('[data-next]')?.addEventListener('click', () => go(cur + 1));
  car.querySelectorAll<HTMLElement>('[data-goto]').forEach((b) => b.addEventListener('click', () => {
    const i = Number(b.dataset.goto);
    if (i === cur) car.querySelector<HTMLElement>(`[data-cap="${i}"] [data-open]`)?.click();
    else go(i);
  }));
  car.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') go(cur - 1);
    if (e.key === 'ArrowRight') go(cur + 1);
  });
  let x0: number | null = null;
  car.addEventListener('pointerdown', (e) => (x0 = e.clientX));
  car.addEventListener('pointerup', (e) => {
    if (x0 !== null && Math.abs(e.clientX - x0) > 40) go(cur + (e.clientX < x0 ? 1 : -1));
    x0 = null;
  });
  render();
});

/* ---------- Cartes « qualités » empilées ---------- */
const traits = document.querySelector<HTMLElement>('[data-traits]');
if (traits && !reduced) {
  const cards = [...traits.querySelectorAll<HTMLElement>('.trait')];
  let top = 0;
  setInterval(() => {
    if (document.hidden) return;
    top = (top + 1) % cards.length;
    cards.forEach((c, i) => c.style.setProperty('--d', String((i - top + cards.length) % cards.length)));
  }, 2600);
}

/* ---------- Lien actif dans la navigation ---------- */
const spyLinks = [...document.querySelectorAll<HTMLAnchorElement>('[data-spy]')];
const spyIO = new IntersectionObserver((entries) => entries.forEach((e) => {
  if (!e.isIntersecting) return;
  spyLinks.forEach((a) => a.classList.toggle('active', a.dataset.spy === e.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
spyLinks.forEach((a) => { const s = document.getElementById(a.dataset.spy!); if (s) spyIO.observe(s); });

/* ---------- Fenêtres de détail ---------- */
document.querySelectorAll<HTMLElement>('[data-open]').forEach((btn) =>
  btn.addEventListener('click', () => (document.getElementById(btn.dataset.open!) as HTMLDialogElement | null)?.showModal()),
);
document.querySelectorAll<HTMLDialogElement>('dialog').forEach((dlg) => {
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
  dlg.querySelector('[data-close]')?.addEventListener('click', () => dlg.close());
});

/* ---------- Formulaire de contact ---------- */
const form = document.querySelector<HTMLFormElement>('[data-contact-form]');
form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const status = form.querySelector<HTMLElement>('[data-status]')!;
  const fd = new FormData(form);
  const endpoint = form.dataset.endpoint;
  if (endpoint) {
    try {
      const res = await fetch(endpoint, { method: 'POST', body: fd, headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error();
      form.reset();
      status.textContent = form.dataset.sent!;
    } catch {
      status.textContent = form.dataset.error!;
    }
    return;
  }
  const subject = encodeURIComponent(String(fd.get('subject') || 'Contact portfolio'));
  const body = encodeURIComponent(`${fd.get('message')}\n\n— ${fd.get('name')} (${fd.get('email')})`);
  status.textContent = form.dataset.mailto!;
  location.href = `mailto:${form.dataset.to}?subject=${subject}&body=${body}`;
});
