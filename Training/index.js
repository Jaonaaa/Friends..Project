const root = document.getElementById("root");
const sideNavLeft = document.getElementById("sideNavLeft");

// root.innerHTML =
//   ' Ity le lien <a href="https://demos.creative-tim.com/material-dashboard-pro-react/?_ga=2.2i0703785.623248287.1661926030-1023394046.1661780042#/dashboards/analytics">Click me </a> ';

// sideNavLeft.style.height = window.innerHeight + "px";

const parties = document.getElementsByClassName("parties");

let rollingList = [];
for (var y = 0; y < parties.length; y++) {
  rollingList.push(parties[y]);
}

for (var i = 0; i < parties.length; i++) {
  (function (i) {
    const heightInitial = parties[i].clientHeight;
    var child = parties[i].childElementCount;
    var heightNeeded = 3.6 * child + 1;

    parties[i].addEventListener("click", () => {
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
  })(i);
}
