class SilenceIsGolden {
  initialize() {
    chrome.webRequest.onBeforeRequest.addListener(
      details => ({ cancel: parseInt(localStorage.getItem('is_unseen'), 10) === 1 }),
      {
        urls: [
          '*://*.facebook.com/*change_read_status*',
          '*://*.facebook.com/*mark_seen*',
          '*://*.messenger.com/*change_read_status*',
          '*://*.messenger.com/*mark_seen*',
        ],
      },
      ['blocking']
    );

    chrome.webRequest.onBeforeRequest.addListener(
      details => ({ cancel: parseInt(localStorage.getItem('is_typing'), 10) === 1 }),
      {
        urls: [
          '*://*.facebook.com/*typ.php*',
          '*://*.messenger.com/*typ.php*',
        ],
      },
      ['blocking']
    );

    chrome.webRequest.onBeforeRequest.addListener(
      details => ({ cancel: parseInt(localStorage.getItem('is_invisible'), 10) === 1 }),
      {
        urls: [
          '*://edge-chat.facebook.com/*',
          '*://0-edge-chat.facebook.com/*',
          '*://1-edge-chat.facebook.com/*',
          '*://2-edge-chat.facebook.com/*',
          '*://3-edge-chat.facebook.com/*',
          '*://4-edge-chat.facebook.com/*',
          '*://5-edge-chat.facebook.com/*',
          '*://6-edge-chat.facebook.com/*',
          '*://7-edge-chat.facebook.com/*',
          '*://8-edge-chat.facebook.com/*',
          '*://9-edge-chat.facebook.com/*',
          '*://www.facebook.com/ajax/chat/*',
          '*://www.facebook.com/chat/*',
          '*://www.facebook.com/ajax/presence/*',
          '*://edge-chat.messenger.com/*',
          '*://0-edge-chat.messenger.com/*',
          '*://1-edge-chat.messenger.com/*',
          '*://2-edge-chat.messenger.com/*',
          '*://3-edge-chat.messenger.com/*',
          '*://4-edge-chat.messenger.com/*',
          '*://5-edge-chat.messenger.com/*',
          '*://6-edge-chat.messenger.com/*',
          '*://7-edge-chat.messenger.com/*',
          '*://8-edge-chat.messenger.com/*',
          '*://9-edge-chat.messenger.com/*',
          '*://www.messenger.com/ajax/chat/*',
          '*://www.messenger.com/chat/*',
          '*://www.messenger.com/ajax/presence/*',
        ],
      },
      ['blocking']
    );
  }
}

const ext = new SilenceIsGolden();
ext.initialize();

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  chrome.pageAction.show(tabId);
  const isUnseen = parseInt(localStorage.getItem('is_unseen'), 10);
  const isInvisible = parseInt(localStorage.getItem('is_invisible'), 10);
  const isTyping = parseInt(localStorage.getItem('is_typing'), 10);

  if (isTyping === 1 && isInvisible === 1 && isUnseen === 1) {
    chrome.pageAction.setIcon({
      tabId,
      path: 'img/icon64.png',
    });
    chrome.pageAction.setTitle({
      tabId,
      title: 'Silence is Golden - You are totally invisible on FB!',
    });
  } else {
    chrome.pageAction.setIcon({
      tabId,
      path: 'img/icon64_off.png',
    });
    chrome.pageAction.setTitle({
      tabId,
      title: 'Silence is Golden - You are visible on FB!',
    });
  }
});
