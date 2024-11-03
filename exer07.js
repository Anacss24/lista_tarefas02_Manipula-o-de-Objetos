/* Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço.

*/

let produtos = [
    {
        nome: 'Camiseta',
        preco: 100,
        desconto: 0
    },
    {
        nome: 'Tênis',
        preco: 500,
        desconto: 0
    },
    {
        nome: 'Calça',
        preco: 250,
        desconto: 0
    }
]

produtos.forEach(produto => {
    produto.desconto = produto.preco * 0.1;
    produto.preco = produto.preco - produto.desconto;

    console.log(`Produto: ${produto.nome}, Novo Preço: R$${produto.preco.toFixed(2)}`)
})