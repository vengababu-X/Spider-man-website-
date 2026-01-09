const front = document.querySelector(".front");

function move(x, y) {
  front.style.setProperty("--x", `${x}px`);
  front.style.setProperty("--y", `${y}px`);
}

/* MOUSE */
document.addEventListener("mousemove", (e) => {
  move(e.clientX, e.clientY);
});

/* TOUCH */
document.addEventListener("touchmove", (e) => {
  const t = e.touches[0];
  move(t.clientX, t.clientY);
});
