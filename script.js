'use strict';
const root = document.documentElement;
const returnLink = document.querySelector('[data-return-top]');
const viewButtons = [...document.querySelectorAll('[data-view]')];
let hasUsedModeToggle = false;
try { hasUsedModeToggle = localStorage.getItem('miles-portfolio-toggle-used') === 'true'; } catch (_) { /* Remember for this visit when storage is blocked. */ }
function setMode(mode, userInitiated = false) {
  if (!['character', 'recruiter'].includes(mode)) return;
  const previousMode = root.dataset.mode;
  if (mode !== 'character') root.dataset.rpgLogoIntro = '';
  if (mode !== 'recruiter') root.dataset.recruiterLogoIntro = '';
  if (userInitiated && mode === 'recruiter' && previousMode !== mode) {
    root.dataset.recruiterLogoIntro = 'play';
  }
  if (userInitiated && mode === 'character' && previousMode !== mode) {
    root.dataset.rpgLogoIntro = 'play';
  }
  root.dataset.mode = mode;
  returnLink.textContent = hasUsedModeToggle ? 'Back to top' : mode === 'recruiter' ? 'Meet the adventurer — try RPG mode' : 'See the professional — try Recruiter mode';
  viewButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.view === mode)));
  document.querySelector('#mode-status').textContent = mode === 'recruiter' ? 'Recruiter mode selected.' : 'Character sheet selected.';
  try { localStorage.setItem('miles-portfolio-view', mode); } catch (_) { /* View works when storage is unavailable. */ }
}
document.querySelector('.mode-controls').hidden = false;
try {
  const savedMode = localStorage.getItem('miles-portfolio-view');
  setMode(savedMode === 'character' ? 'character' : 'recruiter');
} catch (_) { setMode('recruiter'); }
returnLink.addEventListener('click', () => {
  if (!hasUsedModeToggle) setMode(root.dataset.mode === 'recruiter' ? 'character' : 'recruiter', true);
  document.querySelector('#top').focus({ preventScroll: true });
  // The anchor performs the return to top; CSS respects reduced-motion preferences.
});
viewButtons.forEach(button => button.addEventListener('click', () => {
  hasUsedModeToggle = true;
  try { localStorage.setItem('miles-portfolio-toggle-used', 'true'); } catch (_) { /* The current visit still remembers. */ }
  setMode(button.dataset.view, true);
}));
const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
const mobile = matchMedia('(max-width: 620px)');
function closeMenu() { menu.setAttribute('aria-expanded', 'false'); navigation.hidden = mobile.matches; }
function syncMenu() { menu.hidden = !mobile.matches; closeMenu(); }
menu.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(expanded)); navigation.hidden = !expanded;
});
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobile.matches && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); }
});
mobile.addEventListener('change', syncMenu); syncMenu();
document.querySelector('.choices').hidden = false;
document.querySelector('#quest-result').textContent = 'Choose your approach. No critical failures here.';
const outcomes = {
  listen: 'Insight check passed. Understanding the goal gives every technical step a purpose. Listen first, then troubleshoot together.',
  reboot: 'A familiar tool in your kit. First check for unsaved work and explain what will happen. A fix works best when the person can trust it.',
  logs: 'Investigation begins. Logs can reveal the pattern; the person can explain the impact. Bring both kinds of evidence together.'
};
document.querySelectorAll('[data-choice]').forEach(button => {
  button.setAttribute('aria-pressed', 'false');
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-choice]').forEach(choice => choice.setAttribute('aria-pressed', String(choice === button)));
    document.querySelector('#quest-result').textContent = outcomes[button.dataset.choice];
  });
});
