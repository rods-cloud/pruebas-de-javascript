(() => {
    const ImagenFreddy = document.getElementById("ImagenFreddy");
    const audioFreddy = document.getElementById("audioFreddy");
    ImagenFreddy.addEventListener("click", () => {
        detenerAudios(0);
        audioFreddy.currentTime = 0;
        audioFreddy.play();
    });
})();

