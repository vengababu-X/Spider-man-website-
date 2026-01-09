const frontImage = document.querySelector(".front");

function reveal(x, y) {
  frontImage.style.setProperty("--x", `${x}px`);
  frontImage.style.setProperty("--y", `${y}px`);
  frontImage.style.clipPath = `circle(140px at ${x}px ${y}px)`;
}

document.addEventListener("mousemove", (e) => {
  reveal(e.clientX, e.clientY);
});

document.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  reveal(touch.clientX, touch.clientY);
});

const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

document.addEventListener("touchmove", (e) => {
  const t = e.touches[0];
  cursor.style.left = t.clientX + "px";
  cursor.style.top = t.clientY + "px";
});
