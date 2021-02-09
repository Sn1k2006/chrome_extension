$(document).ready(function () {
  const showModal = () => {
    const modal = document.createElement("dialog");
    modal.setAttribute(
      "style", `
        height:450px;
        width:750px;
        padding: 0px;
        border: none;
        top:150px;
        border-radius:20px;
        background-color:white;
        position: fixed; box-shadow: 0px 12px 48px rgba(29, 5, 64, 0.32);
        `);
    modal.innerHTML = `<iframe id="popup-content"; style="height:100%; width: 100%; background-color: red"></iframe>
<div style="position:absolute; top:0px; left:0px;">
<button style="padding: 8px 12px; font-size: 16px; border: none; border-radius: 20px; outline: none;" onMouseOver="this.style.color='#0F0'">x</button>
</div>
`;
    document.body.appendChild(modal);
    const dialog = document.querySelector("dialog");
    dialog.showModal();
    const iframe = document.getElementById("popup-content");
    iframe.src = chrome.extension.getURL("popup.html");
    iframe.frameBorder = 0;
    dialog.querySelector("button").addEventListener("click", () => {
      dialog.close();
      modal.remove();
    });
    const dir = document.querySelector('html').getAttribute('dir')
    console.log(dir);
  }

  setTimeout(showModal, 1000);
});

