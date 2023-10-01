document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const nameField = document.getElementById("name");
        const emailField = document.getElementById("email");
        const messageField = document.getElementById("message");
        const newsletterField = document.getElementById("newsletter");

        const subscribedToNewstletter = newsletterField.checked ? "Igen" : "Nem";

        nameField.classList.remove("error");
        emailField.classList.remove("error");
        messageField.classList.remove("error");

        if (nameField.value.trim() === "") {
            nameField.classList.add("error");
        }

        if (emailField.value.trim() === "") {
            emailField.classList.add("error");
        }

        if (messageField.value.trim() === "") {
            messageField.classList.add("error");
        }

        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if (!emailRegex.test(emailField.value)) {
            emailField.classList.add("error");
        }

        alert("Az alábbi üzenet továbbítva:\n" + "Név: " + nameField.value + "\nEmail cím: " + emailField.value + "\nÜzenet: " + messageField.value + "\nHírlevélre feliratkozott: " + subscribedToNewstletter);
    });
});
