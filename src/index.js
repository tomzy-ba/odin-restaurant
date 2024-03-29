const homeLoader = require("./homeLoader");
const menuLoader = require("./menuLoader");
const aboutLoader = require("./aboutLoader")


homeLoader();


const content = document.querySelector("#content");
content.style.padding = "4rem";
content.style.border = "1px solid black"

const homeButton = document.querySelector("#homeButton");
homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    homeLoader();
});

const menuButton = document.querySelector("#menuButton");
menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    menuLoader();
});

const aboutButton = document.querySelector("#aboutButton");
aboutButton.addEventListener("click", () => {
    content.innerHTML = "";
    aboutLoader();
})