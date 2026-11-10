// const numeros = {
//     num1: 12,
//     num2: 8,
//     num3: 3,
//     num4: 10,
//     num5: 2
// }

// function somar(n1, n2) {
//     return (n1 + n2)
// }


// const somaFinal = somar(numeros.num1, numeros.num2)
// console.log(`A soma dos expoentes é ${somaFinal}`)
// //--------------------------------------------------------

// function multi(n1, n2) {
//     return (n1 + n2)
// }

// const multiFinal = multi(`${somaFinal}* numeros.num3)
// console.log(multiFinal)

function somar(a, b) { return a + b }
function subtrair(a, b) { return a - b }
function multiplicar(a, b) { return a * b }
function dividir(a, b) { return a / b }

//(12+8)*3-10/2

const respSoma = somar(12,8)
console.log(respSoma)
const respMulti = multiplicar(respSoma,3)
console.log(respMulti)
const respDiv = dividir(10,2)
const respFinal = subtrair(respMulti,respDiv)
console.log(respFinal)