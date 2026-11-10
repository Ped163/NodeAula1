//decidindo a situaçao de um aluno

const nota1 = 6.0
const nota2 = 7.0
const media = (nota1 + nota2) / 2

//o que é estrutura de condição (condicionais if/ else, else if)

let situacao

if (media >= 7) {
    situacao = 'Aprovado'
}
else if (media >= 5) {
    situacao = "Recuperação"
}
else if(media <= 4){
    situacao = "Reprovado"
}

console.log(`Sua média foi ${media.toFixed(1)}.  Situação atual ${situacao}`)