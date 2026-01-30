const button = document.getElementById('dig-deeper-btn');
const text = document.getElementById('modal-text');
let statement = null;

if(button) {
  button.addEventListener("click", async () => {
    if(statement===null) {
      try {
        const response = await fetch("/api/dig-deeper");
        if (!response.ok) throw new Error("Network response was not ok");
        statement = await response.json();
      } catch (err) {
        console.error("Error calling server:", err);
      }
    }
    text.textContent = statement.text;
  })
}

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
