// Getting navbar
let myNavbar = document.querySelector('.navbar');

// Function to change the color of the navbar onscroll
window.onscroll = () => {
  // Getting Y Position
  var top = window.pageYOffset || document.documentElement.scrollTop;
  // Storing the Y position in the variable
  let myPosition = top;

  // Changing the color when Y Position exceed 150
  if (myPosition > 150) {
    myNavbar.classList.add('navbar-effect');
  } else {
    myNavbar.classList.remove('navbar-effect');
  }
}