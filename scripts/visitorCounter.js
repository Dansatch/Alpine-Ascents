const visitorCounter = document.getElementById("visitorCounter");
let visitCount = localStorage.getItem("visitorCounter");

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

visit(); // Initialize visit counter
