(() => {
    if (typeof detenerAudios === "function") {
        detenerAudios();
    }

    const nombre = localStorage.getItem("nombreUsuario");
    const mainContent = document.getElementById("pageinicio");
    if (!mainContent) return;

    let mensaje = "<h2>Bienvenido a Papus</h2>";
    let audioSrc = null;

    switch (nombre) {
        case "renato":
            mensaje = "<h2>Tu ere Kira</h2>";
            audioSrc = "audios/kira.mp3";
            break;
        case "rodrigo":
            mensaje = "<h2>Hola L</h2>";
            audioSrc = "audios/L.mp3";
            break;
        case "victor":
            mensaje = "<h2>Fuera kbro</h2>";
            audioSrc = "audios/risa-aquino.mp3";
            break;
        case "sebastian":
            mensaje = "<h2>Sapo</h2>";
            audioSrc = "audios/mundial.mp3";
            break;
        case "solange":
            mensaje = "<h2>Holi gorda</h2>";
            audioSrc = "audios/musica-tutorial.mp3";
            break;
        default:
            mensaje = "<h2>Bienvenido a Papus 👋</h2>";
            audioSrc = "audios/bienvenida.mp3";
            break;
    }

    mainContent.innerHTML = mensaje;

    if (audioSrc) {
        const audio = document.createElement("audio");
        audio.src = audioSrc;
        audio.volume = 0.25;
        audio.autoplay = true;
        document.body.appendChild(audio);
    }
})();

