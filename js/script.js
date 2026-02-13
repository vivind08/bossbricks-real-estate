


    // Redirect to properties page with city query
    window.location.href = "properties.html?city=" + encodeURIComponent(city);
}
// for emi Calculate code
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
