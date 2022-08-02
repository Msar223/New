console.log("i love you Jesus");

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('#nav');

menu.addEventListener("click", function() {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('nav-bar');
  console.log("i love you Jesus");
})

window.onscroll =() => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('nav-bar');
}
