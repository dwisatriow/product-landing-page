function menuButtonClick() {
  let navbar = document.getElementById("nav-bar");
  let header = document.getElementById("header");
  let menuButton = document.getElementById("menu-button");

  function setAttributes(el, attrs) {
    for(let key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

  let menuIcon = document.createElement("span");
  let closeIcon = document.createElement("span");

  setAttributes(menuIcon , {"id": "menu-button", "onclick": "menuButtonClick()", "class": "iconify", "data-inline": "false", "data-icon": "bytesize:menu", "style": "font-size: 24px;"});
  setAttributes(closeIcon,  {"id": "menu-button", "onclick": "menuButtonClick()", "class": "iconify", "data-inline": "false", "data-icon": "clarity:window-close-line", "style": "font-size: 24px;"});

  if (navbar.style.display !== "block") {
    navbar.style.display = "block";
    menuButton.remove();
    header.insertBefore(closeIcon, navbar);
  } else {
    navbar.style.display = "none";
    menuButton.remove();
    header.insertBefore(menuIcon, navbar);
  }
}