
const menuOpenBtn = document.querySelector(".menu_open_btn")
const menuCloseBtn = document.querySelector(".menu_close_btn")
const menuList = document.querySelector(".menu_list")
const filters_sidebar = document.querySelector(".filters_sidebar")
const filter_openBtn = document.querySelector(".filters_open_btn")
const filter_close_btn = document.querySelector(".filters_close_btn");

// listner
menuOpenBtn.addEventListener("click", menuOpen)
menuCloseBtn.addEventListener("click", menuClose)
window.addEventListener("resize", removeClassinLargeDevice)
filter_openBtn.addEventListener("click", filtersSidebarOpen)
filter_close_btn.addEventListener("click", filterSidebarClose)

// js for layout
function menuOpen() {
    menuList.classList.add("show")
}
function menuClose() {
    menuList.classList.remove("show")
}
function removeClassinLargeDevice() {
    if (window.matchMedia("(min-width: 992px)").matches) {
        menuList.classList.remove("show");
    }
}


// js for shop page
function filtersSidebarOpen() {
    filters_sidebar.classList.add("show")
    filter_openBtn.classList.add("hide")
}
function filterSidebarClose() {
    filters_sidebar.classList.remove("show")
    filter_openBtn.classList.remove("hide")
}
function productsDisplayed(){

}
productsDisplayed()








