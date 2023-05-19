var song = document.querySelector("#background");
song.addEventListener("click", function(){
    console.log("se hizo click");
})

let boton = document.querySelector("#add")

function agregarmascota(){
    console.log("buscando informacion")
    setTimeout(function(){
        console.log("informacion encontrada")
    },5000);

    var inputText = document.querySelector("#input")
    console.log(inputText.value);
    var listama = document.querySelector("ul");
    var nuevamascota = document.createElement("li");
    nuevamascota.innerText = inputText.value || "chapo";
    listama.appendChild(nuevamascota);
    inputText.value=""
}
boton.addEventListener("click", agregarmascota);

// Escuchador para el input
// let input = document.querySelector("#input");
// input.addEventListener("change",function(evento){
//     console.log(evento.target.value);
// })