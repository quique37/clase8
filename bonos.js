const persona = {
	nombre: "John Doe",
    bonos: [100, 500, 1300]
}
let totalbonos = 0
for(let index = 0; index < persona.bonos.length; index++){
    totalbonos += persona.bonos[index]
}
console.log(totalbonos)
