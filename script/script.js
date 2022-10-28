const menuHamburguerButton = document.getElementById("menu-hb");
const navList = document.getElementsByClassName("nav-list")[0]
const firstArticle = document.querySelector(".first-article .article-content")
const secondArticle = document.querySelector(".second-article .article-content")
const lastClientTesti = document.querySelector(".testimonial-list")

function menuToogle(){
  navList.classList.toggle("show")
  menuToogle = navList.classList.contains("show")
  menuHamburguerButton.classList.toggle("opacity")
}

const observerHalfElement = new IntersectionObserver((entries) =>{
 
    if(entries[0].isIntersecting === true){
      entries[0].target.style = "visibility: visible; transform:translate(0px);"
    }
    else if(entries[1].isIntersecting === true){
      entries[1].target.style = "visibility: visible; transform:translate(0px);"
      }
   console.log(entries)

}, {threshold:[0.5]})

const observerStartElement = new IntersectionObserver((entries) => {
  if(entries[0].isIntersecting === true){
    entries[0].target.style = "visibility: visible; transform:translate(0px);"
  }
},{threshold:[0.3]} )

menuHamburguerButton.addEventListener("click",menuToogle)

observerHalfElement.observe(firstArticle)
observerHalfElement.observe(secondArticle)
observerStartElement.observe(lastClientTesti)

