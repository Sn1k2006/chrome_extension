const content = {
  en: {
    text: "Amazon doesn't ship to your country?",
    title: "Don't worry, we'll deliver your order.",
    accentBtnText: 'Install extension',
    policy: 'Privacy Policy',
    terms: 'Terms of use',
  },
  ar: {
    text: 'هل أمازون لا تشحن لدولتك؟',
    title: 'لا تقلق, نحن سنوصل شحنتك اليك',
    accentBtnText: 'تثبيت الامداد',
    policy: 'سياسة الخصوصية',
    terms: 'شروط الاستخدام',
  },
}

function getUrlVars(url)
{
  var vars = [], hash;
  var hashes = url.slice(url.indexOf('?') + 1).split('&');
  for(var i = 0; i < hashes.length; i++)
  {
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
  } else if(ln !== 'ar') modal.removeClass('rtl');
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
  img.attr('src', `/assets/images/${ln}.png`);
  name.html(ln);
}

function setActiveSelectItem(ln = 'en') {
  $('.select-hidden_item').removeClass('active');
  $(`.select-hidden_item[data-ln=${ln}]`).addClass('active');
}

function renderContent(ln = 'en') {
  const title = $('.content h2');
  const text = $('.content p');
  const btnAccent = $('.content a');
  const policy = $(".footer a[data-name='policy']");
  const terms = $(".footer a[data-name='terms']");
  title.html(content[ln].title);
  text.html(content[ln].text);
  btnAccent.html(content[ln].accentBtnText);
  policy.html(content[ln].policy);
  terms.html(content[ln].terms);
}

function selectLanguage(ln, start) {
  localStorage.setItem('ln', ln);
  setActiveSelectItem(ln);
  renderVisibleLang(ln);
  renderContent(ln);
  changeDirection(ln);
  if (!start) toggleSelect()
}

$(document).ready(function () {
  selectLanguage(localStorage.ln || 'en', true);
  $(window).click(function () {
    const select = $('.select')
    if (select.hasClass('open')) select.removeClass('open');
  });
  $('.select-visible').click(toggleSelect);
  $('.select-hidden .select-hidden_item').click(function () {
    const ln = this.getAttribute('data-ln');
    selectLanguage(ln);
  });
});