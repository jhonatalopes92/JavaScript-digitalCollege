const user = {
    nome: "Jhonata",
    idade:15,
    sexo: "Masculino"
}

if(user.idade === 18){
    console.log("Você tem 18 anos")
}

if(user.sexo != "masculino"){
    console.log("Você é uma mulher")
}

if(user.idade == 18 || user.sexo == "masculino"){
    console.log("Você bebe nos fins de semanas")
}

if(user.idade >= 18 && user.sexo == "masculino")
    console.log("Você bebe todos os dias")