colorChooser.addEventListener('input', function () {
    const header = document.querySelector("header");

    header.style.backgroundColor = document.getElementById("colorChooser").value;

    localStorage.setItem("headerColor", document.getElementById("colorChooser").value);
});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    const storedColor = localStorage.getItem("headerColor");

    // Ha megtalálja a helyi tárban a színt, akkor beállítja a fejlecet
    if (storedColor) {
        header.style.backgroundColor = storedColor;
        document.getElementById("colorChooser").value = storedColor;
    }
});
