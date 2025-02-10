const { Given, When, Then } = require('@cucumber/cucumber');

let movies = [];
Given('Exibir onde os filmes|séries estão disponíveis', function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    movies = dataTable.hashes();
    console.log("disponibilidade\n");
    movies.forEach(element => {
        console.log("Título: ",element.Título," Nota: ",element.Nota," Ano: ",element.Ano," Plataforma: ",element.Plataforma," Capa: ",element.Capa );
      });
});


When('exibe a disponibilidade dos filmes|séries', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log('exibe a disponibilidade dos filmes|séries\n');
});


Then('devo ver a seguinte disponibilidade:', function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    movies = dataTable.hashes();
    console.log("disponibilidade\n");
    movies.forEach(element => {
        console.log("Título: ",element.Título," Nota: ",element.Nota," Ano: ",element.Ano," Plataforma: ",element.Plataforma," Capa: ",element.Capa );
      });
});


Given('os seguintes filmes|séries existem:', function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    movies = dataTable.hashes();
    console.log("Exemplo de exibição de dados:\n");
    movies.forEach(element => {
        console.log("Título: ",element.Título," Nota: ",element.Nota," Ano: ",element.Ano," Plataforma: ",element.Plataforma," Capa: ",element.Capa );
      });
});

When('adiciono um novo filme|série com título {string}, ano {string}, nota {string}, capa {string} e plataforma {string}', function (string, string2, string3, string4, string5) {
    // Write code here that turns the phrase above into concrete actions
    console.log(` ${string} ${string2} ${string3} ${string4} ${string5}`);
});

Then('os seguintes filmes|séries devem existir:', function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    movies = dataTable.hashes();
    console.log("Exemplo de exibição de dados:\n");
    movies.forEach(element => {
        console.log("Título: ",element.Título," Nota: ",element.Nota," Ano: ",element.Ano," Plataforma: ",element.Plataforma," Capa: ",element.Capa );
      });
});



When('edito o filme|série com título {string} para ter a plataforma {string}', function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
    console.log('...');
});


When('remover o filme|série com título {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    console.log('...');
});


Given('os seguintes reviews criadas pelo usuário existem:', function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    console.log('...');
});

When('editar o review de {string} para ter avaliação {string} e comentário {string}', function (string, string2, string3) {
    // Write code here that turns the phrase above into concrete actions
    console.log('...');
});

Then('os seguintes reviews devem existir:', function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    movies = dataTable.hashes();
    console.log("Exemplo de exibição de dados:\n");
    movies.forEach(element => {
        console.log("Título: ",element.Titulo," Avaliação: ",element['Avaliação']," Comentário: ",element['Comentário'] );
      });
});


When('adicionar um novo review para {string} com avaliação {string} e comentário {string}', function (string, string2, string3) {
    // Write code here that turns the phrase above into concrete actions
    console.log('...');
});


Given('os seguintes reviews existem:', function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    movies = dataTable.hashes();
    console.log("Exemplo de exibição de dados:\n");
    movies.forEach(element => {
        console.log("Título: ",element.Titulo," Avaliação: ",element['Avaliação']," Comentário: ",element['Comentário'] );
      });
});

When('remover o review {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    console.log(`remover o review ${string}`);
});

