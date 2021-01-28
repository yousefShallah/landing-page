AOS.init({
    duration: 1200,
})

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
if (window.pageYOffset > 250) {
    toTop.classList.add("active");
} else {
    toTop.classList.remove("active");
}
})