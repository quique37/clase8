const alumno = {
	nombre: "John Doe",
calificaciones: [7, 10, 9, 6]
}
let calificacionMaxima = 0 
for (let index = 0; index < alumno.calificaciones.length; index++){
    if (alumno.calificaciones[index] > calificacionMaxima)
    calificacionMaxima = alumno.calificaciones[index]
}
console.log(calificacionMaxima)
