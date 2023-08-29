function matrizEscalonada(filas){
    const matriz = []
    for(let i = 1; i<filas; i++)
    {
        const fila = new Array(i).fill(0)
        matriz.push(fila)
        console.log(fila)
    }
    return matriz
}

const matriz = matrizEscalonada(5)

console.log(matriz)