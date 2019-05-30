const jugador = {
	nombre: "John Doe",
	partidas: [true, false, true, true]
}
let partidasGanadas = 0
for (let index = 0; index < jugador.partidas.length; index++){
    if (jugador.partidas[index]) {
        partidasGanadas++
    }
}
console.log(partidasGanadas)
