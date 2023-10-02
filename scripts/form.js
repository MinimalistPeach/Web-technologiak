function validateForm() {
    let nameField = document.forms["contactForm"]["name"].value;
    let emailField = document.forms["contactForm"]["email"].value;
    let messageField = document.forms["contactForm"]["message"].value;
    let newsLetterField = document.forms["contactForm"]["newsletter"].checked;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    let errorMess = "";

    if (nameField == "") {
        document.getElementById("name").style.outline = "1px solid red";
        errorMess += "Név mező kitöltése kötelező!!<br>";
    }
    else {
        document.getElementById("name").style.outline = "none";
    }

    if (emailField == "") {
        document.getElementById("email").style.outline = "1px solid red";
        errorMess += "Email mező kitöltése kötelező!!<br>"
    }
    else {
        document.getElementById("email").style.outline = "none";
    }

    if (!emailRegex.test(emailField)) {
        document.getElementById("email").style.outline = "1px solid red";
        errorMess += "Email formátuma nem megfelelő! (Helyes formátum példa: kissbela@gmail.com)<br>"
    }
    else {
        document.getElementById("email").style.outline = "none";
    }

    if (messageField == "") {
        document.getElementById("message").style.outline = "1px solid red";
        errorMess += "Üzenet mező kitöltése kötelező!!<br>"
    }
    else {
        document.getElementById("message").style.outline = "none";
    }

    if (errorMess.length > 0) {
        document.getElementById("errors").innerHTML = errorMess;
        return false;
    }
    else {
        const subscribedToNewstletter = newsLetterField ? "Igen" : "Nem";
        alert("Az alábbi üzenet továbbítva:\n" + "Név: " + nameField + "\nEmail cím: " + emailField + "\nÜzenet: " + messageField + "\nHírlevélre feliratkozott: " + subscribedToNewstletter);
        return true;
    }
}
