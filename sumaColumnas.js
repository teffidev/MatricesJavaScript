/*Crear una función que nos retorne la sumatoria
de la primer y ultims COLUMNA*/

const matrizCol = [
    [70, 6, 7, 1, 30],
    [60, 1, 8, 12, 40],
    [10, 43, 12, 76, 90],
    [10, 12, 41, 13, 90],
    [50, 4, 30, 10, 50]
];

const sumaCol = () => {
    let suma = 0
    for (let i = 0; i < matrizCol.length; i++) {
        for (let j = 0; j < matrizCol[i].length; j++) {
            if (j === 0 || j === 4) {
                suma += matrizCol[i][j]
            }   
        }   
    }
    return suma
}
let resultadoSumaCol = sumaCol(matrizCol)
console.log(resultadoSumaCol);