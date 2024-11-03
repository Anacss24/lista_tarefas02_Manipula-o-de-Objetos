/* Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho. */ 

// Objeto carrinho com uma propriedade itens
let carrinho = {
    itens: [
        { nome: "Camisa", quantidade: 2, precoUnitario: 50 },
        { nome: "Calça", quantidade: 1, precoUnitario: 80 },
        { nome: "Tênis", quantidade: 1, precoUnitario: 120 },
        { nome: "Boné", quantidade: 3, precoUnitario: 20 }
    ]
};


let valorTotal = 0;


carrinho.itens.forEach(item => {
    valorTotal += item.quantidade * item.precoUnitario;
});


console.log("Valor total do carrinho: R$" + valorTotal.toFixed(2));