function quickSort(array) {
    // elegir el pivote
    //recorrer cada elemento y compararlo con el pivote para ver si es mayor o menos
    // si es mayor colocarlo a la derecha en un nuevo arreglo
    // si es menor colocarlo a  la izquierda en un nuevo arreglo
    //si es igual al pivote puede colocarse en izquierda o derecha
    //guardar la posicion en la que quedo el pivote
    //aplicar recursion en cada uno de los dos arreglos creados tras la separación mientras tengan mas de un elemento
    if(array.length<=1) return array;
    var pivote = array[0];
    var der = [];
    var izq = [];
    var ordenado = [];
    for(var i = 0; i<array.length; i++) {
        if(array[i]<pivote) izq.push(array[i]);
        else if(array[i]>pivote) der.push(array[i]);
        else ordenado.push(array[i]);
    }
    return quickSort(izq).concat(ordenado).concat(quickSort(der));
}

console.log(quickSort([5,9,1,7,3]));

function mergeSort(array){
    if(array.length<=1) return array;
    var division = dividir(array);
    var left = division[1];
    var right = division[0];
    return mezcla(mergeSort(left), mergeSort(right));
  
    function mezcla(izquierda, derecha){
        iIzquierda = 0;
        iDerecha = 0;
        ordenado = [];
        while(iIzquierda<izquierda.length && iDerecha<derecha.length){
            if(izquierda[iIzquierda]>derecha[iDerecha]){
                ordenado.push(derecha[iDerecha]);
                iDerecha++;
            } else {
                ordenado.push(izquierda[iIzquierda]);
                iIzquierda++;
            }
        }
        return ordenado.concat(izquierda.slice(iIzquierda)).concat(derecha.slice(iDerecha));
    }
    
    function dividir(array){
    var medio = Math.floor(array.length/2);
    var izquierda = array.slice(0,medio);
    var derecha = array.slice(medio);
    return [izquierda,derecha]
  }
}