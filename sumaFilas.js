/*Crear una función que nos retorne la suma de la
quinta y sexta fila.*/

const matrizFila = [
    [70, 6, 7, 1, 30],      //Fila 0
    [60, 1, 8, 12, 40],     //Fila 1
    [10, 43, 12, 76, 90],   //Fila 2
    [10, 12, 41, 13, 90],   //Fila 3
    [50, 4, 30, 10, 50],    //Fila 4
    [45, 56, 8, 7, 3,],     //Fila 5--
    [9, 6, 4, 7, 23],       //Fila 6--
    [1, 3, 12, 67, 89],     //Fila 7
    [6, 11, 58, 21, 34],    //Fila 8
];

const sumaFilas = () => {
    let suma = 0
    for (let i = 0; i < matrizFila.length; i++) {
        for (let j = 0; j < matrizFila[i].length; j++) {
            if (i === 5 || i === 6) {
                suma += matrizFila[i][j]
            }   
        }   
    }
    return suma
}
let resultadoSumaFilas = sumaFilas()
console.log(resultadoSumaFilas);