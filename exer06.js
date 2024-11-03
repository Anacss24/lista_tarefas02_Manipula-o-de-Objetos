/* : Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico.

*/

let funcionarios = [
    {
        nome: 'José',
        cargo: 'Gerente',
        salario: 5000
    },
    {
        nome: 'Maria',
        cargo: 'Analista de Sistemas',
        salario: 20000
    },

    {
        nome: 'Joaquim',
        cargo: 'Atendente',
        salario: 2000
    }
]

for (let funcionario of funcionarios) {
    if (funcionario.salario > 4000) {
        console.log(`Funcionários cujo o salário é maior de 4000 ${funcionario.nome}`)
    }
}