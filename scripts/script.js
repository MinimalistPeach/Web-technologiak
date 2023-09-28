document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById("capybara-image");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    // Képek források
    const imageSources = ["images/capybara.jpg", "images/capybara2.jpg"];
    let currentImageIndex = 0;

    // Függvény a kép forrásának beállításához
    function setImageSource(index) {
        image.src = imageSources[index];
    }

    // Előző kép megjelenítése
    prevButton.addEventListener("click", function() {
        currentImageIndex = (currentImageIndex - 1 + imageSources.length) % imageSources.length;
        setImageSource(currentImageIndex);
    });

    // Következő kép megjelenítése
    nextButton.addEventListener("click", function() {
        currentImageIndex = (currentImageIndex + 1) % imageSources.length;
        setImageSource(currentImageIndex);
    });
});
