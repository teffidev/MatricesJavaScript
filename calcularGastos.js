
// //MATRZI DE 4 x 7
// let gastos = [
//     [1135, 2500, 900, 1600, 2800, 3650, 1100],
//     [1750, 1890, 1900, 1300, 898, 1750, 2800],
//     [1700, 1150, 1690, 1900, 1770, 4500, 2560],
//     [800, 1250, 1430, 2100, 1980, 1270, 950],
// ];

// //Cuando tenmgamos que recorrer una FILA; esta es la sintaxis

// //CALCULAR GASTO TOTAL DE LA TERCER SEMANA:

// let totalSumaTres = 0
// for(let i = 0; i < gastos[2].length; i++){

//     totalSumaTres += gastos[2][i]

// }
// console.log(totalSumaTres);


//Queremos saber el Total de lo que se gasto er los días
//Jueves (Jueves = Posición 3 (Columna)) 

// let gastos = [
//     [1135, 2500, 900, 1600, 2800, 3650, 1100],
//     [1750, 1890, 1900, 1300, 898, 1750, 2800],
//     [1700, 1150, 1690, 1900, 1770, 4500, 2560],
//     [800, 1250, 1430, 2100, 1980, 1270, 950],
// ];

// let sumaJueves = 0

// for(let i = 0; i < gastos.length; i++){

//     sumaJueves += gastos[i][3]

// }
// console.log(sumaJueves);

//CALCULAR EL TOTAL GASTADO DEL MES=

// let gastos = [
//     [1135, 2500, 900, 1600, 2800, 3650, 1100],
//     [1750, 1890, 1900, 1300, 898, 1750, 2800],
//     [1700, 1150, 1690, 1900, 1770, 4500, 2560],
//     [800, 1250, 1430, 2100, 1980, 1270, 950],
// ];

// let totalMes = 0
// for(let i = 0; i < gastos.length; i++){
//     for(let j = 0; j < gastos[i].length; j++){
//         totalMes += gastos[i][j]
//     }

// }
// console.log(totalMes);


//CALCULAR EL GASTO TOTAL DE CADA SEMANA Y
//MOSTRARLO EN CONSOLA, CREAR UN ARRAY CON EL 
//TOTAL DE CADA SEMANA

let gastos = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950],
];

let arrGastosSemana = []
let gastoSemanal = 0

for(let i = 0; i < gastos.length; i++){

    for(let j = 0; j < gastos[i].length; j++){
        
        gastoSemanal += gastos[i][j]

    }
    arrGastosSemana.push(gastoSemanal) //Antes de pasar 
    gastoSemanal = 0 //al otro FOR= Lo pusheo y lo reseto
}
console.log(arrGastosSemana);

//CALCULAR CUAL FUE LA SEMANA EN QUE MAS SE GASTO!

let encontrarMayor = (num1, num2) => {
    // if(num1 > num2){
    //     return num1
    // }else{
    //    return num2
    // }
    return num1 > num2 ? num1 : num2;
};
