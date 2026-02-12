function calculateINR() {
    const P = parseFloat(document.getElementById('loanAmount').value);
    const R = parseFloat(document.getElementById('interestRate').value);
    const N = parseFloat(document.getElementById('tenure').value);

    if (!P || !R || !N) return;

    const monthlyRate = R / 12 / 100;
    const months = N * 12;

    const emi = (P * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                (Math.pow(1 + monthlyRate, months) - 1);

    // Formatting for Indian Rupees (Lakhs/Crores commas)
    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    });

    document.getElementById('emiResult').innerText = formatter.format(emi);
}
