let buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  rippleEffect(button);
});

function rippleEffect(button) {
  button.addEventListener("click", function (e) {
    let x, y;
    // if (button.classList.contains("item")) {
    //   x = e.clientX - this.offsetLeft - 19;
    //   y = e.clientY - this.offsetTop - 17;
    // } else {

    x = e.clientX - button.getBoundingClientRect().left;
    y = e.clientY - button.getBoundingClientRect().top;
    //Error that I've done :(
    // console.log("ClientRect= " + button.getBoundingClientRect().top);
    // console.log("offsetTop = " + this.offsetTop);
    // console.log("e clientY = " + e.clientY);
    // console.log("y         = " + y);
    // }

    let ripples = document.createElement("span");

    let height = window.getComputedStyle(this).height;
    ripples.style.width = height;
    ripples.style.height = height;
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";

    // ripples.style.backgroundColor = bgColor;
    this.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    }, 1000);
  });
}
// for testing the effect problem
window.addEventListener("click", (e) => {
  let x = e.clientX;
  let y = e.clientY;
});
//-------------------------------

let inputs = document.querySelectorAll(".input");

inputs.forEach((input) => {
  input.firstElementChild.addEventListener("blur", (e) => {
    if (input.firstElementChild.value != "") {
      input.children[1].setAttribute(
        "style",
        `top:-0.5rem;font-size:0.83rem;left:0.4rem;padding:0 0.2rem; `
      );
    } else {
      input.children[1].setAttribute(
        "style",
        `top:1rem;font-size:0.93rem;left:0.8rem;padding:0 0; color:rgb(105, 197, 240);`
      );
      setTimeout(() => input.children[1].removeAttribute("style"), 10);
    }
  });
});
