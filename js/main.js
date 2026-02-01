const menuItems = [
    {etiqueta: "Freddy", pagina: "pages/freddy.html", codigo: "js/pages/freddy.js"},
]

const mainNav=document.getElementById("main-nav");
const mainContent=document.getElementById("main-content");

menuItems.forEach(item=>{
    const menuLI=document.createElement("li");
    menuLI.className = "nav-item";
    const menuA=document.createElement("a");
    menuA.className="nav-link";
    menuA.href="#";
    menuA.textContent=item.etiqueta;
    menuLI.appendChild(menuA);
    mainNav.appendChild(menuLI);

    menuA.addEventListener("click", ()=>{
        fetch(item.pagina)
        .then(response => response.text())
        .then(data=>{
            mainContent.innerHTML=data;
            if(item.codigo) {
                const codigoPagina=document.createElement("script");
                codigoPagina.setAttribute("src", item.codigo);
                mainContent.appendChild(codigoPagina);
            }
        })
    });
})

function cambiarTitulo() {
    const header = document.getElementById("header");
    header.style.display = "block";
    const login = document.getElementById("loginclass");
    login.style.display = "none";
    login.classList.add("fade-out");

    setTimeout(() => {
        login.classList.add("d-none");
    }, 500);
    const navBar = document.getElementById("navbar");
    navBar.style.display = "block";
}