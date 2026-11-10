//media-nots.js - calculando a média de um aluno 

//Um objeto guarda dados relacionados sobre uma coisa (aqui, o aluno)
const aluno = {
    nome: "Ana Paula",
    nota1: 7.5,
    nota2: 8.0
}

// A função soma duas notas e dovolve a média
function media(n1,n2){
    return(n1+n2)/2 

    
}

const mediaFinal = media(aluno.nota1, aluno.nota2)

console.log(`A media de suas notas é ${mediaFinal}`)

console.log(`${aluno.nome} a sua media de notas é ${mediaFinal.toFixed(1)}`)
