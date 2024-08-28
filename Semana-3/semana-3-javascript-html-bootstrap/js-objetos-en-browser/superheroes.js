console.log("Hola")
// comentarios ``
var varPrueba1 = "var que no debe usarse"
let varLet = "pueden usarme cuando quieran"
const varConstante = "mi valor no cambia"

console.log(`variable Let: ${varLet}`)
varLet = "cambie mi valor"
console.log(`variable Let: ${varLet}`)
console.log(`variable Constante: ${varConstante}`)

const miVector = []
console.log(`Mi vector: ${miVector}`)
miVector.push(4)
console.log(`Mi vector: ${miVector}`)

const miObjeto = {
    edad: 22,
    nombre: "Mili",
    nombreCompleto: () => {
        console.log("Milagros Zea Cardenas")
    }
}

const miObjeto2 = {
    edad:24,
    nombre:"Maximo"
}

if (miObjeto === miObjeto2){
    console.log("Los objetos son iguales")
} else {
    console.log("Los objetos son distintos")
}   


if (miObjeto.edad == miObjeto2.edad){
    console.log("Tienen la misma edad")
} else {
    if (miObjeto.edad > miObjeto2.edad){
        console.log(`${miObjeto.nombre} es mayor`)
    } else {
        console.log(`${miObjeto2.nombre} es mayor`)
    }
}

miVector.push(miObjeto)
miVector.push(miObjeto2)

for(let i=1; i<miVector.length; i++){
    console.info(miVector[i])
}

for (const persona of miVector){
    console.info(persona.nombre)
}

for (const propiedad in miObjeto){
    console.info(propiedad)
}

function esMayorQueKevin(persona){
    const minion = {
        edad: 170,
        nombre: 'Kevin'
    }
    if (persona.edad > minion.edad){
        console.log(`${persona.nombre} es mayor que Kevin`)
    } else {
        console.log(`${persona.nombre} NO es mayor que Kevin`)
    }
}

esMayorQueKevin(miObjeto);
miObjeto.nombreCompleto();
