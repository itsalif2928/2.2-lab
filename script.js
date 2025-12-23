function showMessage() {
    alert("Welcome to Alif Rahman's Website!");
}

document.getElementById("contactForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
    this.reset();
});
