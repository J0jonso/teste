const buttonId = document.getElementById("menu");
const closeId = document.getElementById("closeBtn");
const panelId = document.getElementById("mobile-panel");
let isOpen = false;

const openPanel = function() {
    panelId.style.width = "50%";
    isOpen = true;
}
const closePanel = function() {
    panelId.style.width = "0";
    isOpen = false;
}
buttonId.addEventListener("click",() => {
    if (!isOpen) {
        openPanel();
    } 
});
closeId.addEventListener("click",() => {
    if (isOpen) {
        closePanel();
    }
});
