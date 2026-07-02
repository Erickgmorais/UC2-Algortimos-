//Sistema de cadastro de alunos com matrícula única

const prompt = require('readline-sync');

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
            return `Nome: ${aluno.nomeAluno} \nIdade: ${aluno.idade} \nCidade: ${aluno.cidade} \nMatrícula: ${aluno.matricula} \n`
        } 
    } return 'Aluno(a) não encontrado, tente novamente!'

}

logger('---- Bem-vindo ao sistema escolar ----');

while (true) {
    const opcao = prompt.question('Escolha a opcão desejada \n1- Cadastrar um novo aluno(a) \n2- Buscar aluno(a) \n3- Exibir alunos(as) \n4- Sair \n');

    if (opcao === '1') {
        clear();
        const nome = prompt.question('Insira o nome do aluno(a): ');
        const idade = prompt.question('Informe a idade do aluno(a): ');
        const cidade = prompt.question('Informe a cidade do aluno(a): ');
        const matricula = prompt.question('Insira uma matrícula de DEZ digitos para o aluno(a): ');

        if (verificarMatricula(matricula)) {
            clear();
            logger ('Matrícula já existente! \nInsira outra. \n');
            continue;
        }
        cadastrarAluno(nome, idade, cidade, matricula);
        clear();
        logger ('Aluno(a) cadastrado com sucesso! \n');
    } else if (opcao === '2') {
        clear();
        const nome = prompt.question('Insira o nome do aluno(a): ');
        logger (buscarAluno(nome));        
    } else if (opcao === '3') {
        clear();
        logger (alunos);
    } else if (opcao === '4') {
        clear();
        logger ('Até mais.')
        process.exit();
    } else {
        clear();
        logger('Opcão Inválida');
    }
}