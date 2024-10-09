const scrollingText = document.getElementById("scrollingText");
let currentLocation = "";

fetch("http://ip-api.com/json")
  .then((res) => res.json())
  .then((data) => {
    currentLocation += data["regionName"];
    currentLocation += ",";
    currentLocation += data["country"];
  });

function update() {
  const scrollText = `${new Date().toUTCString()}. ${currentLocation}`;
  scrollingText.textContent = scrollText;
}

setInterval(update, 1000);
