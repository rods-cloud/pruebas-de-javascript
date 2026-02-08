(() => {
    const item = document.getElementById("juegoMenu");
    const elementos = item.querySelectorAll(".imagen-juego");
    elementos.forEach(element => {
        element.addEventListener("click", () => {
            const imagenSeleccionada = element.src;
            document.getElementById("seleccion-usuario").src = imagenSeleccionada;
            const opciones = ["images/juego/papel.png", "images/juego/tijera.png", "images/juego/piedra.png"];
            const ramdom = Math.floor(Math.random() * opciones.length);
            let cpu = "";
            if (ramdom === 0) cpu = "papel";
            if (ramdom === 1) cpu = "tijera";
            if (ramdom === 2) cpu = "piedra";
            document.getElementById("seleccion-computadora").src = opciones[ramdom];
            if (imagenSeleccionada === document.getElementById("seleccion-computadora").src) {
                const resultado = document.getElementById("resultado");
                resultado.textContent = "¡Empate!";
                resultado.style.color = "orange";
            } else if (
                (element.id === "piedra" && cpu === "tijera") ||
                (element.id === "papel" && cpu === "piedra") ||
                (element.id === "tijera" && cpu === "papel")
            ) {
                const resultado = document.getElementById("resultado");
                resultado.style.color = "green";
                resultado.textContent = "¡Ganaste!";
            } else {
                const resultado = document.getElementById("resultado");
                resultado.style.color = "red";
                resultado.textContent = "¡Perdiste!";
            }
            const imgUsuario = document.getElementById("seleccion-usuario");
            const imgCpu = document.getElementById("seleccion-computadora");
            imgUsuario.classList.remove("choque-usuario");
            imgCpu.classList.remove("choque-cpu");
            void imgUsuario.offsetWidth;
            imgUsuario.classList.add("choque-usuario");
            imgCpu.classList.add("choque-cpu");
        });
    });
})();