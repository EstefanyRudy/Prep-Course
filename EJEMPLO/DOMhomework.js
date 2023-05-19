var toDoItems = [];

/*
Para seleccionar un tag con "QUERYSELECTOR" por su ID: 
El query selector nos devuelve el nodo del arbol del DOM, para ello
tenemos que guardar ese nodo en una variable para despues poder modificarlo.
¿COMO SE ACCEDIA A TODO LO QUE OFRECE EL NAVEGADOR PARA PODER BUSCARLO? 
con "document"

*/

var autor = document.querySelector("#created by") 
autor.innerHTML+= "Rudycita"
//var autor = document.querySelector("#created by").innerHTML+= "Rudycita"

//#n === selecciona un tag por su ID (un solo tag porque el id es unico)
//.n === selecciona tags por su clase (puede incluir varias)
// n === selecciona el primer tag que coincida con lo que le pases (ej. "h1")

function ToDo(description){
    this.description = description;
    this.complete = false;
}


// new ToDo("algo") === {description:algo, complete:false}

ToDo.prototype.completeToDo = function(){
    this.complete = !this.complete;
}

// para crear un elemento ponemos: document.createElement("div")
//si necesitamos setear la clase a un tag, simplemente accedemos a su classname y
//le vamos a decir que sea el que nosotros queremos

//Element.setAttribute(nombre,valor): establece el valor de un atributo en
//el elemento especificado

//appendChild(): este metodo inserta el elemento como un nodo hijo al final
//de todos los elementos hijos que existan

function buildToDo(todo, index) {
    var toDoShell = document.createElement("div");
    toDoShell.className = "toDoShell";
    var toDoText = document.createElement("span");
    toDoText.innerHTML = todo.description;
    toDoText.id = index;
    if(todo.complete) toDoText.className = "completeText"
    toDoShell.appendChild(toDoText);
    toDoText.addEventListener("click",completeToDo);
    return toDoShell;
}

function buildToDos(toDos){
    return toDos.map(buildToDo);
}

function displayToDos() {
    toDoContainer = document.querySelector("#toDoContainer");
    toDoContainer.innerHTML = "";
    buildToDos(toDoItems);
    buildToDos(toDoItems).foreach(e => toDoContainer.appendChild(e))
    // buildToDos(toDoItems).foreach(function(elemento){
    // toDoContainer.appendChild(e);
    // })
}

function addToDo () {
    
    var toDoInput= document.querySelector("#toDoInput");

    var actividad = new ToDo(toDoInput.value);
    if(toDoInput.value) {
        toDoItems.push(actividad);
        toDoInput.value = "";
    } else {
        alert("debe ingresar al menos un caracter")
    }
    
    displayToDos();
}


var boton = document.getElementById("addButton");
boton.addEventListener("click",addToDo);

function completeToDo(event) {
    const index = event.target.id;
    // event: click
    // event.target : span
    // event.target.id : index de BuiltToDo o index del span
    toDoItems[index].completeToDo();
    displayToDos();
}

displayToDos()

//event.key === enter // event.key === 13
