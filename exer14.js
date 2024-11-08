/*Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence. */

let empresa = {
    departamentos: [
        {
            nome: "Recursos Humanos",
            funcionarios: ["Alice", "Bruno", "Carlos"]
        },
        {
            nome: "Tecnologia",
            funcionarios: ["Diana", "Eduardo", "Fátima"]
        },
        {
            nome: "Marketing",
            funcionarios: ["Gabriel", "Helena", "Isabela"]
        }
    ]
};


for (let i in empresa.departamentos) {
    
    let departamento = empresa.departamentos[i].nome;

    for (let funcionario of empresa.departamentos[i].funcionarios) {
        console.log(`Funcionário: ${funcionario}, Departamento: ${departamento}`);
    }
}

