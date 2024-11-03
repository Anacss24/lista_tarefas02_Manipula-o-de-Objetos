/* Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos. */

let clientes = [
    
    {
        nome: 'Hugo',
        idade: 35,
        cidade: 'Bahia'
    },

    {
        nome: 'Arhur',
        idade: 32,
        cidade: 'São Paulo'
    },

    {
        nome: 'Arhur',
        idade: 20,
        cidade: 'São Paulo'
    }

]

let contador = 0

clientes.forEach(cliente => {
    if (cliente.idade > 30){
        contador++
    }
})

console.log(`Quantidade de clientes com mais de 30 anos: ${contador}`)