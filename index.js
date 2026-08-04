const starBg = document.querySelector(".starry-background");
const starCount = 800;
for (let i = 0; i < starCount; i++) {
  const star = document.createElement("div");
  const radius = Math.random() * 4 + "px";
  star.className = "star";
  star.style.top = Math.random() * 100 + "vh";
  star.style.left = Math.random() * 100 + "vw";
  star.style.width = radius;
  star.style.height = radius;
  star.style.opacity = Math.random();
  star.style.animation = `twinkle${Math.floor(Math.random() * 3) + 1} ${Math.floor(Math.random() * 3) + 3}s ease-in-out infinite alternate`;
  starBg.appendChild(star);
}
