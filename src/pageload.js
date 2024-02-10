function pageLoader() {
    const content = document.querySelector("#content");
    console.log(content)

    const contentArticle = document.createElement("article");
    contentArticle.innerText = "the perfect spot for a delightful dining experience. Their food is consistently delicious, the ambiance is warm and inviting, and the service is top-notch. Don't miss out on this gem!"
    content.append(contentArticle);

    const img = document.createElement("img");
    img.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    img.style.width = "50%";
    img.style.border = "1px solid black";
    content.append(img);


}

module.exports = pageLoader;