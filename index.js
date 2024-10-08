var readMoreButtons = document.getElementsByClassName("readMore");
var readMoreParagraphs = document.getElementsByClassName("readMoreParagraph");
var popUpDivs = document.getElementsByClassName("popUpDiv");
// var closePopUp = document.getElementsByClassName("close");

var readMoreControl = false;

// Controls read more of sections with images beside them
function readMore(num) {
  if (innerWidth <= 1000) {
    if (readMoreControl) {
      readMoreButtons[num].innerHTML =
        'Read More <span class="arrow">>>></span>';
      readMoreParagraphs[num].style.display = "none";
      readMoreControl = false;
    } else {
      readMoreButtons[num].innerHTML =
        'Read Less <span class="arrow"><<<</span>';
      readMoreParagraphs[num].style.display = "flex";
      readMoreControl = true;
    }
  } else {
    popUpDivs[num].style.display = "flex";
  }
}

// Controls the closing of popups
function shut(num) {
  popUpDivs[num].style.display = "none";
}

var readLongButtons = document.getElementsByClassName("readLong");
var readLongParagraphs = document.getElementsByClassName("readLongParagraph");
var readLongControl = false;

// Controls read more of sections without images beside them
function readLong(num) {
  if (readLongControl) {
    readLongButtons[num].innerHTML = 'Read More <span class="arrow">>>></span>';
    readLongParagraphs[num].style.display = "none";
    readLongControl = false;
  } else {
    readLongButtons[num].innerHTML = 'Read Less <span class="arrow"><<<</span>';
    readLongParagraphs[num].style.display = "flex";
    readLongControl = true;
  }
}

// Drop Down
var dropDown = document.getElementById("dropDown");
var dropDownMenu = document.getElementById("dropDownMenu");
var myNav = document.getElementById("myNav");
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

// Visitor Counter
var visitorCounter = document.getElementById("visitorCounter");
var visitCount = localStorage.getItem("visitorCounter");

// Check if vistorCounter entry is present
function visit() {
  if (visitCount) {
    visitCount = Number(visitCount) + 1;
    localStorage.setItem("visitorCounter", visitCount);
  } else {
    visitCount = 1;
    localStorage.setItem("visitorCounter", 1);
  }
  visitorCounter.innerHTML = visitCount + ' <i class="fa fa-users">';
}
visit();

// Map API
function initMap() {
  var center = { lat: 53.483959, lng: -2.244644 };
  var locations = [
    [
      'The British Mountaineering Council (BMC)<br>\
    Manchester England, CA 90017<br>\
        <a href="#branch0" onclick="onClickListener()">Click Me</a>',
      53.483959,
      -2.244644,
    ],

    [
      'Alpine Ascents<br>\
        Los Angeles, CA 90017<br>\
        <a href="#branch1" onclick="onClickListener()">Click Me</a>',
      34.046438,
      -118.259653,
    ],

    [
      'Alpine Ascents<br>\
        San Francisco, USA<br>\
        <a href="#branch3" onclick="onClickListener()">Click Me</a>',
      37.773972,
      -122.431297,
    ],

    [
      'Alpine Ascents<br>\
        New Zealand<br>\
        <a href="#branch4" onclick="onClickListener()">Click Me</a>',
      -40.900557,
      174.885971,
    ],

    [
      'Great Hyderabad Adventure Club(GHAC)<br>\
        Pasadena<br>\
        <a href="#branch5" onclick="onClickListener()">Click Me</a>',
      -25.274398,
      133.775136,
    ],

    [
      'Alpine Ascents<br>\
        South Korea<br>\
        <a href="#branch6" onclick="onClickListener()">Click Me</a>',
      35.8615,
      127.0964,
    ],
  ];

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: center,
  });
  var infowindow = new google.maps.InfoWindow({});
  var marker, count;
  for (count = 0; count < locations.length; count++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(
        locations[count][1],
        locations[count][2]
      ),
      map: map,
      title: locations[count][0],
    });
    google.maps.event.addListener(
      marker,
      "click",
      (function (marker, count) {
        return function () {
          infowindow.setContent(locations[count][0]);
          infowindow.open(map, marker);
        };
      })(marker, count)
    );
  }
}

