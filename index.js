const starBg = document.querySelector(".starry-background");
const password = document.getElementById("password");
const passwordVisibleBtn = document.getElementById("password-visibility");
const passwordVisibleSvg = document.getElementById("password-visible");
const passwordInvisibleSvg = document.getElementById("password-invisible");
const myGoogleSignIn = document.getElementById("google-sign");
const starCount = 1000;

function implementStars() {
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    const radius = Math.random() * 4 + "px";
    star.className = "star";
    star.style.top = Math.random() * 98 + 1 + "vh";
    star.style.left = Math.random() * 98 + 1 + "vw";
    star.style.width = radius;
    star.style.height = radius;
    star.style.opacity = Math.random();
    star.style.animation = `twinkle${Math.floor(Math.random() * 3) + 1} ${Math.floor(Math.random() * 3) + 3}s ease-in-out infinite alternate`;
    starBg.appendChild(star);
  }
}

const togglePasswordVisibility = (e) => {
  e.preventDefault();
  passwordVisibleSvg.toggleAttribute("hidden");
  passwordInvisibleSvg.toggleAttribute("hidden");
  password.type = password.type === "password" ? "text" : "password";
  password.style.color =
    password.style.color === "white"
      ? "oklch(var(--primary-blue) / var(--opacity-1)"
      : "white";
};
implementStars();
passwordVisibleBtn.addEventListener("click", togglePasswordVisibility);
