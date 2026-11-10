// const aluno1 = {
//     nome:"Melissa Desleal",
//     prova1: 3,
//     prova2: 2,
//     trabalho: 4
// }
// const aluno2 = {
//     nome:"Mika",
//     prova1: 6,
//     prova2: 5,
//     trabalho: 5
// }
// const aluno3 = {
//     nome:"João vini.jr",
//     prova1: 7,
//     prova2: 8,
//     trabalho: 9
// }

// function media(n1,n2,n3){
//     return(n1+n2+n3) / 3
// }

// let situacao

// if(media >=7){
//     situacao = "Aprovado"
// } else if(media >= 5){
//     situacao = "Recuperação"
// } else if(media <= 4){
//     situacao = "Reprovado"
// }

// const mediaFinal = media(aluno1.prova1, aluno1.prova2, aluno1.trabalho)

// console.log(`${aluno1.nome} sua média final foi ${mediaFinal}. Sua situação de aprovação é de ${situacao}`)

function media3(n1, n2, n3) {
    return (n1 + n2 + n3) / 3
}

function situacao(media) {
    if (media >= 7) return "Aprovado";
    if (media >= 5) return "Recuperação"
    return "Reprovado"
}

const alunos = [
    { nome: "Bruno", p1: 7, p2: 8, p3: 9 },
    { nome: "Julio", p1: 2, p2: 1, p3: 3 },
    { nome: "Fernandinho", p1: 10, p2: 7, p3: 6 },
]

for (let i = 0; i < alunos.length; i++) {
    const m = media3(alunos[i].p1, alunos[i].p2, alunos[i].p3);
    console.log(`${alunos[i].nome} - média ${m.toFixed(1)} - ${situacao(m)}`)
}