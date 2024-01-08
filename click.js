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

// Apply dark theme initially
document.body.classList.add("dark-theme");
icon.src = "./dark theme icon/moon.png";

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");

  // Check if dark theme is currently applied
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "./dark theme icon/sun.png";
  } else {
    // If dark theme is not applied, switch to dark theme
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


