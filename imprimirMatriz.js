/*Declara una variable que contenga una matriz
de 5x5 llena de números enteros y positivos*/

let matriz = [
    [12, 6, 7, 21, 3], 
    [4, 11, 8, 12, 7], 
    [9, 4, 12, 56, 12], 
    [8, 12, 24, 13, 1], 
    [2, 4, 23, 18, 60], 
];

/*Luego, escribe un algoritmo que recorra e imprima
los valores uno por uno.*/

let mostrarMatriz = () => {
    for(let i = 0; i < matriz.length; i++){    
        for(let j = 0; j < matriz[i].length; j++){
            matriz[i][j]    
        }        
    }
    return matriz
}
let resultado = mostrarMatriz(matriz)
console.table(resultado);