(() => {
    const ImagenFreddy = document.getElementById("ImagenFreddy");
    const audioFreddy = document.getElementById("audioFreddy");
    ImagenFreddy.addEventListener("click", () => {
        audioFreddy.currentTime = 0;
        audioFreddy.play();
    });
})();

