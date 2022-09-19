let buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  rippleEffect(button);
});

function rippleEffect(button) {
  button.addEventListener("click", function (e) {
    let x, y;
    if (button.classList.contains("item")) {
      x = e.clientX - this.offsetLeft - 19;
      y = e.clientY - this.offsetTop - 17;
    } else {
      x = e.clientX - this.offsetLeft;
      y = e.clientY - this.offsetTop;
    }

    console.log(this);

    let ripples = document.createElement("span");
    let width = window.getComputedStyle(this).width;
    let height = window.getComputedStyle(this).height;
    console.log("x =" + x + " y = " + y);
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
