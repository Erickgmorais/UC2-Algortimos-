const prompt = require('readline-sync');

let contas = []

function criarContas(usuario, senha) {
    let conta = []
    conta.push(usuario)
    conta.push(senha)
    contas.push(conta)
    return contas
}

function fazerLogin(usuario, senha) {
    for(let i = 0; i < contas.length; i++){
        if(contas[i][0] === usuario && contas[i][1] === senha) {
            return true
        }

    return false
        
    }
    
}

while (true) {
    const criar = Number(prompt.question(`MENU
Escolha uma opcao abaixo:
        
1 - Criar Usuario
2 - Fazer login `))

    if(criar === 1) {
        const nome = prompt.question('Insira um nome para do seu usuario: ')
        const senha = prompt.question('Insira uma senha para login: ')
        criarContas(nome, senha)
    
    }else if(criar === 2) {
        const verificarNome = prompt.question('Nome de usuario: ')
        const verificarSenha = prompt.question('Sua senha: ')
        let resultado = fazerLogin(verificarNome, verificarSenha)
        if (resultado) {
             console.log('Login efetuado com sucesso!')
            break
        }else {
            console.log('Usuario ou senhas incorretos!')
        } break

    }
}
