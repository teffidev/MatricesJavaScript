/*CREAR UNA MATRIZ DE 3 x 3*/

let matriz = [
    [25, 11, 31],
    [9, 15, 27],
    [29, 11, 14]
];

//Recorremos una COLUMNA
for (let i = 0; i < matriz.length; i++) {
    console.log('-----Recorremos una columna------');
    console.log(matriz[i][1]);
}

//Recorremos una FILA
for (let i = 0; i < matriz[2].length; i++) {
    console.log('-----Recorremos una fila------');
    console.log(matriz[2][i]);   
}

//Si tuviera que recorrer toda la matriz:
for (let i = 0; i < matriz.length; i++) { //Recorre Columnas
    
    for (let j = 0; j < matriz.length; j++) { //Recorre Filas
        console.log('-----Recorremos toda la matriz------');
        console.table(matriz[i][j]);        
    }    
}