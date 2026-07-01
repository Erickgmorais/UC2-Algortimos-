const prompt = require('readline-sync');

//Sistema de cadastro de alunos com matrícula única

const clear = console.clear
const logger = console.log
const alunos = [];

function cadastrarAluno(nomeAluno, idade, cidade, matricula) {

    const aluno = {
        nomeAluno: nomeAluno,
        idade: idade,
        cidade: cidade,
        matricula: matricula
    }

    alunos.push(aluno)
}

function verificarMatricula (matricula) {
    for (const aluno of alunos) {
        if (matricula === aluno.matricula) {
           return true
        }
    }
}

function buscarAluno(nome) {
    for (let aluno of alunos) {
        if (aluno.nomeAluno === nome) {
            logger (`
Nome: ${aluno.nomeAluno}
Idade: ${aluno.idade}
Cidade: ${aluno.cidade}
Matricula: ${aluno.matricula} \n`);
            break;
        } if (aluno.nomeAluno !== nome) {
            logger ('Aluno(a) nao cadastrado ou nao existente!')
        }

    } 
}

logger('---- Bem-vindo ao sistema escolar ----');

while (true) {
    const opcao = prompt.question('Escolha a opcao desejada \n1- Cadastrar um novo aluno \n2- Buscar aluno \n3- Sair \n');

    if (opcao === '1') {
        clear();
        const nome = prompt.question('Insira o nome do aluno(a): ');
        const idade = prompt.question('Informe a idade do aluno(a): ');
        const cidade = prompt.question('Informe a cidade do aluno(a): ');
        const matricula = prompt.question('Insira uma matricula de DEZ digitos para o aluno(a): ');

        if (verificarMatricula(matricula)) {
            clear();
            logger ('Matricula existente! \nInsira outra. \n');
            continue;
        }

        cadastrarAluno(nome, idade, cidade, matricula);
        clear();
        logger ('Aluno(a) cadastrado com sucesso! \n');
    }

    if(opcao === '2') {
        clear();
        const perguntaNome = prompt.question('Insira o nome do aluno(a): ');
        buscarAluno(perguntaNome);
        
    }

    if (opcao === '3') {
        process.exit();
        clear();
    }

}

//Se eu adiciono mais de um aluno e busco pelo nome, e esse aluno seja o segundo da lista, ele imprime
//o logger ('Aluno(a) nao cadastrado ou nao existente!')
