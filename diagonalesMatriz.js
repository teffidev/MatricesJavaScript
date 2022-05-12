
/*-------- DIAGONALES-------- */

let matriz = [
    [25, 11, 31],
    [9, 15, 27],
    [29, 11, 14]
];

//Diagonal Principal:

for (let i = 0; i < matriz.length; i++) {
    
    console.log(matriz[i][i]); //La fila es la misma que la columna
    
}

//Diagonal Secundaria:

for (let i = 0; i < matriz.length; i++) {
    
    matriz[i][matriz.length - (1 + i)]
    
}

//Diagonales juntas Principal y Secundaria:

for (let i = 0; i < matriz.length; i++) {
    matriz[i][i]
    matriz[i][matriz.length - (1 + i)]    
}