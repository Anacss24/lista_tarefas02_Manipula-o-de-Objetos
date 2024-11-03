/*  Crie um array de objetos alunos, cada um com propriedades
nome, nota1, e nota2. Use for of para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média.

*/

let alunos = [
    {
        nome: 'João',
        nota1: 5,
        nota2: 7

    },
    {
        nome: 'Juliana',
        nota1: 10,
        nota2: 9

    },
    {
        nome: 'Joana',
        nota1: 4,
        nota2: 5

    },
]

for (let aluno of alunos) {
   let media = (aluno.nota1 + aluno.nota2) / 2
    console.log(`A média do aluno ${aluno.nome} foi ${media}`)
}