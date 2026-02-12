function formatIndianCurrency(num) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(num);
}

function calculateEMI() {
    let principal = parseFloat(document.getElementById("loanAmount").value);
    let rate = parseFloat(document.getElementById("interestRate").value);
    let tenure = parseFloat(document.getElementById("loanTenure").value);

    if (!principal || !rate || !tenure) {
        document.getElementById("emiResult").innerHTML = 
            "<p style='color:red;'>Please fill all fields properly.</p>";
        return;
    }

    let monthlyRate = rate / 12 / 100;
    let months = tenure * 12;

    let emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
              (Math.pow(1 + monthlyRate, months) - 1);

    let totalPayment = emi * months;
    let totalInterest = totalPayment - principal;

    document.getElementById("emiResult").innerHTML = `
        <p><strong>Monthly EMI:</strong> ${formatIndianCurrency(emi)}</p>
        <p><strong>Total Interest:</strong> ${formatIndianCurrency(totalInterest)}</p>
        <p><strong>Total Payment:</strong> ${formatIndianCurrency(totalPayment)}</p>
    `;
}

