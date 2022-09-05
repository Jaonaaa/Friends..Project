const root = document.getElementById("root");

// -----------------------------------
// root.innerHTML += sideNavLeft => from SideNavLeft.js;
// import { sideNavLeftJS } from "./SideNavLeft.js";
// /// Need to use Live server to see it
//----------------------------------------

root.innerHTML += sideNavLeftContent;

const sideNavLeft = document.getElementById("sideNavLeft");

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
      // Désactive  l'ouverture des autres liste déroulante
      for (var e = 0; e < parties.length; e++) {
        if (e == i) {
        } else {
          parties[e].firstElementChild.classList.remove("selected");
          parties[e].firstElementChild.firstElementChild
            .getElementsByClassName("caret")[0]
            .setAttribute("style", "transform: rotate(0deg) ;");
          parties[e].style.height = heightInitial + "px";
          /// complex
          /*(function (e) {
            for (
              var a = 0;
              a < parties[e].getElementsByClassName("item").length;
              a++
            ) {
              (function (a) {
                parties[e]
                  .getElementsByClassName("item")
                  [a].addEventListener("click", () => {
                    console.log(parties[e]);
                    parties[e]
                      .getElementsByClassName("item")
                      [a].classList.remove("selectedItem");
                  });
              })(a);
            }
          })(e);*/
          //---------------
        }
      } //---------------------------------------------

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
            for (var u = 0; u < items.length; u++) {
              items[u].classList.remove("selectedItem");
            }
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
