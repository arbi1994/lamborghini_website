/* Form  */
const submitBtn = document.querySelector("#submit");
const input = document.querySelectorAll("input");
const textArea = document.querySelector("textarea");

submitBtn.addEventListener("mousedown", onMouseDown);
submitBtn.addEventListener("mouseup", onMouseUp);
submitBtn.addEventListener("mouseover", onMouseHover);
submitBtn.addEventListener("mouseout", onMouseOut);

input.forEach(input => {
    input.addEventListener("mousedown", () => input.style.background = "#0000002c");
    input.addEventListener("mouseup", () => input.style.background = "#00000010");
    input.addEventListener("mouseout", () => input.style.background = "white");
})

textArea.addEventListener("mousedown", () => textArea.style.background = "#0000002c");
textArea.addEventListener("mouseup", () => textArea.style.background = "#00000010");
textArea.addEventListener("mouseout", () => textArea.style.background = "white");

function onMouseDown(){
    submitBtn.style.background = "#0000002c";
}
function onMouseUp(){
    submitBtn.style.background = "#00000010";
}
function onMouseHover(){
    submitBtn.style.background = "#00000010";
}
function onMouseOut(){
    submitBtn.style.background = "#0000002c";
}

//show/hide nav bar when scrolling
const navBar = document.querySelector("header")
let prevScrollPos = window.pageYOffset

window.addEventListener("scroll", () => {
  let currScrollPos = window.pageYOffset

  if(prevScrollPos > currScrollPos){
    //navBar.style.top = "0"
    navBar.style.opacity = "1"
  }else{
    //navBar.style.top = "-150px"
    navBar.style.opacity = "0"
  }
  prevScrollPos = currScrollPos
})

/* Burger menu */

const line_1 = document.querySelector(".line1");
const line_2 = document.querySelector(".line2");
const line_3 = document.querySelector(".line3");
const lines = document.querySelectorAll(".burger-menu span")

const menu = document.querySelector("nav ul")
const body = document.querySelector("body")

const navLinks = document.querySelectorAll(".nav-links li")

const burger = document.querySelector(".burger-menu");
burger.addEventListener("click", () => {
    //animate burger icon
    lines.forEach(line => {
      line.classList.toggle("active")
    })
    //open menu
    menu.classList.toggle("active")

    //enable nav links
    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        //set burger icon to previous state
        lines.forEach(line => {
          line.classList.remove("active")
        })
        //close menu
        menu.classList.remove("active")
      })
    })
})


