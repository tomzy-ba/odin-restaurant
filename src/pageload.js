function pageLoader() {
    const content = document.querySelector("#content");

    const contentArticle = document.createElement("article");
    contentArticle.innerText = "lorem ipsum";
    content.append(contentArticle);


}

module.exports = pageLoader;