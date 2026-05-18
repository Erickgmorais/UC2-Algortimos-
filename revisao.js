const prompt = require('readline-sync')
/*//1 - VARIAVEIS E CONSTANTES
let nome = 'Erick'
let idade = 20
const PI = true 

console.clear()
console.log(nome, idade, PI)

//2 - OPERADORES ARITMETICOS

let num1 = Number(prompt.question('Insira um numero: '))
let num2 = Number(prompt.question('Insira outro numero: '))

let soma = num1 + num2
let subtracao = num1 - num2
let multiplicacao = num1 * num2
let divisao = num1 / num2
let restoDiv = num1 % num2

console.log(`SOMA: ${soma}
SUBTRACAO: ${subtracao}
MULTIPLICACAO: ${multiplicacao}
DIVISAO: ${divisao}
RESTO DA DIVISAO: ${restoDiv}
`)

//3 - COMPARADORES E BOOLEANOS
let numero1 = 12
let numero2 = 10

let igualdade = numero1 === numero2
let diferenca = numero1 !== numero2
let maiorQue = numero1 > numero2
let menorQue = numero1 < numero2
let maiorOuIgual = numero1 >= numero2
let menorOuIgual = numero1 <= numero2

console.log(`MEUS NUMEROS SAO: ${numero1}, ${numero2}

IGUALDADE: ${igualdade}
DIFERENCA: ${diferenca}
MAIOR QUE: ${maiorQue}
MENOR QUE: ${menorQue}
MAIOR OU IGUAL: ${maiorOuIgual}
MENOR OU IGUAL: ${menorOuIgual}
`)

//OPERADORES LOGICOS
let idadePessoa = Number(prompt.question('Qual a sua idade? '))
let carteiraPessoa = prompt.question('Possui CNH? ').toLowerCase()

let verificacao = idadePessoa >= 18 && carteiraPessoa === 'sim'

if (verificacao) {
    console.log('Pode dirigir!')
}else {
    console.log('Nao pode dirigir!')
}

//CONDICIONAIS
let numero = Number(prompt.question('Digite um numero: '))

if(numero >= 1) {
    console.log('Positivo')
} else if(numero <= -1) {
    console.log('Negativo')
}else {
    console.log('Zero')
}

//STRINGS E PROTOTIPOS
let nomeCompleto = prompt.question('Insira seu nome completo: ')
let nomeCompletoAlto = nomeCompleto.toUpperCase()
let nomeCompletoBaixo = nomeCompleto.toLowerCase()
let nomeCompletoSemEspaco = nomeCompleto.trim()
let nomeCompletoVerificar = nomeCompleto.includes('erick')
let nomeCompletoEmI = nomeCompleto.replace('a', 'i')

console.log(`${nomeCompleto}
${nomeCompletoAlto}
${nomeCompletoBaixo}
${nomeCompletoSemEspaco}
${nomeCompletoVerificar}
${nomeCompletoEmI}
`)

//ARRAY BASICOS
let frutas = ['banana', 'maca', 'abacaxi', 'morango', 'pessego']

let adc = frutas.push('pera')
let remover = frutas.pop()
let tamanho = frutas.length
let maca = frutas[1]

//METODOS DE ARRAY
let arrayNumeros = [12, 26, 104, -1, 96, 0]


let dobrar = arrayNumeros.map(n  => n * 2)
let numerosMenores = arrayNumeros.filter(n => n < 72)
let primeiro = arrayNumeros.find(n => n > -1)
let verificarNumero = arrayNumeros.includes(0)

console.log(`${dobrar}
${numerosMenores}    
${primeiro}
${verificarNumero}`)

//FUNCOES SIMPLES

function somar (num1, num2) {
    return num1 + num2
}

console.log(somar(250, 42)) 

//FUNCOES COM CONDICIONAIS

function idade(idade) {
    if (idade >= 18) {
        console.log('Maior de idade')
    }else {
        console.log('Menor de idade')
    }
}

let idadeUsuario = prompt.question('Insira sua idade: ')
idade(idadeUsuario) 

//LAÇO FOR 
for(let i = 1; i <= 10; i++) {
    console.log(`Numeros: ${i}`)
    
}

for (let i = 1; i <= 10; i++) {
      if(i % 2 === 0) {
        console.log(`Pares: ${i}`) 
    }
}

for(let i = 1; i <= 10; i++) {
    if(i % 2) {
        console.log(`Impares: ${i}`)
    }
} 

//LAÇO WHILE 

let digiteNumero = Number(prompt.question('Insira um numero: '));

while (digiteNumero >= 0) {
    console.log(digiteNumero)

    digiteNumero--
  
} */

//ARRAY COM LAÇOS
let arrayNumeros = [0, 5, 12, 108, 99, 1067]

for (let i = 0; i < arrayNumeros.length; i++) {
    let soma = arrayNumeros[i] + arrayNumeros[i]
    console.log(soma)
}

for (let i = 0; i < arrayNumeros.length; i++) {
    let media = arrayNumeros[i] / arrayNumeros.length
    console.log(media.toFixed(2))
}