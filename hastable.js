function HashTable () {
    this.bucket = [];
    this.numbuckets = 35;
}

HashTable.prototype.hash = function (input){
    suma = 0;
    for(var i=0; i<input.length; i++) {
        suma= suma + input.charCodeAt(i);
    }
    suma%this.numbuckets;
}

HashTable.prototype.set = function (clave,valor){
    if(typeof clave !== "string") throw new TypeError("debe ser un string")
    ob = {
        key:clave,
        value:valor,
    };
    var posicion = this.hash(ob.key);
    //manejando las colisiones-->convertimos cada bucket en un arreglo
    this.bucket[posicion] = this.bucket[posicion]  || []
    this.bucket[posicion].push(ob);
}

HashTable.prototype.get = function(clave){
    var casilla = this.bucket[this.hash(clave)];
    for(var i=0; i<casilla.length; i++) {
        if(casilla[i].key === clave) {
            return casilla[i].value;
            }
        return false;
    }
}

HashTable.prototype.haskey = function (clave) {
    if (this.get(clave) !== false) return true;
    else return false;
}   

var tabla = new HashTable;
tabla.set("instructora","rudy")
tabla.get("instructora")
console.log(tabla.haskey("instructora"));
