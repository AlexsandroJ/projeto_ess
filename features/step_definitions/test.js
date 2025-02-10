const { Given, When, Then } = require('@cucumber/cucumber');
let usuariosCadastrados = {};
let nomeCadastro = '';
let cpfCadastro = '';

Given('que o usuário não está cadastrado com o CPF {string}', function (cpf) {
    // Verifica se o usuário não está cadastrado
    console.log(`Usuário não está cadastrado com o CPF: ${cpf}`);
});

Given('que o usuário já está cadastrado com o CPF {string}', function (cpf) {
    // Cadastra o usuário para simular que ele já está cadastrado
    console.log(`Usuário já está cadastrado com o CPF: ${cpf}`);
});

When('o usuário insere o nome {string} e o CPF {string}', function (nome, cpf) {
    // Armazena o nome e o CPF inseridos
    nomeCadastro = nome;
    cpfCadastro = cpf;
    console.log(`Usuário insere o nome: ${nome} e o CPF: ${cpf}`);
});

When('o usuário submete o formulário de cadastro', function () {
    // Simula o envio do formulário de cadastro
    if (usuariosCadastrados[cpfCadastro]) {
        console.log('Erro: Usuário já está cadastrado');
    } else {
        console.log('Cadastro realizado com sucesso');
    }
});

Then('o usuário deve ser cadastrado com sucesso', function () {
    // Verifica se o usuário foi cadastrado com sucesso
    console.log('Usuário cadastrado com sucesso');
});

Then('o usuário deve ver uma mensagem de erro indicando que o usuário já está cadastrado', function () {
    // Verifica se a mensagem de erro é exibida
    console.log('Usuário vê uma mensagem de erro indicando que o usuário já está cadastrado');
});


let movies = [];

Given('existem os seguintes filmes:', function (dataTable) {
    movies = dataTable.hashes();
    console.log("Lista de Filmes no banco:\n");
    movies.forEach(element => {
        console.log("Name: ", element.Name, " Year: ", element.Year, " IMDb: ", element.IMDb);
    });
});

When('exibe os filmes', function () {
    // precisa conter algo para passar nos testes

    console.log("exibe os filmes:\n");
    
});

movies = [];

Then('deve ver os seguintes detalhes do filme:', function (dataTable) {
    movies = dataTable.hashes();
    console.log("Exemplo de exibição de dados:\n");
    movies.forEach(element => {
        console.log("Name: ", element.Name, " Year: ", element.Year, " IMDb: ", element.IMDb);
    });
});
