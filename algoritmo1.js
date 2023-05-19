function factorear(num){
    var arreglo = [1];
    var divisor = 2;
    while(num>1){
        if(num%divisor===0){
            arreglo.push(divisor);
            num = num/divisor;
        }else{
            divisor=divisor+1;
        }
    }
    return arreglo;
}
/*
si num tiene divisor que da resto 0, pushear el divisor y aplicarle recursividad al cociente
si num no se puede dividir, pasar al siguiente

var arreglo = [1];
    var cociente;
    for(var i = 2; i<num; i++) {
        if(num%i===0){
            arreglo.push(i);
            cociente = num/i
            break;
        }
    }
    factorear(cociente);
    return arreglo;

*/
function bubbleSort(array) {
 var hayacambio = true;
 while(hayacambio) {
    hayacambio = false;
    for(var i=0; i<array.length-1; i++){
        if(array[i]>array[i+1]){ // [4,1]
            var aux = array[i];
            array[i] = array[i+1];// [1,1]
            array[i+1] = aux;//
            hayacambio = true;
        };
    }
 }
 return array;
}

/*
comparar el primero con el segundo y quedarme con el numero mayor
si el primero es mayor, intercambiar sitio con el segundo
*/
function insertionSort(array){
    for(var i = 1; i<array.length; i++){
        var auxiliar = array[i];
        var x = i-1;
        while(x>=0 && auxiliar<array[x]) {
            array[x+1] = array[x];
            x=x-1;
        }
        array[x+1] = auxiliar;
    }
return array;
}
/*
comparar el segundo con el primero y todos los que le siguen hasta
encontrar el número más chico

  var hayacambio = true;
    while(hayacambio) {
    hayacambio = false;
    for(var i = array.length-1; i>0;i--){
        if(array[i]<array[i-1]) { 
            var aux = array[i] 
            array[i] = array[i-1]; 
            array[i-1] = aux; 
        }
    }
  }
  return array;
*/
function selectionSort(array){
    for (var i = 0; i<array.length; i++){
        var menor=i; //0
        for (var j = i+1; j<array.length; j++) {
            if(array[menor]>array[j]){
                menor = j; // 1
            }
        }
    if(menor!==i){
        var aux = array[i];
        array[i] = array[menor];
        array[menor] = aux;

    }
    }
return array;  
// [5,2,4,9,1]
//  i
//    j
}
console.log(selectionSort([5,2,4,9,1]))

