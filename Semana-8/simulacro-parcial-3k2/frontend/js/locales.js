const cargarLocalesArgentina = async () => {
    const datos = await fetch("http://localhost:3001/locales");
    const locales = await datos.json();

    const tablaLocales = document.getElementById("datos-locales");
    tablaLocales.innerHTML = "";

    locales.forEach( (local) => {
        const row = `<tr>
            <td>${local.STORE_NUMBER}</td>
            <td>${local.STORE_NAME}</td>
            <td>${local.STREET_ADDRESS}</td>
            <td>${local.CITY}</td>
            <td>${local.LATITUDE}</td>
            <td>${local.LONGITUDE}</td>
        </tr>`
        tablaLocales.innerHTML += row;
    });
}

const cargarLocalesInterior = async () => {
    const datos = await fetch("http://localhost:3001/locales/interior");
    const locales = await datos.json();

    const tablaLocales = document.getElementById("datos-locales");
    tablaLocales.innerHTML = "";

    locales.forEach( (local) => {
        const row = `<tr>
            <td>${local.STORE_NUMBER}</td>
            <td>${local.STORE_NAME}</td>
            <td>${local.STREET_ADDRESS}</td>
            <td>${local.CITY}</td>
            <td>${local.LATITUDE}</td>
            <td>${local.LONGITUDE}</td>
        </tr>`
        tablaLocales.innerHTML += row;
    });
}

cargarLocalesArgentina();

// const btnFiltrar = document.getElementById('btn-filtrar');
// btnFiltrar.addEventListener('click', async function (event) {
//     await cargarLocalesInterior();
// });


const btnFiltrar = document.getElementById('btn-filtrar');
    if (btnFiltrar) {
        btnFiltrar.addEventListener('click', async function (event) {
            await cargarLocalesInterior();
        });
    } else {
        console.error('El botón con ID "btn-filtrar" no se encontró en el DOM.');
    }

const btnFiltrarPais = document.getElementById('btn-todos');
btnFiltrarPais.addEventListener('click', async function (event) {
    await cargarLocalesArgentina();
})