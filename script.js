'use strict';
const root = document.documentElement;
const viewButtons = [...document.querySelectorAll('[data-view]')];
function setMode(mode) {
  if (!['character', 'recruiter'].includes(mode)) return;
  root.dataset.mode = mode;
  viewButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.view === mode)));
  document.querySelector('#mode-status').textContent = mode === 'recruiter' ? 'Recruiter mode selected.' : 'Character sheet selected.';
  try { localStorage.setItem('miles-portfolio-view', mode); } catch (_) { /* View works when storage is unavailable. */ }
}
document.querySelector('.mode-controls').hidden = false;
try { setMode(localStorage.getItem('miles-portfolio-view') || 'character'); } catch (_) { setMode('character'); }
viewButtons.forEach(button => button.addEventListener('click', () => setMode(button.dataset.view)));
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
