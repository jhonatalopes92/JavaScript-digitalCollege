function soma(n1, n2){
    const calculo = n1 + n2
    
    console.log(calculo)
}

function validateSenha(senha){
    
    if(senha === undefined){
        console.log("Ajuste a senha") //finaliza o laço caso a senha seja indefinida 
        return
    }

    const senhaQt = senha.length

    if(senhaQt >= 6){
        console.log("Senha criada com sucesso")
    }else{
        console.log("A senha tem que ter 6 ou mais caractesres")
    }
    
}

validateSenha("123456") //valida
validateSenha("12345") //invalida
validateSenha() //indefinido
