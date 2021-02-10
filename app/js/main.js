const content = {
  en: {
    title: "Amazon doesn't ship to your country?",
    text: "Don't worry, we'll deliver your order.",
    accentBtnText: 'Book your delivery',
    closeBtnText: 'Cancel'
  },
  ar: {
    title: 'هل أمازون لا تشحن لدولتك؟',
    text: 'لا تقلق, نحن سنوصل شحنتك اليك',
    accentBtnText: 'احجز طلبك',
    closeBtnText: 'ألغى طلبك'
  },
}

function getUrlVars(url) {
  var vars = [], hash;
  var hashes = url.slice(url.indexOf('?') + 1).split('&');
  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}

function changeDirection(ln) {
  const modal = $('.container');
  if (ln === 'ar' && !modal.hasClass('rtl')) {
    modal.addClass('rtl');
  } else if (ln !== 'ar') modal.removeClass('rtl');
}

function toggleSelect(e) {
  if (e) e.stopPropagation();
  const select = $('.select');
  if (select.hasClass('open')) select.removeClass('open');
  else select.addClass('open');
}

function renderVisibleLang(ln = 'en') {
  const img = $('.select-visible .select-img img');
  const name = $('.select-visible .select-name');
  img.attr('src', `/images/${ln}.png`);
  name.html(ln);
}

function setActiveSelectItem(ln = 'en') {
  $('.select-hidden_item').removeClass('active');
  $(`.select-hidden_item[data-ln=${ln}]`).addClass('active');
}

function renderContent(ln = 'en') {
  const title = $('.modal-content h2');
  const text = $('.modal-content p');
  const btnAccent = $('.footer .accent-btn');
  const btnClose = $('.footer .secondary-btn');
  title.html(content[ln].title);
  text.html(content[ln].text);
  btnAccent.html(content[ln].accentBtnText);
  btnClose.html(content[ln].closeBtnText);
}

function selectLanguage(ln, start) {
  setActiveSelectItem(ln);
  renderVisibleLang(ln);
  renderContent(ln);
  changeDirection(ln);
  if (!start) toggleSelect()
}

$(document).ready(function () {
  $(window).click(function () {
    const select = $('.select')
    if (select.hasClass('open')) select.removeClass('open');
  });
  $("button[data-close='close']").click(() => {
    window.close()
  });
  $('.select-visible').click(toggleSelect);
  $('.select-hidden .select-hidden_item').click(function () {
    const ln = this.getAttribute('data-ln');
    selectLanguage(ln);
  });

  chrome.tabs.getSelected(null, function (tab) {
    const url = tab.url;
    const locale = getUrlVars(tab.url)?.language || '';
    const lang = locale ? locale.split('_')[0] : 'en';
    const encoded = encodeURIComponent(url);
    $('.footer a').attr('href', `https://aship.space/go/?url=${encoded}`);
    selectLanguage(lang, true);
  });

});