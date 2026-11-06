// Add only the email and profile URL you want visible to the public.
const CONTACT = { email: 'youshouldhiremiles@gmail.com', linkedin: 'linkedin.com/in/milesit' };
const wisdom = [
  'Ask the human before interrogating the machine.',
  'A runbook is a kindness to your future self.',
  'The best support spell? Listening.',
  'Document the fix. Give the next adventurer a map.',
  'A critical success is a solution someone can maintain.'
];
document.querySelector('#roll').addEventListener('click', () => {
  const roll = Math.floor(Math.random() * 20) + 1;
  document.querySelector('#wisdom').textContent = `Rolled ${roll}. ${wisdom[(roll - 1) % wisdom.length]}`;
});
const answers = {
  listen: 'Insight check: successful. Understand the goal, the impact, and what changed. Then choose the technical path.',
  reboot: 'A useful tool! First check for unsaved work and understand the impact. A fix should help the person, too.',
  logs: 'Investigation check: promising. Pair the evidence with the person’s experience so you investigate the right problem.'
};
document.querySelectorAll('[data-answer]').forEach(button => {
  button.setAttribute('aria-pressed', 'false');
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-answer]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelector('#answer').textContent = answers[button.dataset.answer];
  });
});
let hasContact = false;
if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(CONTACT.email)) {
  const link = document.createElement('a');
  link.className = 'button'; link.href = `mailto:${CONTACT.email}`; link.textContent = 'Email Miles ↗';
  document.querySelector('#contact-links').append(link); hasContact = true;
}
if (/^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_%\-]+\/?$/.test(CONTACT.linkedin)) {
  const link = document.createElement('a');
  link.className = 'button'; link.href = CONTACT.linkedin; link.textContent = 'Find me on LinkedIn ↗';
  document.querySelector('#contact-links').append(link); hasContact = true;
}
document.querySelector('#contact-pending').hidden = hasContact;
document.querySelector('#year').textContent = new Date().getFullYear();
