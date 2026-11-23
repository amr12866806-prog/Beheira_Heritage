
// شوف الشرح 
const searchBox = document.querySelector(".search");

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        searchBox.classList.add("show");
    } else {
        searchBox.classList.remove("show");
    }
});