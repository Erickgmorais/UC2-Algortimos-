const ask = require('readline-sync');

function classificarMana (mana) {
    
    if (mana < 25) {
        return 'Morto'
    }else if (mana >= 60)  {
        return 'Estavel'
    }else if ((mana >= 25) && mana < 59) {
        return 'Instavel'
    }
    
}

function mostrarCristal (nome, mana) {
    console.log(`${nome} -> ${mana} -> ${classificarMana(mana)}`)
   
}


function somarMana (a, b, c, d) {
    return `Mana total: ${questionMana1 + questionMana2 + questionMana3 + questionMana4}`
}

function mediaMana (total) {
    return `Mana media: ${(questionMana1 + questionMana2 + questionMana3 + questionMana4) / 4}`

}

function statusTorre (media) {
    if (somarMana < 30) {
        console.log('STATUS DA TORRE: COLAPSO EMINENTE')
    }else if ((somarMana >= 30) < 59) {
        console.log('STATUS DA TORRE: BARREIRA INSTAVEL')
    }else if (somarMana >= 60) {
        console.log('STATUS DA TORRE: TORRE SEGURA')
    }
}

console.clear()


let questionNome1 = ask.question('Insira o nome do Cristal 1: ')
let questionMana1 = Number(ask.question('Insira a mana atual da torre 1: '))
let questionNome2 = ask.question('Insira o nome do Cristal 2: ')
let questionMana2 = Number(ask.question('Insira a mana atual da torre 2: '))
let questionNome3 = ask.question('Insira o nome do Cristal 3: ')
let questionMana3 = Number(ask.question('Insira a mana atual da torre 3: '))
let questionNome4 = ask.question('Insira o nome do Cristal 4: ')
let questionMana4 = Number(ask.question('Insira a mana atual da torre 4: '))

mostrarCristal(questionNome1, questionMana1)
mostrarCristal(questionNome2, questionMana2)
mostrarCristal(questionNome3, questionMana3)
mostrarCristal(questionNome4, questionMana4)

console.log(somarMana(questionMana1, questionMana2, questionMana3, questionMana4))
console.log(mediaMana(somarMana))








