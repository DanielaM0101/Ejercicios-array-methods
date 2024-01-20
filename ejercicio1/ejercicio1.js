'use strict'

//Ingresar un nombre con prompt y verificar si el nombre ingresado se encuentra en el
//vector

let students = ["Juan", "Jose", "Pedro", "Maria", "Alejandra"];
let nombre = prompt("Ingrese un nombre");

if (students.includes(nombre)) {
    alert("Si se enuentra");
} else {
    alert("No se encuentra")
}



