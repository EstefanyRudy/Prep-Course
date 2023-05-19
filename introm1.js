/* De binario a decimal

"1 0 1 1"
 0 1 2 3 i
 3 2 1 0 b

1*2^3 = 8
0*2^2 = 0
1*2^1 = 2
1*2^0 = 1

suma  = 11 

*/

function BinarioaDecimal(num) {
    var suma = 0;
    for (var i=num.length-1; i>=0; i--) {
        suma = suma + (num[num.length-1-i]*Math.pow(2,i));
    }
    return suma;
}

function BiaDec(num) {
    var rev = num.split("").reverse();
    suma = 0;
    for (var i=0; i<num.length; i++) {
     suma = suma + rev[i]*Math.pow(2,i)
    }
    return suma;
}

function BinaDeci(num) {
    var rev = num.split("").reverse();
    suma = 0;
    rev.forEach((elemento,i)=>suma+=elemento*(2**i))
    return suma;
}

function BaD(num) {
    return parseInt(num,2);
}



/* De decimal a binario

14

14/2 ---> 7 | 0
7/2  ---> 3 | 1
3/2  ---> 1 | 1
1/2  ---> 0 | 1
"1110"

*/


function DecimalaBinario(num) {
    var bi = [];
    while (num/2!==0){
    bi.push(num%2);
    num = Math.floor(num/2);
    }
    return bi.reverse().join("");
}

function DeaBi(num) {
    str=""
    while(num>0) {
        str=(num%2) + str;
        num=Math.floor(num/2)
    }
    return str;
}

function DecaBin(num) {
    array = [];
    while(num>0) {
        array.unshift(num%2)
        num=Math.floor(num/2)
    }
    return array.join("");
}

function DecToBinAtajo(num) {
    return num.toString(2);
}

// JAVASCRIPT



x = 1;
var a = 5;
var b = 10;
var c = function(a,b,c){ // parametros
    // a = 8, b = 9, c = 10
    var x = 10;
    console.log(x); // 10 
    console.log(a); // a  = 8
    var f = function(a,b,c) { // parametros
          // a = 8, b=9, c=10
        b=a; // b=8
        console.log(b); // 8
        b=c; // b=10
        x = 5;
    }
    f(a,b,c);
     // a = 8, b = 9, c = 10
    console.log(b); // 9
}
c(8,9,10); // recien se asignan los valores= argumentos
console.log(b); // b=10
console.log(x); // x=1

// JAVASCRIPT
// function foo(){console.log("Hola!"); }
// bar

console.log(bar); // undefined
console.log(baz); //nan
foo(); // "Hola!"
function foo(){console.log("Hola!"); }
var bar = 1;  // como tiene "var", se va para arriba solo el el nombre
varbaz = 2; //baz recien existe a partir de esta linea

// JAVASCRIPT

var instructor ="Tony";
let pm ="Franco";
if(true){
    var instructor = "The flash";
    let pm = "Reverse flash";
    console.log(instructor); //  The flash
    console.log(pm); // Reverse flash
}
console.log(instructor); // The flash
console.log(pm); // Franco

// JAVASCRIPT
6/"3"
"2"*"3"

// CLOUSURE

function Cualquiernombre(nombre){
    let aux = "asdasdasdasd";
    let codigo = 2334;

    return function(){
        //closure
        console.log(nombre);
        console.log(codigo);
        console.log(aux);
    }
}

var caja = Cualquiernombre("her") // cuando se ejecuta se abre el contexto de ejecucion Cualquiernombre
var caja2 = Cualquiernombre("Camilo")
caja()
caja2()

/*
CONTEXTO DE EJECUCION Cualquiernombre {
    lexical environment
    codigo
    outer: global
    }

    [CLOSURE](TODO LO QUE HABIA EN EL CONTEXTO DEL PADRE)(VOY A TENER ACCESO PERO SOLO DESDE LA FUNCION CAJA)

        CONTEXTO DE EJECUCION caja
                       lexical environment
                        codigo
                        outer: Cualquiernombre
               

*/

// EJEMPLO

function saludar(saludo){
    return function(nombre){
    console.log(saludo + ' ' + nombre);
    }
}
var saludarHolaEs = saludar('Hola'); // Esto devuelve una función
var saludarHolaEn = saludar('Hi');  // Hola Toni

saludarHolaEs("Rudy")
saludarHolaEn("Rudy")

/*
CONTEXTO DE EJECUCION Saludar {
    lexical environment: 
    codigo
    outer: global
}
[CLOSURE]: saludo
*/

// HOMEWORK

function counter () {
    contador = 0;
    return function(){
        // contador++
        // contador = contador + 1
        // ++contador
        contador+=1;
        return contador;
    }
}

const nuevoContador = counter();
console.log(nuevoContador())
console.log(nuevoContador())
console.log(nuevoContador())

// EJERCICIO 2

function cacheFunction(cb){

    var objeto = {};
    return function(arg){
        if (objeto.hasOwnProperty(arg)) {
            return objeto[arg];
        } else { 
        objeto[arg] = cb(arg);
        return objeto[arg];
        }
    }
}

