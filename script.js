// JavaScript segítségével módosítsunk egy elemet az oldalon
document.addEventListener("DOMContentLoaded", function() {
    const imageSection = document.getElementById("capybara-image-section");
    const image = imageSection.querySelector("img");

    // Kattintásra változtassuk meg a kép forrását
    image.addEventListener("click", function() {
        if (image.src.endsWith("capybara.jpg")) {
            image.src = "kepek/capybara2.jpg";
        } else {
            image.src = "kepek/capybara.jpg";
        }
    });
});
