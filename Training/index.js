const root = document.getElementById("root");
const sideNavLeft = document.getElementById("sideNavLeft");

// root.innerHTML =
//   ' Ity le lien <a href="https://demos.creative-tim.com/material-dashboard-pro-react/?_ga=2.2i0703785.623248287.1661926030-1023394046.1661780042#/dashboards/analytics">Click me </a> ';
// sideNavLeft.style.height = window.innerHeight + "px";

const parties = document.getElementsByClassName("parties");

for (var i = 0; i < parties.length; i++) {
  (function (i) {
    const heightInitial = parties[i].clientHeight;
    var child = parties[i].childElementCount;
    var heightNeeded = 3.6 * child + 1;

    parties[i].firstElementChild.addEventListener("click", () => {
      let caret =
        parties[i].firstElementChild.firstElementChild.getElementsByClassName(
          "caret"
        );
      if (parties[i].style.height == heightNeeded + "rem") {
        parties[i].firstElementChild.classList.remove("selected");
        caret[0].setAttribute("style", "transform: rotate(0deg) ;");
        parties[i].style.height = heightInitial + "px";
      } else {
        parties[i].firstElementChild.classList.add("selected");
        caret[0].setAttribute("style", "transform: rotate(180deg) ;");
        parties[i].style.height = heightNeeded + "rem";
      }
    });

    const items = parties[i].getElementsByClassName("item");
    for (var o = 0; o < items.length; o++) {
      (function (o) {
        items[o].addEventListener("click", () => {
          if (items[o].classList.contains("selectedItem")) {
            items[o].classList.remove("selectedItem");
          } else {
            items[o].classList.add("selectedItem");
          }
        });
      })(o);
    }
  })(i);
}

const closerLeftNavbar = document.getElementById("closerLeftNavbar");

closerLeftNavbar.addEventListener("click", () => {
  sideNavLeft.setAttribute(
    "style",
    "transform:translateX(-" + (sideNavLeft.clientWidth + 14) + "px)"
  );
  setTimeout(() => {
    sideNavLeft.style.display = " none";
  }, 300);
});

document.getElementById("openLeftNavbar").addEventListener("click", () => {
  sideNavLeft.style.display = "flex";
  setTimeout(() => {
    sideNavLeft.setAttribute("style", "transform:translateX(0px)");
  }, 100);
});
