let nombreAlumno = prompt("Ingrese el nombre del alumno:");
let materia = prompt("Ingrese la materia:");
let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

// Obtener el elemento donde mostrar el mensaje
let mensajeElement = document.getElementById("mensaje");

// Verificar rango de notas
if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10 && nota3 >= 0 && nota3 <= 10) {
   // Calcular el promedio
   let promedio = (nota1 + nota2 + nota3) / 3;

   // Evaluar el promedio y mostrar el mensaje correspondiente
   if (promedio >= 7) {
      mensajeElement.innerHTML = `${nombreAlumno}, ¡felicidades! Has aprobado la materia de ${materia} con un promedio de ${promedio.toFixed(2)}.`;
   } else {
      mensajeElement.innerHTML = `${nombreAlumno}, gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es ${promedio.toFixed(2)}.`;
   }
} else {
   mensajeElement.innerHTML = "Error: Las notas deben estar en el rango de 0 a 10.";
}