const messageBtn = document.querySelector(".message-btn");
const alertBtn = document.querySelector(".alert-btn");
const messageBox = document.querySelector(".message");
const alertBox = document.querySelector(".alert");
let timer = null;

alertBtn.addEventListener("click", (e) => {
    messageBox.classList.add("hide");
    alertBox.classList.remove("hide");
    timer = setTimeout(() => {
        alertBox.classList.add("hide");
    }, 2000);
});

messageBtn.addEventListener("click", (e) => {
    alertBox.classList.add("hide");
    messageBox.classList.remove("hide");
    timer = setTimeout(() => {
        messageBox.classList.add("hide");
    }, 2000);
});

messageBox.addEventListener("mouseenter", (e) => {
    clearTimeout(timer);
});

messageBox.addEventListener("mouseout", (e) => {
    timer = setTimeout(() => {
        messageBox.classList.add("hide");
    }, 2000);
});

alertBox.addEventListener("mouseenter", (e) => {
    clearTimeout(timer);
});

alertBox.addEventListener("mouseout", (e) => {
    timer = setTimeout(() => {
        alertBox.classList.add("hide");
    }, 2000);
});
