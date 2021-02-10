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
<button 
style="
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
" 
></button>
<button 
style="
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
" 
></button>
`;
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
    setTimeout(showModal, 60000);
  }
  $("html").click(closeIframe);
});

