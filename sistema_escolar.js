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

logger('Bem-vindo ao sistema escolar');

while (true) {
    const opcao = prompt.question('Escolha a opcao desejada \n1- Cadastrar um novo aluno \n2- Buscar aluno \n3- Sair \n');

    if (opcao === '1') {
    
        const nome = prompt.question('Insira o nome do aluno: ');
        const idade = prompt.question('Informe a idade do aluno: ');
        const turma = prompt.question('Informe a turma onde o aluno sera alocado: ');
        const matricula = prompt.question('Insira uma matricula de DEZ digitos para o aluno: ');

        for (let aluno of alunos) {
            if(matricula === aluno.matricula) {
                logger('Matricula ja existente!');
                return true
            } 
                    
        }

        if (!matricula) {
            cadastrarAluno(nome, idade, turma, matricula);
            logger('Aluno cadastrado com sucesso!');
            logger(alunos);
        }

    
        
        // if(cadastrarAluno(nome, idade, turma, matricula)) {
        //     logger('Aluno cadastrado com sucesso! ');
            
        // }   

    }
    
    
    if (opcao === '3') {
        process.exit();
    }

}



 



//Sistema não está passando o logger
//
