const nombre = "Fernando";
const apellido = "Hernandez"

// const nombreCompleto = nombre + ' ' +  apellido
const nombreCompleto = `${nombre}
 ${apellido}
 ${ 1 + 1 }`

console.log(nombreCompleto);

function getSaludo(nombreCompleto){
    return `getSaludo para ${nombreCompleto}`
}

console.log(`${getSaludo(nombreCompleto)}`)