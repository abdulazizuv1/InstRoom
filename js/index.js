const menu = document.querySelector(".menu")
const body = document.querySelector("body")

menu.addEventListener("click", ()=>{
    body.classList.toggle("active")
})

const product_img = document.querySelector(".product_img")
const changeImg1 = document.querySelectorAll(".changeImg1")

changeImg1.forEach((item)=>{
    item.addEventListener("click", () => {
        var link = item.getAttribute("src");
        product_img.setAttribute("src", link);
    });
})

const bag = document.querySelectorAll(".bag")

bag.forEach((item)=>{
    item.addEventListener("click", ()=>{
        alert("Siz ro'yhatdan o'tmagansiz")
    })
})