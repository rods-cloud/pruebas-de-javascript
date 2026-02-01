const menuItems = [
    { etiqueta: "Inicio", pagina: "pages/inicio.html", codigo: "js/pages/inicio.js" },
    { etiqueta: "Freddy", pagina: "pages/freddy.html", codigo: "js/pages/freddy.js" },
    { etiqueta: "Contactos", pagina: "pages/contactos.html", codigo: "js/pages/contactos.js" }
]

let temporizador;

function detenerAudios() {
    document.querySelectorAll("audio").forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
        audio.remove();
    });
}


const mainNav = document.getElementById("main-nav");
const mainContent = document.getElementById("main-content");

menuItems.forEach(item => {
    const menuLI = document.createElement("li");
    menuLI.className = "nav-item";
    const menuA = document.createElement("a");
    menuA.className = "nav-link";
    menuA.href = "#";
    menuA.textContent = item.etiqueta;
    menuLI.appendChild(menuA);
    mainNav.appendChild(menuLI);
    if (item.etiqueta === "Inicio") {
        menuA.classList.add("nav-inicio");
    }

    menuA.addEventListener("click", () => {
        fetch(item.pagina)
            .then(response => response.text())
            .then(data => {
                mainContent.innerHTML = data;
                mainContent.classList.remove("slide-in");
                void mainContent.offsetWidth;
                mainContent.classList.add("slide-in");
                if (item.codigo) {
                    const codigoPagina = document.createElement("script");
                    codigoPagina.setAttribute("src", item.codigo);
                    mainContent.appendChild(codigoPagina);
                }
            })
    });
})

function cargarPagina(item) {
    fetch(item.pagina)
        .then(res => res.text())
        .then(html => {
            mainContent.innerHTML = html;
            if (item.codigo) {
                const script = document.createElement("script");
                script.src = item.codigo;
                mainContent.appendChild(script);
            }
        });
}

function cambiarTitulo() {
    const nombre2 = document.getElementById("nombre").value.trim();
    if (nombre2) {
        const nombreInput = document.getElementById("nombre").value.trim().toLowerCase();
        localStorage.setItem("nombreUsuario", nombreInput);
        cargarPagina(menuItems[0]);
        const header = document.getElementById("header");
        header.style.display = "block";
        const login = document.getElementById("loginclass");
        login.style.display = "none";
        login.classList.add("fade-out");
        login.classList.remove("show");
        setTimeout(() => {
            login.classList.add("d-none");
        }, 400);

        setTimeout(() => {
            login.classList.add("d-none");
        }, 500);
        const navBar = document.getElementById("navbar");
        navBar.style.display = "block";
    }
    else {
        const text = document.getElementById("nombre");
        text.placeholder = "Por favor ingresa un nombre";
        text.classList.add("shake");
        setTimeout(() => text.classList.remove("shake"), 300);
    }

}