// Controls Full Screen Exit on Map Click
function onClickListener(id) {
  // Exit Full Screen Mode
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else if (document.mozFullScreenElement) {
    document.mozCancelFullScreen();
  } else if (document.webkitFullscreenElement) {
    document.webkitExitFullscreen();
  } else if (document.msFullscreenElement) {
    document.msExitFullscreen();
  }

  return false;
}

// Gallery Section Starts
let galleryImages = document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

if (galleryImages) {
  galleryImages.forEach(function (image, index) {
    image.onclick = function () {
      let getElementCss = window.getComputedStyle(image);
      let getFullImgUrl = getElementCss.getPropertyValue("background-image");
      let getImgUrlPos = getFullImgUrl.split("/Img/");
      let setNewImgUrl = getImgUrlPos[1].replace('")', "");

      getLatestOpenedImg = index + 1;

      let container = document.body;
      let newImgWindow = document.createElement("div");
      container.appendChild(newImgWindow);
      newImgWindow.setAttribute("class", "img-window");
      newImgWindow.setAttribute("onclick", "closeImg()");

      let newImg = document.createElement("img");
      newImgWindow.appendChild(newImg);
      newImg.setAttribute("src", "Img/" + setNewImgUrl);
      newImg.setAttribute("id", "current-img");

      newImg.onload = function () {
        let imgWidth = this.width;
        let calcImgToEdge = (windowWidth - imgWidth) / 2 - 80;

        let newNextBtn = document.createElement("a");
        let btnNextText = document.createTextNode(">");
        newNextBtn.appendChild(btnNextText);
        container.appendChild(newNextBtn);
        newNextBtn.setAttribute("class", "img-btn-next");
        newNextBtn.setAttribute("onclick", "changeImg(1)");
        newNextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

        let newPrevBtn = document.createElement("a");
        let btnPrevText = document.createTextNode("<");
        newPrevBtn.appendChild(btnPrevText);
        container.appendChild(newPrevBtn);
        newPrevBtn.setAttribute("class", "img-btn-prev");
        newPrevBtn.setAttribute("onclick", "changeImg(0)");
        newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
      };
    };
  });
}

function closeImg() {
  document.querySelector(".img-window").remove();
  document.querySelector(".img-btn-next").remove();
  document.querySelector(".img-btn-prev").remove();
}

function changeImg(changeDir) {
  document.querySelector("#current-img").remove();

  let getImgWindow = document.querySelector(".img-window");
  let newImg = document.createElement("img");
  getImgWindow.appendChild(newImg);

  let calcNewImg;
  if (changeDir === 1) {
    calcNewImg = getLatestOpenedImg + 1;
    if (calcNewImg > galleryImages.length) {
      calcNewImg = 1;
    }
  } else if (changeDir === 0) {
    calcNewImg = getLatestOpenedImg - 1;
    if (calcNewImg < 1) {
      calcNewImg = galleryImages.length;
    }
  }

  newImg.setAttribute("src", "Img/img" + calcNewImg + ".jpg");
  newImg.setAttribute("id", "current-img");

  getLatestOpenedImg = calcNewImg;

  newImg.onload = function () {
    let imgWidth = this.width;
    let calcImgToEdge = (windowWidth - imgWidth) / 2 - 80;

    let nextBtn = document.querySelector(".img-btn-next");
    nextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

    let prevBtn = document.querySelector(".img-btn-prev");
    prevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
  };
}

// Current time location and date
var scrollingText = document.getElementById("scrollingText");

var currentLocation = "";

fetch("http://ip-api.com/json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    currentLocation += data["regionName"];
    currentLocation += ",";
    currentLocation += data["country"];
  });

function update() {
  var scrollText = "";
  scrollText += new Date().toUTCString();
  scrollText += ". ";
  scrollText += currentLocation;
  scrollingText.textContent = scrollText;
}

setInterval(update, 1000);
// regionName
