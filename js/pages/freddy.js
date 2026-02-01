(() => {
    const ImagenFreddy = document.getElementById("ImagenFreddy");
    const audioFreddy = document.getElementById("audioFreddy");
    const audioEnojado = document.getElementById("audioFreddyEnojado");
    const titulo = document.getElementById("tituloPagina");
    const audioAmbiente = document.getElementById("audioBienvenida");
    ImagenFreddy.addEventListener("click", () => {
        const probabilidad = Math.random();
        if (probabilidad < 0.01) {
            activarFreddyEnojado();
        } else {
            audioFreddy.currentTime = 0;
            audioFreddy.play();
        }
    });
    function activarFreddyEnojado() {
        document.body.classList.add("freddy-enojado");
        titulo.textContent = "Freddy está enojado!";
        ImagenFreddy.src = "images/freddy-enojado.png";
        audioAmbiente?.pause();
        audioEnojado.currentTime = 0;
        audioEnojado.play();
        setTimeout(() => {
            document.body.classList.remove("freddy-enojado");
            titulo.textContent = "Papus";
            ImagenFreddy.src = "images/freddy.png";
            audioEnojado.currentTime = 0;
            audioEnojado.pause();
            audioAmbiente?.play();
        }, 5000);
    }
})();

