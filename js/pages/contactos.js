(() => {
    fetch("js/data/contactosData.json")
        .then(response => response.json())
        .then(contactos => {
            const contenedor = document.getElementById("contenedor-contactos");
            contactos.forEach(contacto => {
                const tarjeta = `
                <div class="card card-contacto" style="width: 18rem; margin:10px; display:inline-block;">
                <img src="${contacto.foto}" class="card-img-top" alt="${contacto.nombre} ${contacto.apellido}">
                <h5 class="card-title">${contacto.nombre} ${contacto.apellido}</h5>
                <p class="card-text">Cargo: ${contacto.cargo}</p>
                <a href="${contacto.link}" class="btn btn-primary">Link Perfil</a>
                </div>
                `
                contenedor.innerHTML += tarjeta;
            })
        });
})(); 