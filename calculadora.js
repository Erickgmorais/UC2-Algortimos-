const ask = require('readline-sync')


function soma (num1, num2) {
    return num1 + num2
}

function subtracao (num1 , num2) {
    return num1 - num2
}

function multiplicacao (num1, num2) {
    return num1 * num2
}

function divisao (num1, num2) {
    return num1 / num2
}

function restoDivisao (num1, num2) {
    return num1 % num2
}

console.clear()
let pergunta = Number(ask.question(`MENU:
1: soma
2: subtracao
3: multiplicacao
4: divisao
5: resto da divisao

Insira um numero acima para a operacao desejada: `))

let primeiroNumero = Number(ask.question('Insira um numero: '))
let segundoNumero = Number(ask.question('Insira outro numero: '))


switch (pergunta) {

    case 1:
        console.log('Resultado da soma:', soma(primeiroNumero, segundoNumero))
        break
    case 2:
        console.log('Resultado da subtracao:', subtracao(primeiroNumero, segundoNumero))
        break
    case 3:    
        console.log('Resultado da multplicacao:', multiplicacao(primeiroNumero,segundoNumero))
        break
    case 4:
        console.log('Resultado da divisao:', divisao(primeiroNumero, segundoNumero))
        break
    case 5:
        console.log('Resultado do resto da divisao:', restoDivisao(primeiroNumero, segundoNumero));
        break
    default:
        console.log('Opcao incorreta.')
        break                         
}

