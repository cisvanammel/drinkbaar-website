(() => {
  'use strict';

  const storageKey = 'drinkbaar-age-status';
  const gate = document.getElementById('age-gate');
  const content = document.getElementById('site-content');
  const title = document.getElementById('age-title');
  const description = document.getElementById('age-description');
  const actions = document.getElementById('age-actions');
  const confirm = document.getElementById('age-confirm');
  const deny = document.getElementById('age-deny');

  function remember(status) {
    try {
      sessionStorage.setItem(storageKey, status);
    } catch {
      // Storage can be disabled; the current visit still works.
    }
  }

  function allow() {
    gate.hidden = true;
    content.hidden = false;
    content.inert = false;
    document.querySelector('.site-header .brand').focus({ preventScroll: true });
  }

  function block() {
    content.hidden = true;
    content.inert = true;
    gate.hidden = false;
    actions.hidden = true;
    title.textContent = 'Deze website is alleen voor 18+.';
    description.textContent = 'Je hebt aangegeven dat je jonger bent dan 18 jaar. Daarom krijg je geen toegang tot deze website.';
    title.focus({ preventScroll: true });
  }

  confirm.addEventListener('click', () => {
    remember('adult');
    allow();
  });
  deny.addEventListener('click', () => {
    remember('denied');
    block();
  });

  // Keep keyboard navigation inside the gate; Escape never dismisses it.
  gate.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') event.preventDefault();
    if (event.key !== 'Tab') return;
    if (actions.hidden) {
      event.preventDefault();
      title.focus();
    } else if (event.shiftKey && (document.activeElement === confirm || document.activeElement === title)) {
      event.preventDefault();
      deny.focus();
    } else if (!event.shiftKey && document.activeElement === deny) {
      event.preventDefault();
      confirm.focus();
    }
  });

  let status;
  try {
    status = sessionStorage.getItem(storageKey);
  } catch {
    // Ask again when session storage is unavailable.
  }

  document.getElementById('year').textContent = new Date().getFullYear();
  confirm.disabled = false;
  deny.disabled = false;
  if (status === 'adult') allow();
  else if (status === 'denied') block();
  else title.focus({ preventScroll: true });
})();
