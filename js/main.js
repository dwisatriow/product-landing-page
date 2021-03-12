function menuButtonClick() {
  let navbar = document.getElementById("nav-bar");
  let menuButton = document.getElementById("menu-button");
  let menuIcon = document.getElementById("menu-icon");

  function setAttributes(el, attrs) {
    for(let key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

  let menuOpen = document.createElement("span");
  let menuClose = document.createElement("span");

  setAttributes(menuOpen , {"id": "menu-icon", "class": "iconify", "data-inline": "false", "data-icon": "bytesize:menu", "style": "font-size: 24px;"});
  setAttributes(menuClose,  {"id": "menu-icon", "class": "iconify", "data-inline": "false", "data-icon": "clarity:window-close-line", "style": "font-size: 24px;"});

  if (navbar.style.display !== "flex" && window.innerWidth < 576) {
    navbar.style.display = "flex";
    menuIcon.remove();
    menuButton.appendChild(menuClose);
  } else if (navbar.style.display !== "none" && window.innerWidth < 576) {
    navbar.style.display = "none";
    menuIcon.remove();
    menuButton.appendChild(menuOpen);
  }
}

window.onload = function() {
  // navbar shadow on scroll
  window.onscroll = function () {
    windowOnScroll();
  };
  
  function windowOnScroll() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.querySelector("#header").className = "floatingHeader";
      if (window.innerWidth < 576) document.querySelector("#header-img").style.display = "block";
    } else {
      document.querySelector("#header").className = "";
      if (window.innerWidth < 576) document.querySelector("#header-img").style.display = "none";
    }
  }

  // hide dropdown on desktop version
  // onload
  let navbar = document.getElementById("nav-bar");
  let windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

  if (windowWidth >= 576) {
    navbar.style.display = "flex";
  }

  // onresize
  function setAttributes(el, attrs) {
    for(let key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

  window.onresize = function () {
    windowOnResize();
  };

  function windowOnResize() {
    let navbar = document.getElementById("nav-bar");
    let menuButton = document.getElementById("menu-button");
    let menuOpen = document.createElement("span");
    let menuIcon = document.getElementById("menu-icon");
    
    setAttributes(menuOpen , {"id": "menu-icon", "class": "iconify", "data-inline": "false", "data-icon": "bytesize:menu", "style": "font-size: 24px;"});

    let windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (navbar.style.display !== "flex" && windowWidth >= 576) {
      navbar.style.display = "flex";
      document.querySelector("#header-img").style.display = "block";
    } else if (navbar.style.display !== "none" && window.innerWidth < 576) {
      navbar.style.display = "none";
      menuIcon.remove();
      menuButton.appendChild(menuOpen, navbar);
      document.querySelector("#header-img").style.display = "none";
    }
  }
}
