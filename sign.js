import "./general.js";
const myGoogleSignIn = document.getElementById("google-sign");
const UTCDisplay = document.getElementById("UTCDisplay");
const dateDisplay = document.getElementById("dateDisplay");
const password = document.getElementById("password");
const passwordVisibleBtn = document.getElementById("password-visibility");
const passwordVisibleSvg = document.getElementById("password-visible");
const passwordInvisibleSvg = document.getElementById("password-invisible");
const googleBtn = document.getElementById("google-login-btn");

function updateUTCDisplay() {
  const utc = new Date().toISOString().split("T")[1].split(".")[0];
  UTCDisplay.textContent = utc;
}
function setDateDisplay() {
  const date = new Date().toISOString().split("T")[0].replaceAll("-", "/");
  dateDisplay.textContent = date;
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
function loginWithGoogle() {
  const params = new URLSearchParams({
    client_id:
      "759302179418-6ceak16q8qba0qo8bualdbpiiavs01qp.apps.googleusercontent.com",
    redirect_uri: "https://j-co-de.github.io/sign-in.html",
    response_type: "code",
    scope: "openid email profile",
    access_type: "offline",
    prompt: "consent",
  });
  window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
}

googleBtn.onclick = () => loginWithGoogle;
passwordVisibleBtn.addEventListener("click", togglePasswordVisibility);
updateUTCDisplay();
setDateDisplay();
setInterval(updateUTCDisplay, 1000);
