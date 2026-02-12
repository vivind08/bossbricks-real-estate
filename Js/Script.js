function searchCity() {
    let city = document.getElementById("cityInput").value.trim();

    if(city === "") {
        alert("Please enter a city name");
        return;
    }

    // Redirect to properties page with city query
    window.location.href = "properties.html?city=" + encodeURIComponent(city);
}

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
