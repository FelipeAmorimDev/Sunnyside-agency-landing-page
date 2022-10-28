const menuHamburguerButton = document.getElementById("menu-hb");
const navList = document.getElementsByClassName("nav-list")[0]

function menuToogle(){
  navList.classList.toggle("show")
  menuToogle = navList.classList.contains("show")
  menuHamburguerButton.classList.toggle("opacity")
}


menuHamburguerButton.addEventListener("click",menuToogle)