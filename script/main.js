// BURGER - START
let m777_burger = document.querySelector(".m777_burger")
let m777_menu = document.querySelector(".m777_menu")

document.addEventListener("DOMContentLoaded", function() {
  m777_burger.addEventListener("click", function(){
    m777_burger.classList.toggle("active");
    m777_menu.classList.toggle("active");  
  })
})
// BURGER - END

const login = document.querySelector(".login");
const regictration = document.querySelector(".regictration");
const form = document.querySelector(".form");
const body = document.querySelector("body");

console.log(login);
console.log(regictration);
console.dir(regictration);

login.addEventListener("click", function () {
  console.log(1111);
});

login.addEventListener("click", function () {
  regictration.style.display = "flex";
  body.style.overflowY = "hidden";
});

form.addEventListener("click", function (e) {
  e.stopPropagation();
});

regictration.addEventListener("click", function () {
  regictration.style.display = "none";
  body.style.overflow = "auto";
});

// PASSWORD VISIBILITY ON CLICK - START
const inputIcon = document.querySelector(".eye");
const inputPassword = document.querySelector("#password");

inputIcon.addEventListener("click", () => {
  inputIcon.classList.toggle("ri-eye-off-line");
  inputIcon.classList.toggle("ri-eye-line");
  inputPassword.type = inputPassword.type === "password" ? "text" : "password";
});
// / PASSWORD VISIBILITY ON CLICK - END



// Find all links inside the element with id "test"
const links = document.querySelectorAll("#test .m777_link");

// Event handler when an element is clicked
function handleClick(event) {
  // Event handler when an element is clicked
  links.forEach(link => {
    link.style.color = "#A5A7A9";  // Default color
    link.style.fontWeight = 400;
    let lineGris = link.querySelector('.line-gris');
    if (lineGris) {
      lineGris.style.display = "none"; 
    }
  });

  // Activate the selected link
  let currentLink = event.target;
  currentLink.style.color = "#EA6732";
  currentLink.style.fontWeight = 700;
  currentLink.style.transition = "5ms";
  let lineGris = currentLink.querySelector('.line-gris');
  if (lineGris) {
    lineGris.style.display = "flex";
    
    function burger_clouse() { // Burger closing function
      m777_burger.classList.remove("active");
      m777_menu.classList.remove("active");
    };
    setTimeout(burger_clouse, 500);
  }
}

// Add an event handler to each link
links.forEach(link => {
  link.addEventListener('click', handleClick);
});

