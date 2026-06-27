const prompt = require('readline-sync');

//Sistema de cadastro de alunos com matrícula única

const logger = console.log
const alunos = [];

function cadastrarAluno(nomeAluno, idade, turma, matricula) {
    const aluno = {
        nomeAluno: nomeAluno,
        idade: idade,
        turma: turma,
        matricula: matricula
    }

    alunos.push(aluno);
    return alunos
}

function buscarAluno(nome) {
    for (let aluno of alunos) {
        if (aluno.nomeAluno === nome) {
            return true;
        }

        return false
    }
}

while (true) {
    logger('Bem-vindo ao sistema escolar');
    const opcao = prompt.question('Escolha a opcao desejada \n1- Cadastrar um novo aluno \n2- Buscar aluno \n3- Sair \n');

    if (opcao === '1') {
        const nome = prompt.question('Insira o nome do aluno: ');
        const idade = prompt.question('Informe a idade do aluno: ');
        const turma = prompt.question('Informe a turma onde o aluno sera alocado: ');
        const matricula = prompt.questionInt('Insira uma matricula de DEZ digitos para o aluno: ');

        cadastrarAluno(nome, idade, turma, matricula);
        for (let i = 0; alunos.length; i++) {
            if (alunos[i].matricula === matricula) {
                console.log('Matricula existente, informe outra: ')
            };
        }
        
    }

}


//Fazer a verificação da matricula
//Caso usuario coloque uma matricula existente, ele terá que inserir somente a matricula novamente