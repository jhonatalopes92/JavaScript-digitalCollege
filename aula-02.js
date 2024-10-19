const nome = "Jhonata"
const idade = 15
const listaProdutosMaiorDeIdade = [
    "51",
    "Skol",
    "Brahma",
    "Antartica",
    "Heineken"]
const listaProdutoMenorDeIdade = [
    "Suco",
    "Café",
    "Refrigerante",
    "Água",
    "Nescau",
    "Toddynho"
]    

if(idade >= 18){
    console.log("Você pode comprar bebida alcoólica")
    console.log(listaProdutosMaiorDeIdade)
} else {
    console.log("Você não pode comprar bebida alcoólica")
    console.log(listaProdutoMenorDeIdade)
}