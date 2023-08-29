//matriz cuadrada

function matrizCuadrada (matriz){
const filas = matriz.length
  for(let i = 0; i< filas; i++){
        if(matriz[i].length!==filas)
        {
            return false;
        }
    }
    return true;
}

const matriz1 = [
[4,5],[2,7,1],[8,10],
];

const matriz2 = [
    [4,5,5],[2,7,1],[8,10,5],
    ];
let resultado= matrizCuadrada(matriz2)

console.log(resultado)

resultado= matrizCuadrada(matriz1)

console.log(resultado)







