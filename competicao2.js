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
    console.clear()
    const criar = Number(prompt.question(`MENU
Escolha uma opcao abaixo:
        
1 - Criar Usuario
2 - Fazer login
0 - Sair

`))

    if(criar === 1) {
        console.clear()
        const nome = prompt.question('Digite o nome do usuario: ')
        const senha = prompt.question('Digite a senha do usuario: ')
        criarContas(nome, senha)
        prompt.question('Pressione ENTER para continuar')
    
    }else if(criar === 2) {
        console.clear()
        const verificarNome = prompt.question('Digite o nome do usuario: ')
        const verificarSenha = prompt.question('Digite a senha do usuario: ')
        let resultado = fazerLogin(verificarNome, verificarSenha)
        
        if (resultado) {
            console.log('Login efetuado com sucesso!')
            prompt.question('Pressione ENTER para continuar')
        }else {
            console.log('Usuario ou senhas incorretos!')
            prompt.question('Pressione ENTER para continuar')
        } 

    } else if (criar === 0) {
        console.clear()
        console.log('Fim')
        break

    } else {
        console.log('Opcao Invalida')
    }
}
