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
