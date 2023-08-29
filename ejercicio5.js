/*
*obtener fila mas larga
*/

function obtenerFilaLarga(matriz)
{
    let filaLarga = matriz[0]
    for(let i=0;i<matriz.length;i++)
    {
        if(matriz[i].length>filaLarga.length)
        {
            filaLarga = matriz[i]
        }
    }
    return filaLarga
}

const matr1 = [[1,4],[1,4,5],[1]]
const filaLarga1 = obtenerFilaLarga(matr1)
console.log(filaLarga1)