var cuadrado = cacheFunction(function(a){
    return a*a
})

cuadrado(3)


// EJERCICIO BIND

var instructor = {
    nombre:"Franco",
    edad: 25,
};

var alumno = {
    nombre: "Juan",
    curso: "FullStack",
};

function getNombre() {
    return this.nombre;
}

let getNombreInstructor = getNombre.bind(instructor);
let getNombreAlumno= getNombre.bind(alumno);

getNombreInstructor();
getNombreAlumno();

// EJERCICIO BIND

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
    return delimitadorIzquierda + cadena + delimitadorDerecha;
}


let textAsteriscos = crearCadena.bind(this,"*","*");
let textoGuiones = crearCadena.bind(this,"-","-");
let textoUnderscore = crearCadena.bind(this,"_","_");
console.log(textAsteriscos("Henry"));
console.log(textoGuiones("Henry"));
console.log(textoUnderscore("Henry"));

// TEMA: RECURSIVIDAD

function factorial(x) {
    if(x>-1 && x<2) return 1;
    else if(x<0) return 0;
    return x*factorial(x-1);
}

factorial(5)

/*

fn 5!{
    espera el resultado: 5*4!
    fn 4!{
        espera el resultado: 4*3!
        fn 3!{
            espera el resultado:3*2!
            fn 2!{
                espera el resultado:2*1!
                fn 1! {
                    return 1
                }

            }
        }
    }
}

Estas funciones siempre tienen una condicion para cortar
*/

// EJEMPLO

function Algo(num){
    console.log("entré")
    if(num===1) return "llegué"

    return Algo(num-1)
}


Algo(4)

/*
Algo 4 {
    "entré"
    Algo 3 {
        "entré"
        Algo 2 {
            "entré"
                Algo 1 {
                   "entré"
                   "llegué"
                }
        }

    }
}
*/

//HOMEWORK

function nFactorial(n){
    if(n<2 && n>-1) {
        return 1
    } else if (n<0) {
        return 0
    } else {
        return n*nFactorial(n-1)
    }
}

function nFibonacci(n){
    arr = [0,1]
    if(n<2) return arr[n];
    else {
        for (var i=2; i<n; i++) {
            arr.push(arr[i-1] + arr[i-2]);
        }
        return arr[n];
    }
}

function nFibonacci(n){
    if (n===0) return 0;
    else if(n==1) return nFibonacci(0) + 1;
    else {
        return nFibonacci(n-1) + nFibonacci(n-2);
    }
}

function nFibonacci(n){
    if (n<0) return "Error";
    if(n<2) return n;
    return nFibonacci(n-1) + nFibonacci(n-2);
}

/*
fb 5{
    espera el resultado: fb 4 + fb 3
    fb 4{
        espera el resultado: fb 3 + fb 2
        fb 3{
            espera el resultado: fb 2 + fb 1
            fb 2 {
                espera el resultado: fb 1 + fb 0
                fb 1 {
                    espera el resultado: fb 0 + 1
                    fb 0! {
                        return 0
                }

            }
        }
    }
}
*/

class Queue {
    constructor() {
        var array = [];
        enqueue = function (x) {
            array.push(x);
            return array;
        };
        dequeue = function (x) {
            if (array.length === 0) {
                return undefined;
            } else {
                array.shift(x);
            };
            return array;
        };
        size = function () { return array.length; };
    }
    enqueue(valor) {
        this.cola.push(valor);
        //this.size++
    }
    dequeue() {
        return this.cola.shift;
        //this.size--
    }
    size() {
        return this.cola.length;
        //return this.size
    }
}


// SOLUCION 1

class Queue {
    constructor() {
        this.cola = [];
        //this.size = 0
    }
    enqueue(valor) {
        this.cola.push(valor);
        //this.size++
    }
    dequeue() {
        return this.cola.shift;
        //this.size--
    }
    size() {
        return this.cola.length;
        //return this.size
    }
}




const fila = new Queue ();
fila.enqueue(5)
fila.enqueue(3)
fila.enqueue("Holi")
console.log(fila.size())
console.log(fila.dequeue())
console.log(fila.enqueue(1))
console.log(fila)

// SOLUCION 2

function Queue(){
    this.cola = []
    //this.size = 0
}

// SOLUCION 3

class Stack {
    constructor(){
        this.stack = [];
    }
    enqueue(valor) {
        this.stack.unshift(valor);
        //this.size++
    }
    dequeue() {
        return this.stack.shift;
        //this.size--
    }
    size() {
        return this.stack.length;
        //return this.size
    }

}


/*
function Stack(){
    var array = [];
    enqueue = function (x) {
        array.unshift(x);
        return array;
    }
    dequeue = function (x) {
        if(array.length===0){
            return undefined;
        } else {
        array.shift(x)};
        return array;
    }
    size = function() {return array.length};
}
*/

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
        console.log(Current.data);
        current = current.next;
    }
    return;
};



var listita = new List()
console.log(listita)

listita.add(5)
//listita.add("Her")
//listita.add("PEPE")
//listita.add(true)
//listita.add(["asd",(asd)=> console.log(asd)])
console.log(listita)

listita.getAll()