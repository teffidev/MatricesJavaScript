let matrix = [
    [2, 6, 7, 1, 3], // FILAAAAAAAAA
    [6, 1, 8, 12, 7], // FILAAAAAAAAA
    [7, 43, 12, 76, 12], // FILAAAAAAAAA
    [7, 12, 41, 13, 1], // FILAAAAAAAAA
    [5, 4, 32, 13, 3], // FILAAAAAAAAA
];
console.table(matrix);

/*SUMAR toda los números de la matriz 
(Array de arrays), llamada MATRIX*/

let sumaTodos = 0
for(let fila = 0; fila < matrix.length; fila++){

    for(let col = 0; col < matrix[fila].length; col++){
        sumaTodos += matrix[fila][col]
    }
}
console.log('La suma de toda la matriz es:', sumaTodos);