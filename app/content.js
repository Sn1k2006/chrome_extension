function dateDiff(date) {
  if (!date) return null;
  date = new Date(date);
  const date2 = new Date();
  var seconds = date2.getSeconds() - date.getSeconds();
  if (seconds < 0) {
    seconds += 60;
    date2.setMinutes(date2.getMinutes() - 1);
  }
  var minutes = date2.getMinutes() - date.getMinutes();
  if (minutes < 0) {
    minutes += 60;
    date2.setHours(date2.getHours() - 1);
  }
  var hours = date2.getHours() - date.getHours();
  if (hours < 0) {
    hours += 24;
    date2.setDate(date2.getDate() - 1);
  }
  var days = date2.getDate() - date.getDate();
  if (days < 0) {
    days += new Date(date2.getFullYear(), date2.getMonth() - 1, 0).getDate() + 1;
    date2.setMonth(date2.getMonth() - 1);
  }

  const sum = (days * 24 * 3600) + (hours * 3600) + (minutes * 60) + seconds
  return sum || 1;
}

$(document).ready(function () {
  const closeIframe = () => {
    const dialog = document.querySelector("dialog");
    if (dialog) {
      dialog.close();
      dialog.remove();
      setTimeout(showModal, 3600000);
    }
  }

  const showModal = () => {
    localStorage.setItem('aship_last_open', new Date() + '');
    const modal = document.createElement("dialog");
    modal.setAttribute('backdrop', 'background: red;'
    )
    modal.setAttribute(
      "style", `
        width: 100%;
        height: 250px;
        padding: 0px;
        border: none;
        top:10px;
        right:10px; 
        background-color: transparent;
        position: fixed;
        `);
    modal.innerHTML = `<iframe id="popup-content" style="height:100%; width: 310px;float: right; margin-right: 10px;user-select: none;position: relative;"></iframe>
<button style="
  position:absolute; 
  top:0px; 
  right:10px;
  font-size: 16px; 
  border: none; 
  border-radius: 20px; 
  outline: none; 
  background-color: transparent;
  width: 33px;
  height: 40px;
  padding: 0;
  color: #C8C8C8;
  z-index: 1;
  cursor: pointer;
"></button>
<button style="
  position:absolute; 
  top:0px; 
  right:280px;
  font-size: 16px; 
  border: none; 
  border-radius: 20px; 
  outline: none; 
  background-color: transparent;
  width: 33px;
  height: 40px;
  padding: 0;
  color: #C8C8C8;
  z-index: 1;
  cursor: pointer;
"></button>`;
    document.body.appendChild(modal);
    const dialog = document.querySelector("dialog");
    dialog.showModal();
    const iframe = document.getElementById("popup-content");
    iframe.src = chrome.extension.getURL("index.html");
    iframe.frameBorder = 0;
    dialog.querySelector("button").addEventListener("click", () => {
      dialog.close();
    });
  }
  const host = window.location.host;
  const hostname = window.location.hostname;
  if (host === 'www.amazon.ae' || hostname === 'www.amazon.ae') {
    let diff = dateDiff(localStorage.aship_last_open);
    let timer = 60000;
    if (!diff) {
      diff = dateDiff(localStorage.aship_last_visit || new Date());
      timer = (diff * 1000) - timer;
    } else timer = (3600 - diff) * 1000;
    localStorage.setItem('aship_last_visit', new Date() + '');
    if(timer < 1) timer = 4000;
    // setTimeout(showModal, timer);
    setTimeout(showModal, 2000);
  }
  $("html").click(closeIframe);
});



