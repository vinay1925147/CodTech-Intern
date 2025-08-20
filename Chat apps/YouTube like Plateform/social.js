const menuIcon = document.querySelector(".menu-icon");
const sidebar= document.querySelector(".sidebar");
const Container = document.querySelector(".container");
menuIcon.addEventListener("click" , ()=>{
    sidebar.classList.toggle("small-sidebar");
    Container.classList.toggle("large-container");
})

