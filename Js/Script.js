function calculateEMI() {

    let principal = document.getElementById("loanAmount").value;
    let annualInterest = document.getElementById("interestRate").value;
    let tenureYears = document.getElementById("loanTenure").value;

    if(principal === "" || annualInterest === "" || tenureYears === "") {
        alert("Please fill all fields");
        return;
    }

    let monthlyInterest = (annualInterest / 12) / 100;
    let months = tenureYears * 12;

    let emi = (principal * monthlyInterest * Math.pow(1 + monthlyInterest, months)) /
              (Math.pow(1 + monthlyInterest, months) - 1);

    emi = emi.toFixed(2);

    document.getElementById("emiResult").innerHTML = 
        "Your EMI: ₹ " + Number(emi).toLocaleString("en-IN");
}
