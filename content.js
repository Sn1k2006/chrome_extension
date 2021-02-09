function closeIframe() {
  const dialog = document.querySelector("dialog");
  dialog.close();
}

const showModal = () => {
  const modal = document.createElement("dialog");
  modal.setAttribute('backdrop', 'background: red;'
  )
  modal.setAttribute(
    "style", `
        width: 100%;
        height: 100%;
        padding: 0px;
        border: none;
        top:10px;
        right:10px; 
        background-color: transparent;
        position: fixed;
        `);
  modal.innerHTML = `<iframe id="popup-content" style="height:100%; width: 310px;float: right; margin-right: 10px;user-select: none;"></iframe>
<!--<div style="position:absolute; top:0px; left:0px;">-->
<!--<button style="padding: 8px 12px; font-size: 16px; border: none; border-radius: 20px; outline: none;" onMouseOver="this.style.color='#0F0'">x</button>-->
<!--</div>-->
`;

  document.body.appendChild(modal);
  const dialog = document.querySelector("dialog");
  dialog.showModal();
  const iframe = document.getElementById("popup-content");
  iframe.src = chrome.extension.getURL("index.html");
  iframe.frameBorder = 0;
  // dialog.querySelector("button").addEventListener("click", () => {
  //   dialog.close();
  //   modal.remove();
  // });
}

setTimeout(showModal, 1000);

