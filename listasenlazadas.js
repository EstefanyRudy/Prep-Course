// ESTRUCTURA DE DATOS 2. LISTAS ENLAZADAS

function Node(data){
    this.data = data;
    this.next = null;
}

function List(){
    this._length = 0;
    this.head = null;
}

List.prototype.add = function(data){
    var node = new Node(data)
    var current = this.head
    //si esta vacía
    if(!current) {
        this.head = node;
        this._length++;
        return node;
    }
    // si no esta vacío, recorro hasta encontrar el último
    while(current.next){
        current=current.next
    }
    current.next = node
    this._length++;
    return node;
}

List.prototype.getAll = function (){
    current = this.head;
    if(!current){
        console.log("La lista esta vacía");
        return;
    }
    while(current){
        console.log(current.data);
        current = current.next;
    }
    return;
};



var listita = new List()
console.log(listita)

listita.add(5)
console.log(listita)
listita.add("Her")
listita.add("PEPE")
listita.add(true)
//listita.add(["asd","hi",(asd)=>{console.log(asd)}])
console.log(listita)

listita.getAll()

// ESTRUCTURA DE DATOS 2. LISTAS DOBLEMENTE ENLAZADAS

function Node(data){
    this.previous = null;
    this.data = data;
    this.next = null;
}

// ESTRUCTURA DE DATOS 2. HASH TABLE
/*
function Hashtable() {
    this.buckets = []
}

Hashtable.prototype.hash = function (key){
    let sum = 0
    for (let i = 0; i<key.length; i++) {
        sum+=key.charCodeAt(i);
    }
    return sum%this.numBuckets;
}
*/
//const tabla = new Hashtable()
//console.log(tabla.hash("pepe"))
//console.log(tabla.hash("epep"))


// HOMEWORK

function Nodo (dato) {
    this.dato = dato
    this.next = null
}

function LinkedList (){
    this._length = 0
    this.head =null
}


LinkedList.prototype.add = function (a) {
    elemento = new Nodo(a),
    actual = this.head
    if(!actual) {
        this.head = elemento;
        this._length++;
        return elemento;
    }

    while(actual.next){
        actual = actual.next
    }
    actual.next = elemento
    this._length++;
    return elemento;
}

LinkedList.prototype.remove = function () {
    actual = this.head
    if(!actual) return "La lista esta vacía";
    if(!this.head.next) {
        var caja = this.head;
        this.head = null;
        return caja.dato;
    }
    while(actual.next.next) {
        actual = actual.next
    }
    var aux = actual.next.dato;
    actual.next = null;
    return aux;
}
LinkedList.prototype.search = function (x) {
    //valor ----> actual.value  = x
    //Callback ----> Callback(actual.value) = True
    actual = this.head;
    var callback;
    if(!actual) return null;
    if(typeof x !=="function"){
        callback = function(input){
            return input === x;
        }
    } else {
        callback = x;    
    }
    while(actual){
        if(callback(actual.dato)) {
            return actual.dato;
        } else {
            actual = actual.next;
        }
    }
    return null;
}

var lista = new LinkedList()
lista.add("Henry");
lista.add("hey");
lista.add(5);
lista.add(8);
lista.add(9);
lista.add(10);
lista.search(function(m){
    if(m%2===0){
        return true;
    }
    return false;
});

lista.remove();

//HASTABLE

function HashTable () {
    bucket = [];
    this.numbuckets = 35;
}

HashTable.prototype.hash = function (input){
    suma = 0;
    for(var i=0; i<input.length; i++) {
        suma= suma + charCodeAt(i);
    }
    suma%this.numbuckets;
}

HashTable.prototype.set = function (clave,valor){
    if(typeof clave !== "string") throw new Error("debe ser un string")
    ob = {
        key:clave,
        value:valor,
    }
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

var tabla = new HashTable;
tabla.set("instructora","Rudy")
tabla.get("instructora")