const user = {
    nome: "Jhonata Lopes",
    idade: 14
}

const listaProdutos = [
    {
        nome: "Nescau",
        maiorDeIdade: false
    },
    {
        nome: "Cachaça",
        maiorDeIdade: true
    },
    {
        nome: "Suco",
        maiorDeIdade: false
    },
    {
        nome: "Skol",
        maiorDeIdade: true
    }
]

if(user.idade >= 18){
    console.log(listaProdutos)
}else {
    const produtosPermitidos = listaProdutos.filter(
        produto => produto.maiorDeIdade === false
    )

    console.log(produtosPermitidos)
}