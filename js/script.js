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
//price preditor for land
function predictPrice() {

    let city = document.getElementById("city").value;
    let sqft = parseFloat(document.getElementById("sqft").value);

    if(city === "" || isNaN(sqft)) {
        alert("Please select city and enter area");
        return;
    }

    // Price per sqft for each city
    let rates = {
        mumbai: 12000,
        pune: 6000,
        ratnagiri: 2500,
        panvel: 5000,
        karjat:4500,
        khopoli:5200,
        navimumbai:7800,
        borivali:10000
    };

    let pricePerSqft = rates[city];
    let totalPrice = sqft * pricePerSqft;

    document.getElementById("resultContainer").innerHTML = `
        <div class="price-card">
            <h3>${city.toUpperCase()} Land Estimate</h3>
            <p>Area: ${sqft} sqft</p>
            <p>Rate: ₹ ${pricePerSqft.toLocaleString("en-IN")} per sqft</p>
            <h2>Total Price: ₹ ${totalPrice.toLocaleString("en-IN")}</h2>
        </div>
    `;
}

function goBack() {
    window.location.href = "index.html";
}
