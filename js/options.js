function saveOptions() {
  const isInvisible = document.getElementById('invisible-mode').checked ? 1 : 0;
  const isUnSeen = document.getElementById('unseen-mode').checked ? 1 : 0;
  const isTyping = document.getElementById('typing-mode').checked ? 1 : 0;
  const status = document.getElementById('status');

  localStorage.setItem('is_invisible', isInvisible);
  localStorage.setItem('is_unseen', isUnSeen);
  localStorage.setItem('is_typing', isTyping);

  status.textContent = 'Options saved.';
  setTimeout(() => {
    status.textContent = '';
  }, 750);
}

function restoreOptions() {
  const isInvisible = localStorage.getItem('is_invisible') || 0;
  const isUnSeen = localStorage.getItem('is_unseen') || 0;
  const isTyping = localStorage.getItem('is_typing') || 0;

  document.getElementById('invisible-mode').checked = parseInt(isInvisible, 10) === 1;
  document.getElementById('unseen-mode').checked = parseInt(isUnSeen, 10) === 1;
  document.getElementById('typing-mode').checked = parseInt(isTyping, 10) === 1;
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
