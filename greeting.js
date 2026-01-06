const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) {
  greeting.textContent = "God Morgen";
} else if (hour < 18) {
  greeting.textContent = "God dag";
} else {
  greeting.textContent = "God aften";
}
