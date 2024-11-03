/* Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos.
 */

let vendas = [
    {
        produto: 'Bolsa',
        quantidade: 10,
        valor: 250
    },
    {
        produto: 'Sapato',
        quantidade: 20,
        valor: 170
    },
    {
        produto: 'Cinto',
        quantidade: 45,
        valor: 50
    },

]

let soma = 0

vendas.forEach(venda => {
    soma += venda.valor
})

console.log(`Valor total de vendas: ${soma}`)
