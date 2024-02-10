const homeLoader = require("./homeLoader");


homeLoader();

const homeButton = document.querySelector("#homeButton")
homeButton.addEventListener("click", () => {
    homeLoader()
})