/*Crear una matriz con una función de 3x3, (cuadrada)
con numeros enteros positivos en cada una de sus posiciones.*/

let crearMatriz = (num) => {
    let matriz = []
    let fila = []
    for (let i = 0; i < num; i++) {

        for (let j = 0; j < num; j++) {
            fila.push(Math.floor(Math.random() * 50))
        }
        matriz.push(fila)
        fila = []
    }
    return matriz
}
const matrizNueva = crearMatriz(3)
console.table(matrizNueva);