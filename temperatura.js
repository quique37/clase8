const temperaturas = [
    19, 24, 25, 30, 10, 15, 45
    ]
let temperaturaMaxima = 0
for (let index= 0; index < temperaturas.length; index++){
    if (temperaturas[index] > temperaturaMaxima)
    temperaturaMaxima = temperaturas[index]
}
console.log(temperaturaMaxima)
