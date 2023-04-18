let menuIcon = document.querySelector(".menuIcon");
let sidebar = document.querySelector("aside");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar")
}