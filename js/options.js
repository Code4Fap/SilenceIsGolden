function saveOptions() {
  const isInvisible = document.getElementById('invisible-mode').checked ? 1 : 0;
  const isUnSeen = document.getElementById('unseen-mode').checked ? 1 : 0;
  const isTypingChat = document.getElementById('typing-chat-mode').checked ? 1 : 0;
  const isTypingComment = document.getElementById('typing-comment-mode').checked ? 1 : 0;
  const isBlockPhishing = document.getElementById('phishing-block-mode').checked ? 1 : 0;
  const status = document.getElementById('status');

  localStorage.setItem('is_invisible', isInvisible);
  localStorage.setItem('is_unseen', isUnSeen);
  localStorage.setItem('is_typing_chat', isTypingChat);
  localStorage.setItem('is_typing_comment', isTypingComment);
  localStorage.setItem('is_block_phishing', isBlockPhishing);

  status.textContent = 'Settings saved.';
  setTimeout(() => {
    status.textContent = '';
  }, 750);
}

function restoreOptions() {
  const isInvisible = localStorage.getItem('is_invisible') || 0;
  const isUnSeen = localStorage.getItem('is_unseen') || 0;
  const isTypingChat = localStorage.getItem('is_typing_chat') || 0;
  const isTypingComment = localStorage.getItem('is_typing_comment') || 0;
  const isBlockPhishing = localStorage.getItem('is_block_phishing') || 0;

  document.getElementById('invisible-mode').checked = parseInt(isInvisible, 10) === 1;
  document.getElementById('unseen-mode').checked = parseInt(isUnSeen, 10) === 1;
  document.getElementById('typing-chat-mode').checked = parseInt(isTypingChat, 10) === 1;
  document.getElementById('typing-comment-mode').checked = parseInt(isTypingComment, 10) === 1;
  document.getElementById('phishing-block-mode').checked = parseInt(isBlockPhishing, 10) === 1;
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
