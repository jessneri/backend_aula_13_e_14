/*
  Não altere nada ABAIXO disso até o próximo comentário;

  -- Este código permite que tenhamos uma 
  -- experiência interativa com o usuário;
  -- Não é necessário entendê-lo neste momento.
*/
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

/*
  Não altere nada ACIMA deste comentário;;
*/

/**
 * Escreva seu código aqui embaixo;
 */

let cadastros = [{
    nome: 'Maria',
    dataDeNascimento: '10/03/1994',
    cpf: '12345678912',
    profissao: 'Programadora',
    deletado: false
}];

function listarUsuarios() {
    console.log(cadastros);
}

function deletarUsuario(cpf) {
    let possuideletados = false
    for (i = 0; i < cadastros.length; i++) {
        if (cadastros[i].cpf === cpf) {
            possuideletados = true;
            cadastros[i].deletado = true;
            console.log(`O usuário de cpf ${cpf} foi deletado`);
        }
    }

    if (!possuideletados) {
        console.log("Usuário não encontrado.")

    }
}

const cadastrarUsuario = (usuario) => {
    cadastros.push(usuario);
}

cadastrarUsuario({
    nome: 'Jonas',
    dataDeNascimento: '05/08/1999',
    cpf: '21221221212',
    profissao: 'Designer',
    deletado: false
});

console.log(cadastros);


rl.question("Você deseja cadastrar, listar ou deletar?", (resposta) => {
    console.log(resposta);
    if (resposta === 'listar' || resposta === 'Listar') {
        listarUsuarios();
    } else if (resposta === 'deletar' || resposta === 'deletar ') {
        rl.question("Você quer deletar qual cpf?", (resposta) => {
            deletarUsuario(resposta);

        })
    } else if (resposta === 'cadastrar' || resposta === 'Cadastrar') {
        const novoUsuario = {
            deletado: false
        };
        rl.question("Qual nome do usuário?", (resposta) => {
            novoUsuario['nome'] = resposta;
            rl.question("Qual a data de nascimento do usuário?", (resposta) => {
                novoUsuario['dataDeNascimento'] = resposta;
                rl.question("Qual o cpf do usuário?", (resposta) => {
                    novoUsuario['cpf'] = resposta;
                    rl.question("Qual a profissão do usuário?", (resposta) => {
                        novoUsuario['profissao'] = resposta;
                        cadastrarUsuario(novoUsuario);
                        console.log(cadastros);
                        console.log("Pronto! Usuário cadastrado!")
                        rl.close();
                    })
                })
            })

        })
    }

});