const openMenu = document.querySelector("#open-menu");
const closemenu = document.querySelector("#close-menu");
const navbar = document.querySelector("#navbar");

openMenu.addEventListener("click", () =>{
    navbar.classList.add("active");
})

closemenu.addEventListener("click", () =>{
    navbar.classList.add("closing");
    setTimeout(() =>{
        navbar.classList.remove("active");
        navbar.classList.remove("closing");
    }, 300);

    
})