import "./general.js";
const sideBar = document.getElementById("sideBar");
const logo = document.getElementById("logo");
const top = document.getElementById("top");
const hamburgerBtn = document.getElementById("hamburger-button");
const links = document.querySelectorAll("#links li");
let sideBarToggled = true;
console.log(hamburgerBtn);
console.log(sideBar);
console.log(logo);
hamburgerBtn.addEventListener("click", () => {
  sideBar.style.width = sideBarToggled ? "fit-content" : "11.5rem";
  links.forEach((link) =>
    link.querySelector("a span").toggleAttribute("hidden"),
  );
  logo.toggleAttribute("hidden");
  top.style.justifyContent = sideBarToggled ? "center" : "space-between";
  sideBarToggled = !sideBarToggled;
});

links.forEach((link) =>
  link.addEventListener("click", () => {
    links.forEach((link) => {
      link.style.background = "";
      link.style.borderLeft = "";
      link.querySelector("a").style.color = "";
    });
    link.style.background = "oklch(var(--primary-blue) / var(--opacity-2))";
    link.style.borderLeft =
      "3px solid oklch(var(--primary-blue) / var(--opacity-6)";
    link.querySelector("a").style.color =
      "oklch(var(--primary-blue) / var(--opacity-8))";
  }),
);

window.addEventListener("hashchange", renderView);
