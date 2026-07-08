(function () {
  const root = document.documentElement;
  const body = document.body;
  const contrastButtons = Array.from(document.querySelectorAll('[data-action="contrast"]'));
  const controls = document.querySelector('.accessibility-panel');
  const storageKey = 'odnovaAccessibility';
  const minScale = 0.9;
  const maxScale = 1.25;
  const step = 0.1;

  let saved = {};

  try {
    saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
  } catch (error) {
    saved = {};
  }

  let fontScale = Number(saved.fontScale) || 1;
  let highContrast = Boolean(saved.highContrast);

  function clamp(value) {
    return Math.min(maxScale, Math.max(minScale, Number(value.toFixed(2))));
  }

  function persist() {
    localStorage.setItem(storageKey, JSON.stringify({ fontScale, highContrast }));
  }

  function applyPreferences() {
    root.style.setProperty('--font-scale', fontScale);
    body.classList.toggle('high-contrast', highContrast);
    contrastButtons.forEach(function (button) {
      button.setAttribute('aria-pressed', String(highContrast));
    });
  }

  if (!controls) {
    return;
  }

  controls.addEventListener('click', function (event) {
    const button = event.target.closest('button[data-action]');

    if (!button) {
      return;
    }

    const action = button.dataset.action;

    if (action === 'contrast') {
      highContrast = !highContrast;
    }

    if (action === 'font-smaller') {
      fontScale = clamp(fontScale - step);
    }

    if (action === 'font-larger') {
      fontScale = clamp(fontScale + step);
    }

    if (action === 'font-reset') {
      fontScale = 1;
    }

    applyPreferences();
    persist();
  });

  applyPreferences();
})();
