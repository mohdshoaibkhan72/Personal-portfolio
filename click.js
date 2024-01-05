//information animation
var typed = new Typed("#element", {
  strings: [
    "<i>Front-end devlopment </i> .",
    " Back-end devlopment.",
    "Fullstack devlopment",
  ],
  typeSpeed: 60,
});

//theme switure
var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "./dark theme icon/sun.png";
  } else {
    icon.src = "./dark theme icon/moon.png";
  }
};

//for pointer mouse animation

var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", (e) => {
  cursor.style.cssText = cursor2.style.cssText =
    "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

