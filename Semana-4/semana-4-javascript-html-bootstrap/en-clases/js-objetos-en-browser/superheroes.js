const poderes = [
    {
        nombre: "superfuerza",
        id: 1,
    },
    {
        nombre: "estrategia",
        id: 2,
    },
    {
        nombre: "velocidad",
        id: 3,
    },
    {
        nombre: "superoido",
        id: 4,
    }
]

const superheroes = [
    {
        id: 1,
        nombre: "superman",
        activo: true,
        poder: poderes[0]
    },
    {
        id: 2,
        nombre: "batman",
        activo: false,
        poder: poderes[1]
    }
]

/* Funcion para agregar una registro de un super a una tabla*/
function agregarFilaSuperTabla(s, table){
    const fila = 
        `<tr>
            <td scope="row">${s.id}</td>
            <td>${s.nombre}</td>
            <td>${s.poder.nombre}</td>
            <td>${s.activo}</td>
        </tr>`;
    const nuevaFila = table.insertRow(table.rows.length);
    nuevaFila.innerHTML = fila
}

/* Funcion para recorrer el vector superheroes y agregarlos a la tabla */
function agregarSupers() {
    const tabla = document.getElementById("tabla-super")
    for (let i of superheroes){
        agregarFilaSuperTabla(i, tabla);
    }
}

/* Funcion para filtrar un superheroe por un nombre */
const filtrar = (nombreFiltro) => {
    // el .find retorna un objeto de un array, esta funcion recibe por parametro una funcion flecha, 
    // donde "s" sera el valor para cada objeto del arreglo. return "unaCondicion" retorna true si la condicion es verdadera
    const filtrado = superheroes.find( (s)=>{return s.nombre === nombreFiltro} );
    if (filtrado) {
        const tabla = document.getElementById("tabla-super") 
        agregarFilaSuperTabla(filtrado, tabla)
    }

}

//DOMContentLoaded este evento se ejecuta cuando todos los datos fueron renderizados
document.addEventListener('DOMContentLoaded', (event)=>{ 
    agregarSupers();
    const botonFiltrar = document.getElementById("btn-filtrar");
    botonFiltrar.addEventListener("Click", (e)=>{ 
        // .value.trim() borra los " " vacios del texto que estan de mas
        const nombre = document.getElementById("txt-filtro").value.trim()
        filtrar(nombre);
     }) 
})
