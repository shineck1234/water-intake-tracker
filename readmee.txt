Water Intake Tracker – Code Explanation README
📌 Overview

This project is a simple web application that tracks water intake in milliliters (ml) and shows progress using a filling bottle UI.

It is built using:

HTML → Structure
CSS → Design (bottle + UI)
JavaScript → Logic (calculation + interaction)
🧱 HTML (index2.html) – Structure
🔹 Main Parts:
<div class="bottle">
    <div id="water"></div>
</div>

👉 This creates the bottle

.bottle → outer container
#water → inner part that fills up
<h2 id="text">0 / 3000 ml</h2>

👉 Displays current water amount

<select id="amount">

👉 Dropdown to select water (50ml–500ml)

<button onclick="drink()">Drink</button>
<button onclick="reset()">Reset</button>

👉 Buttons call JavaScript functions

🎨 CSS (style2.css) – Design
🔹 Bottle Design
.bottle {
    height: 300px;
    border: 4px solid white;
    overflow: hidden;
}

👉 Creates bottle shape

#water {
    height: 0%;
    position: absolute;
    bottom: 0;
}

👉 Important:

Starts empty
Fills from bottom to top
transition: 0.5s;

👉 Makes smooth filling animation

⚙️ JavaScript (script2.js) – Logic
🔹 Variables
let total = 0;
const max = 3000;

👉 total = current water
👉 max = bottle capacity (3L)

🔹 Drink Function
function drink() {
    let amount = parseInt(document.getElementById("amount").value);

👉 Gets selected ml from dropdown

if (total + amount <= max) {
    total += amount;
} else {
    total = max;
}

👉 Prevents overflow beyond 3000 ml

let percent = (total / max) * 100;

👉 Converts ml → percentage

document.getElementById("water").style.height = percent + "%";

👉 Fills bottle visually

document.getElementById("text").innerText = total + " / 3000 ml";

👉 Updates text display

if (total === max) {
    alert("🎉 You reached 3 Litres!");
}

👉 Shows message when goal reached

🔹 Reset Function
function reset() {
    total = 0;

👉 Reset value

document.getElementById("water").style.height = "0%";

👉 Empty bottle

document.getElementById("text").innerText = "0 / 3000 ml";

👉 Reset text

🧠 Core Concept (Important)

👉 The main idea is:

Water (ml) → Convert to % → Apply to height

Example:

1500 ml → (1500 / 3000) × 100 = 50%
👉 Bottle fills halfway
🔥 Key Learning from This Project
DOM Manipulation (getElementById)
Event handling (onclick)
CSS positioning (bottom filling)
Real-world logic implementation
🏁 Final Understanding

This project works by connecting UI + logic:

User clicks → JS updates value
JS updates → CSS changes height
CSS change → Bottle fills visually