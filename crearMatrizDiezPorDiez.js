/*Crear una función que retorne una matriz
de 10 x 10 (100 números)*/

const matrizDiezXDiez = () => {
    let matriz = []
    for (let i = 1; i <= 100; i++) {
        matriz.push(i)   
    }
    return matriz
}
let matriz10x10 = matrizDiezXDiez()
console.log(matriz10x10);