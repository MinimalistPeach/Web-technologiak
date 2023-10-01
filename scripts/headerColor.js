document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const buttonGreen = document.getElementById("colorChangerGreen");
    const buttonRed = document.getElementById("colorChangerRed");
    const buttonBlue = document.getElementById("colorChangerBlue");

    // Retrieve the stored header color from localStorage
    const storedColor = localStorage.getItem("headerColor");

    // Set the initial header color
    if (storedColor) {
        header.style.backgroundColor = storedColor;
    }

    buttonGreen.addEventListener("click", function () {
        
        // Update the header color
        header.style.backgroundColor = "#4CAF50";

        // Store the updated color in localStorage
        localStorage.setItem("headerColor", "#4CAF50");
    });

    buttonRed.addEventListener("click", function () {
        
        // Update the header color
        header.style.backgroundColor = "red";

        // Store the updated color in localStorage
        localStorage.setItem("headerColor", "red");
    });

    buttonBlue.addEventListener("click", function () {
        
        // Update the header color
        header.style.backgroundColor = "blue";

        // Store the updated color in localStorage
        localStorage.setItem("headerColor", "blue");
    });
});
