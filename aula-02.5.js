function calcArea(largura, altura, valor){
    const area = largura * altura
    const resultado = area * valor 

    return resultado
}

console.log(calcArea(4, 5, 130))

//a função recebera dois valores n1 e n2,
//e tbm receberá a operação
//que será realizada no formato de string
//ex func(4,6,"soma") = 10

function calculadora(n1, n2, operacao){
    if(operacao === "soma"){
       const soma = n1 + n2

       return soma
    }

    if(operacao === "subtração"){
        const subtracao = n1 - n2
 
        return subtracao
    }

    if(operacao === "mutiplicação"){
        const mutiplicacao = n1 * n2
 
        return mutiplicacao
    }

    if(operacao === "divisão"){
        const divisao = n1 / n2
 
        return divisao
    }

}

console.log(calculadora(7, 2, "divisão"))