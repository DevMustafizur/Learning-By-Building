const toggleOpenBtn = document.querySelector(".toggleOpenBtn")
const toggleCloseBtn = document.querySelector(".toggleCloseBtn")
const menuList = document.querySelector(".menu_list")
console.log(menuList)

toggleOpenBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    menuList.classList.add("show")
})
toggleCloseBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    menuList.classList.remove("show")
})