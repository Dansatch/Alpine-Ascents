var dropDown = document.getElementById("dropDown");
var dropDownMenu = document.getElementById("dropDownMenu");
var menuNav = document.getElementById("menuNav");
var menuIcon = document.getElementById("menuIcon");

var cord = dropDown.getBoundingClientRect();
dropDownMenu.style.marginTop = cord["bottom"] + 0 + "px";
dropDownMenu.style.marginLeft = cord["left"] + "px";

// Shows dropDownMenu on dropDown mouseover
function showDropDown() {
  dropDownMenu.style.display = "flex";
}

// Hides dropDownMenu on dropDown mouseleave
function hideDropDown() {
  dropDownMenu.style.display = "none";
}

var menuNavControl = false;

// Controls the menuNav (Both hiding and Showing)
function showMenuNav() {
  if (menuNavControl) {
    menuNav.style.width = "0%";
    menuIcon.firstElementChild.className = "fa-solid fa-bars";
    menuNavControl = false;
  } else {
    menuNav.style.width = "100%";
    menuIcon.firstElementChild.className = "fa fa-times closeMenuIcon";
    menuNavControl = true;
  }
}

// Hide the menuNav when the menu links are clicked
function hideMenuNav() {
  menuNav.style.width = "0%";
  menuIcon.firstElementChild.className = "fa-solid fa-bars";
  menuNavControl = false;
}
