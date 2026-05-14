let total = 0;
const max = 3000;

function drink() {
    let amount = parseInt(document.getElementById("amount").value);

    if (total + amount <= max) {
        total += amount;
    } else {
        total = max;
    }

    let percent = (total / max) * 100;
    document.getElementById("water").style.height = percent + "%";

    document.getElementById("text").innerText = total + " / 3000 ml";

    if (total === max) {
        alert("🎉 You reached 3 Litres!");
    }
}

function reset() {
    total = 0;
    document.getElementById("water").style.height = "0%";
    document.getElementById("text").innerText = "0 / 3000 ml";
}