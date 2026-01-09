const frontImage = document.querySelector(".front");

function reveal(x, y) {
  frontImage.style.setProperty("--x", `${x}px`);
  frontImage.style.setProperty("--y", `${y}px`);
  frontImage.style.clipPath = `circle(120px at ${x}px ${y}px)`;
}

/* MOUSE */
document.addEventListener("mousemove", (e) => {
  reveal(e.clientX, e.clientY);
});

/* TOUCH (MOBILE) */
document.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  reveal(touch.clientX, touch.clientY);
});
