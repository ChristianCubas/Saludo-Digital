function saludar(){
    alert("Hola"+" "+casilla.value+" "+"bienvenid@ a saludo digital");
}

let accion = document.getElementById("buton");
accion.addEventListener("click",saludar);
let casilla = document.getElementById("texto");