// arreglos en JS
//  const arreglo = new Array(10);
//  arreglo.push(1)

const arreglo = [1,2,3,4];

// el push modifica el arreglo original
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)

let arreglo2 = arreglo
// arreglo2.push(5)

// no modifica el arreglo original
arreglo2 = [...arreglo, 5]




const arreglo3 = arreglo2.map(number => {
    // let result = 0
    // for(const i in arreglo){
    //     result = number * arreglo[i]
    //     console.log(arreglo[i])
    // }  
    return number * 2
})

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);

