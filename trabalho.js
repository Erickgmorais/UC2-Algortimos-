//PARTE 1 -
function criarUsuario (nome, idade, cidade, hobbies) {
  return [nome, idade, cidade, hobbies]
}
//Criei uma função que retorna um array com os dados do usuário

//PARTE 2-
function formatarHobbies (hobbies) {
  let hobbiesFormatados = hobbies.join(", ")
  return hobbiesFormatados
}
//Criei uma função para formatar os hobbies do usuário. Dentro da função criei uma variável
//atribuindo a ela os hobbies formatados. Retornando então os hobbies formatados.

//PARTE 3-
function gerarDescricao (usuario) {
  return `${usuario[0]} tem ${usuario[1]}, mora em ${usuario[2]} e gosta de: ${usuario[3]}` 
} 
// ${usuario[3]}` feito desse jeito e retorna string. Por que?  
//Criei uma função que retorna uma descrição do usuário.

//PARTE 4-
function adicionarUsuario (usuarios, usuario){
  let usuarioAtualizado = [...usuarios, usuario]
  return usuarioAtualizado
}
//spread [...] Irá pegar todos os elementos de USUÁRIO e jogar dentro de USUÁRIOS
//Criei uma função e dentro da função criei uma variável que, pega o USUÁRIO e joga dentro de USUÁRIOS.

function gerarRelatorio (usuarios) {
  return `Total de usuarios: ${usuarios.length}`
}
//Criei uma função que retorna uma crase dizendo o total de usuários.


let user1 = criarUsuario("Erick", 20, "Sao Leopoldo", ["Jogar cs2, programar"])

let usuarios = []

console.log(user1)

let usuarioFormatado = formatarHobbies(user1[3]);
console.log(usuarioFormatado);

let descricaoGerado = gerarDescricao(user1);
console.log(descricaoGerado);

usuarios = adicionarUsuario(usuarios, user1)

let relatorioGerado = gerarRelatorio(usuarios);
console.log(relatorioGerado);


