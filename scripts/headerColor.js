colorChooser.addEventListener('input', function () {
    const header = document.querySelector("header");
    const changables = document.getElementsByClassName("changable");
    const color = document.getElementById("colorChooser").value;
    const navbar = document.getElementById("navbar");

    for (var i = 0; i < changables.length; i++) {
        changables[i].style.color = color;
    }

    navbar.style.backgroundColor = color;

    header.style.backgroundColor = color;

    localStorage.setItem("pageColor", color);
});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const navbar = document.getElementById("navbar");
    const changables = document.getElementsByClassName("changable");

    const storedColor = localStorage.getItem("pageColor");

    // Ha megtalálja a helyi tárban a színt, akkor beállítja a fejlecet
    if (storedColor) {
        header.style.backgroundColor = storedColor;
        document.getElementById("colorChooser").value = storedColor;
        navbar.style.backgroundColor = storedColor;
        for (var i = 0; i < changables.length; i++) {
            changables[i].style.color = storedColor;
        }
    }
});
