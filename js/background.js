class SilenceIsGolden {
  getBlockedUrls() {
    // TODO Move it to file
    // Source: https://github.com/J2TeaM/Facebook-Protector/tree/master/database
    return ['*://4liker.com/*', '*://auto-bot.me/*', '*://auto-like.net/*', '*://autobotfb.com/*', '*://autolike-us.com/*', '*://autolike.co/*', '*://autolike.ga/*', '*://autolike.in/*', '*://autolike.vn/*', '*://autolikepro.net/*', '*://autoliker4fb.com/*', '*://autolikerbrasil.net/*', '*://autolikesgroups.com/*', '*://autolikesub.com/*', '*://autolikev1.tk/*', '*://autolikeviet.me/*', '*://autolikeviet.vn/*', '*://autolikevietnam.com/*', '*://autolikez.com/*', '*://bertena.ga/*', '*://berti.ga/*', '*://boostlikes.com/*', '*://bot24h.com/*', '*://botex-viet.com/*', '*://botfb-vn.tk/*', '*://botviet.net/*', '*://botvn.me/*', '*://chuyhiep.net/*', '*://curtidasfree.com/*', '*://djliker.com/*', '*://fbtoools.com/*', '*://getlike.vn/*', '*://getlikenow.com/*', '*://hacklike.com.vn/*', '*://hacklike.net/*', '*://hacklike.vn/*', '*://hacklike24h.com/*', '*://hacklikes.net/*', '*://haylike.net/*', '*://hizliker.ga/*', '*://hotface.pro/*', '*://hotfb.org/*', '*://hublaa.me/*', '*://huuky9x.com/*', '*://jempolku.com/*', '*://kenhlike.com/*', '*://kingdomlikes.com/*', '*://lauxanh88.net/*', '*://like4like.org/*', '*://like5s.net/*', '*://likecuoi.vn/*', '*://likefb.vn/*', '*://likenhanh.net/*', '*://likevip.net/*', '*://m-autoliker.com/*', '*://mdvlike.com/*', '*://mg-likers.com/*', '*://mrzonk.biz/*', '*://myfbliker.com/*', '*://ngoixem.net/*', '*://oneliker.com/*', '*://pubiwayliker.com/*', '*://royaliker.net/*', '*://ryanliker.ga/*', '*://staronlike.com/*', '*://tamdz.net/*', '*://tudongfb.com/*', '*://uplike.wap.mu/*', '*://v37.org/*', '*://vipfb.net/*', '*://vipthaibinh95.yw.lt/*', '*://vipviet.info/*', '*://vipvui.vn/*', '*://vnlike.me/*', '*://vnzim.net/*', '*://yeuchi.com/*', '*://viplikefb.info/*', '*://vip-liker.com/*', '*://like-viet.net/*', '*://leedzung.vn/*', '*://autolike.online-talk.net/*', '*://tanglike.vn/*', '*://botvl.com/*', '*://starvip.info/*', '*://configdnsadress.com/*', '*://idorunuso.xyz/*', '*://igx.delivery/*', '*://java-collections.com/*', '*://lefi.pw/*', '*://mioo.pw/*', '*://mustahil.com/*', '*://superandoasdificuldades.com/*', '*://userxxwwd.xyz/*', '*://vuronibugun.xyz/*', '*://xic.graphics/*', '*://yikurelu.lefi.pw/*', '*://facebookmaty.com/*', '*://kzic.me/*', '*://kosfn4o.xyz/*', '*://ult-task.com/*', '*://nolir.pw/*', '*://mourid.com/*', '*://vunger.com/*', '*://kerman.pw/*', '*://cerawa.pw/*', '*://futunga.com/*', '*://latervideocash.com/*', '*://binhchaunet.com/*', '*://codeonclick.com/*', '*://dantrivideo.com/*', '*://kenhdantri.com/*', '*://cit.vn/*', '*://gfy8iiutuigfuj.ml/*', '*://videosformen.mobi/*', '*://pincae.com/*', '*://abcdg.pro/*', '*://phongdeptraihihi.com/*', '*://tuvi2017.info/*', '*://tintucbaomoi.com/*', '*://mobrevflwms.com/*', '*://offerreality.com/*', '*://ngnjfgingfnng.ml/*', '*://anhhungvolam.com/*', '*://dantrinews.com/*', '*://express.freevnn.com/*', '*://facebookthailandoff.com/*', '*://faceibooki.com/*', '*://fbx-loginxx.cf/*', '*://kenh14news.com/*', '*://login-fbook.cf/*', '*://vithuocquanhta.com/*', '*://kevinkloop.com/*', '*://8vui.us/*', '*://anonymoustheface.tk/*', '*://creativeglobalideas.com/*', '*://bgogjhgmjh.ddns.net/*', '*://xvsggshshjsnns.tk/*', '*://blogformeapi.com/*', '*://ezxrtdcrprgbllxdhddt.com/*', '*://dantrifunny.com/*', '*://tintucviet01.com/*', '*://tintucviet02.com/*', '*://tintucviet03.com/*', '*://facebookhacks.net/*', '*://facehack.me/*', '*://fbaccountrecoverer.com/*', '*://fbhooked.net/*', '*://fbpasshack.com/*', '*://hackfacebook2015.net/*', '*://hackfbaccountlive.com/*', '*://samhacker.com/*', '*://sukienfacebook.com/*'];
  }

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
      details => ({ cancel: parseInt(localStorage.getItem('is_typing_chat'), 10) === 1 }),
      {
        urls: [
          '*://*.facebook.com/*typ.php*',
          '*://*.messenger.com/*typ.php*',
        ],
      },
      ['blocking']
    );

    chrome.webRequest.onBeforeRequest.addListener(
      details => ({ cancel: parseInt(localStorage.getItem('is_typing_comment'), 10) === 1 }),
      {
        urls: [
          '*://*.facebook.com/ufi/typing/*',
        ],
      },
      ['blocking']
    );

    chrome.webRequest.onBeforeRequest.addListener(
      details => ({ cancel: parseInt(localStorage.getItem('is_block_phishing'), 10) === 1 }),
      {
        urls: this.getBlockedUrls(),
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
  const isTypingChat = parseInt(localStorage.getItem('is_typing_chat'), 10);
  const isTypingComment = parseInt(localStorage.getItem('is_typing_comment'), 10);

  if (isTypingChat === 1 && isTypingComment === 1 && isInvisible === 1 && isUnseen === 1) {
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
