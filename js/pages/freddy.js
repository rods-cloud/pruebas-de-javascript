(() => {
    let temporizador;

    function detenerAudios(tiempoMs = 0) {
        clearTimeout(temporizador);
        temporizador = setTimeout(() => {
            document.querySelectorAll("audio:not(.no-detener)").forEach(audio => {
                audio.pause();
                audio.currentTime = 0;
            });
        }, tiempoMs);
    }
    const ImagenFreddy = document.getElementById("ImagenFreddy");
    const audioFreddy = document.getElementById("audioFreddy");
    ImagenFreddy.addEventListener("click", () => {
        detenerAudios(0);
        audioFreddy.currentTime = 0;
        audioFreddy.play();
    });
})();

