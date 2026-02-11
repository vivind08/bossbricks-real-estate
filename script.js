// Search Filter
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", function() {
    const value = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const city = card.getAttribute("data-city");

        if (city.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// Contact Form Alert
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for contacting BossBricks! We will get back to you soon.");
});
