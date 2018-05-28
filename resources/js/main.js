// Push side bar

function openNav() {
    document.getElementById("mySidenav").style.width = "13rem";
    document.getElementById("main").style.marginLeft = "13rem";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

// video

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "&#9724;";
  } else {
    video.pause();
    btn.innerHTML = "&#9654;";
  }
}
