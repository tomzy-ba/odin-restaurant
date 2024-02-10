const homeLoader = require("./homeLoader");
const menuLoader = require("./menuLoader");


homeLoader();

const homeButton = document.querySelector("#homeButton");
homeButton.addEventListener("click", () => {
    homeLoader();
});

const menuButton = document.querySelector("#menuButton");
menuButton.addEventListener("click", () => {
menuLoader();
});