$(document).ready(function () {
  $("button[data-close='close']").click(function (e) {
    window.close();
    console.log(12312321312312321);
    chrome.tabs.remove()
  });
});