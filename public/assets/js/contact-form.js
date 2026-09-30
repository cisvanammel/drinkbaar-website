(() => {
  'use strict';

  const form = document.querySelector('.contact-form');
  if (!form) return;

  const endpoint = (form.dataset.endpoint || '').trim();
  const submit = form.querySelector('.form-submit');
  const status = document.getElementById('contact-form-status');

  function setStatus(message, state) {
    status.textContent = message;
    status.dataset.state = state || '';
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    setStatus('', '');

    if (!form.reportValidity()) return;

    if (!endpoint || endpoint.includes('YOUR_APPS_SCRIPT_EXEC_URL')) {
      setStatus('Het contactformulier is nog niet geconfigureerd.', 'error');
      return;
    }

    submit.disabled = true;
    setStatus('Je bericht wordt verzonden…', 'sending');

    try {
      const body = new URLSearchParams(new FormData(form));
      await fetch(endpoint, {
        method: 'POST',
        body,
        mode: 'no-cors',
      });

      form.reset();
      setStatus('Bedankt, je bericht is verzonden.', 'success');
    } catch (error) {
      setStatus('Verzenden is niet gelukt. Probeer het opnieuw of mail ons rechtstreeks.', 'error');
    } finally {
      submit.disabled = false;
    }
  });
})();
