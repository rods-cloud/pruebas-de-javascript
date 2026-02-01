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
const ImagenFreddy = document.createElement("img");
ImagenFreddy.src = "images/freddy.png";
ImagenFreddy.style="cursor: pointer;"
document.body.appendChild(ImagenFreddy);

const audioFreddy = document.createElement("audio");
audioFreddy.src = "audios/freddy.mp3";
audioFreddy.className = "no-detener";
document.body.appendChild(audioFreddy);

ImagenFreddy.addEventListener("click", () => {
    detenerAudios(0);
    audioFreddy.currentTime = 0;
    audioFreddy.play();
});
