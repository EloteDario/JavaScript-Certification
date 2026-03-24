const themes = [
  {name: "light", message: "Theme: light"},
  {name: "dark", message: "Theme: dark"}
]

const drop = document.querySelector("#theme-dropdown")
const button = document.querySelector("#theme-switcher-button")
const announcer = document.querySelector("#theme-announcer");

button.addEventListener("click", () => {
  const isExpanded = button.getAttribute("aria-expanded") === "true";
  if (isExpanded) {
    button.setAttribute("aria-expanded", "false")
    drop.hidden = true;
  } else{
    button.setAttribute("aria-expanded", "true")
    drop.hidden = false;
    }
}); 

drop.addEventListener("click", (event) => {
const sName = event.target.id.replace("theme-", "")
const selectedTheme = themes.find(t => t.name === sName)
document.body.className = `theme-${selectedTheme.name}`;
announcer.textContent = selectedTheme.message;
button.setAttribute("aria-expanded", "false");
drop.hidden = true;
})
