let matriz = [
    [2, 6, 7, 1, 3], // FILAAAAAAAAA
    [6, 1, 8, 12, 7], // FILAAAAAAAAA
    [7, 43, 12, 76, 12], // FILAAAAAAAAA
    [7, 12, 41, 13, 1], // FILAAAAAAAAA
    [5, 4, 32, 13, 3], // FILAAAAAAAAA
];
console.table(matriz);

//Sumar todos los Impares de la matriz=

let sumaImpares = 0
for (let fila = 0; fila < matriz.length; fila++) {

    for (let Col = 0; Col < matriz[fila].length; Col++) {
        
        if(matriz[fila][Col] % 2 !== 0){            
            sumaImpares += matriz[fila][Col]
        }        
    }    
}
console.log('La suma de los numeros impares es:', sumaImpares);