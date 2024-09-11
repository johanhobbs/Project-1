// Declaring constant variables, Retrieves elements from HTML by there ID so that they can be further manipulated by the JS
const model = document.getElementById("model");
const modelShow = document.getElementById("show-model");
const modelClose = document.getElementById("model-close");
const bookmarkForm = document.getElementById("bookmark-form");
const websiteNameEl = document.getElementById("website-name");
const websiteUrlEl = document.getElementById("website-url");
const bookmarkContainer = document.getElementById("bookmark-container"); 

let bookmarks = [];

function modelShow() {
    model.classList.add("show-model")
    websiteNameEl.focus()
};

modelShow.addEventListener("click", showModel);

modelClose.addEventListener("click", () => {
    modelClose.classList.remove("show-model")
});

window.addEventListener("click", (e) => {
    e.target === model ? model.classList.remove("show-model") : false
});

modelClose.addEventListener("click", () => {
    model.classList.remove("show-model")
});

function validate(nameValue, urlValue) {
    const expression =
        /(https)?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=*^]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;
        
    const regex = new RegExp(expression)

    if(!nameValue || !urlValue) {
        alert("Please submit a values for both fields.")
        return false
    }
    if(!urlValue.match(regex)) {
        alert("Please provide valid a web address.")
        return false
    }
    //If valid return true.
    return true
};

function buildBookMarkDOM() {
    bookmarkContainer.textContent= ""


bookmarks.forEach((bookmarks) => {
    const {name, url} = bookmark
    //console.log(name, url)

    const item = document.createElement("div")
    item.classList.add("item")

    const closeIcon = document.createElement("i")
    closeIcon.classList.add("fas", "fa-times")
    closeIcon.setAttribute("title", "Delete Bookmark")
    closeIcon.setAttribute("onclick", `deleteBookmark("${url}")`)

    const linkInfo = document.createElement("div")
    linkInfo.classList.add("name")

    const favicon = document.createElement("img")
    favicon.setAttribute(
        "src",url
    )
    favicon.setAttribute("alt", "favicon")

    const link = document.createElement("a")
    link.setAttribute("href", `${url}`)
    link.setAttribute("target", "_blank")
    link.textContent = name

    linkInfo.append(favicon, link)
    item.append(closeIcon, linkInfo)
    bookmarkContainer.appendChild(item)
})
};