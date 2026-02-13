function calculateEMI() {

    let principal = parseFloat(document.getElementById("loanAmount").value);
    let annualInterest = parseFloat(document.getElementById("interestRate").value);
    let tenureYears = parseFloat(document.getElementById("loanTenure").value);

    if (isNaN(principal) || isNaN(annualInterest) || isNaN(tenureYears)) {
        document.getElementById("emiResult").innerHTML = "Please enter valid values";
        return;
    }

    let monthlyInterest = (annualInterest / 12) / 100;
    let months = tenureYears * 12;

    let emi = (principal * monthlyInterest * Math.pow(1 + monthlyInterest, months)) /
              (Math.pow(1 + monthlyInterest, months) - 1);

    document.getElementById("emiResult").innerHTML =
        "Your EMI: ₹ " + emi.toLocaleString("en-IN", { maximumFractionDigits: 2 });
}

function searchCity() {

    let input = document.getElementById("cityInput").value.toLowerCase().trim();
    let cards = document.querySelectorAll(".property-card");

    if (input === "") {
        alert("Please enter a city");
        return;
    }

    let found = false;

    cards.forEach(function(card) {

        let city = card.getAttribute("data-city");

        if (city.includes(input)) {
            card.style.display = "block";
            found = true;
        } else {
            card.style.display = "none";
        }

    });

    if (!found) {
        alert("No properties found in " + input);
    }
}
function searchCity() {

    let city = document.getElementById("cityInput").value.trim();

    if(city === "") {
        alert("Please enter a city");
        return;
    }

    window.location.href = "search.html?city=" + encodeURIComponent(city);
}
window.onload = function() {

    const params = new URLSearchParams(window.location.search);
    const city = params.get("city");

    if(city) {

        document.getElementById("resultTitle").innerHTML =
            "Properties in " + city;

        let cards = document.querySelectorAll(".property-card");

        cards.forEach(function(card) {

            let cardCity = card.getAttribute("data-city");

            if(cardCity.toLowerCase() !== city.toLowerCase()) {
                card.style.display = "none";
            }
        });
    }
}

function goBack() {
    window.location.href = "index.html";
}
