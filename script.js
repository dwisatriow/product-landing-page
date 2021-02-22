function menuButtonClick() {
  let navbar = document.getElementById("nav-bar");
  
  if (navbar.style.display !== "block") {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none"
  }
}