var countArray = function (array) {
var suma = 0;
for(var i = 0; i<array.length; i++) {
    if(Array.isArray(array[i])===true) {
        suma= suma + countArray(array[i])
    } else {
        suma = suma + array[i];
    }
}
return suma;
}

var countProps = function (obj){
    contador = 0;
    for(let prop in obj) {
        contador+=1;
        if(typeof obj[prop] === "object"){
            if(!Array.isArray(obj[prop])) {
                contador+= countProps(obj[prop]);
            }
        }
    }
    return contador;
}

function LinkedList (){
    this._length = 0
    this.head =null
}

LinkedList.prototype.changeNotNumbers = function () {
    var contador = 0;
    var current = this.head;
    while(current) {
        if(isNaN(Number(current.value))) {
            contador++;
            current.value = "Kiricocho";
        }
        current=current.next;
    }
    return contador;
}


// SOLUCION 1
var mergeQueues = function(queueOne,queueTwo) {
    var newqueue = new Lista;
    var current1 = queueOne.head;
    var current2 = queueTwo.head;
    if(!current1 && !current2) {
        return newqueue;
    }
    while(current1 && current2) {
        newqueue.add(current1.dato);
        newqueue.add(current2.dato);
        current1 =  current1.next;
        current2 =  current2.next;
    }
    if(current1) {
        newqueue.add(current1.dato);
        current1 =  current1.next;
    }
    if(current2) {
        newqueue.add(current2.dato);
        current2 =  current2.next;
    }
    return newqueue;
}

function Nodo (dato) {
    this.dato = dato;
    this.next = null;
}

function Lista () {
    this.head = null;
    this.length = 0;
}

Lista.prototype.add = function (dato){
    var nuevo = new Nodo(dato);
    var current = this.head;
    if(!current){
        this.head = nuevo;
        this.length++;
        return nuevo;
    }
    while(current.next){
        current = current.next;
    }
    current.next = nuevo;
    this.length++;
    return nuevo;
}


// SOLUCION 2

function Queue() {
    this.array = [];
}

Queue.prototype.enqueue = function (valor) {
    return this.array.push(valor);
};

Queue.prototype.dequeue = function () {
    return this.array.shift();
};

Queue.prototype.size = function (){
    return this.array.length;
};

var mergeQueues = function(queueOne,queueTwo) {
    var nuevacola = new Queue();
    while(queueOne.size() || queueTwo.size()) {
        var primero = queueOne.dequeue();
        var segundo = queueTwo.dequeue();
        if(primero) nuevacola.enqueue(primero);
        if(segundo) nuevacola.enqueue(segundo);
    }
    return nuevacola;
}


var closureMult = function(multiplier) {
    return function(num) {
        return num*multiplier;
    }
}

function BinarySearchTree (valor) {
    this.valor = valor
    this.right = null
    this.left = null
}

BinarySearchTree.prototype.sum = function () {
    var suma = 0;
    if(!this.right && !this.length) return this.valor;
    if(!this.right && this.length) return this.valor + this.length.sum();
    if(this.right && !this.length) return this.valor + this.right.sum();
    if(this.right && this.length) return this.valor + this.right.sum() + this.right,length()
}

var multByFour= closureMult(4)
console.log(multByFour(5))
console.log(multByFour(8))

var arreglo = [5,[5,2,10],7,8];
console.log(countArray(arreglo));
var objeto = {a:5,b:8,c:{g:2,k:5,l:98}}

console.log(countProps(objeto));

var lista1 = new Queue;
lista1.enqueue(7);
lista1.enqueue(3);
lista1.enqueue(5);
var lista2 = new Queue;
lista2.enqueue(2);
lista2.enqueue(4);
lista2.enqueue(6);
var listamezaclada = mergeQueues(lista1,lista2)
console.log(listamezaclada)



