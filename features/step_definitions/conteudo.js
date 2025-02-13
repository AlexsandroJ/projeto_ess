const { Given, When, Then } = require('@cucumber/cucumber');

let movies = [];

function getAllMovies(dataTable) {
    movies = dataTable.hashes();
    console.log("\nLista de filmes|séries:\n");
    movies.forEach(element => {
        console.log("title: ", element.title, " ratingAverage: ", element.ratingAverage, " releaseYear: ", element.releaseYear, " platform: ", element.platform, " cover: ", element.cover);
    });
}

function getAllReviewsForMovie(dataTable) {
    movies = dataTable.hashes();
    console.log("\nExemplo de exibição de dados:\n");
    movies.forEach(element => {
        console.log("title: ", element.title, " rating: ", element.rating, " reviewText: ", element.reviewText);
    });
}

function getReviewsByUser(string,dataTable) {
    movies = dataTable.hashes();
    console.log(`\nReviews do usuario ${string}:\n`);
    movies.forEach(element => {
        console.log("title: ", element.title, " rating: ", element.rating, " reviewText: ", element.reviewText);
    });
}

Given('Exibir onde os filmes|séries estão disponíveis', function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    getAllMovies(dataTable);
});

When('exibe a disponibilidade dos filmes|séries', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log('\nExibe a disponibilidade dos filmes|séries\n');
});


Then('devo ver a seguinte disponibilidade:', function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    getAllMovies(dataTable);
});

Given('os seguintes filmes|séries existem:', function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    getAllMovies(dataTable);
});

When('adiciono um novo filme|série com title {string}, releaseYear {string}, ratingAverage {string}, cover {string} e platform {string}', function (string, string2, string3, string4, string5) {
    // Write code here that turns the phrase above into concrete actions
    console.log(`\nAdiciono um novo filme|série com title ${string}, releaseYear ${string2}, ratingAverage ${string3}, cover ${string4} e platform ${string5}`);
});

Then('os seguintes filmes|séries devem existir:', function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    getAllMovies(dataTable);
});

When('edito o filme|série com title {string} para ter a platform {string}', function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
    console.log(`\nEdito o filme|série com title: ${string} para ter a platform: ${string2}`);
});


When('remover o filme|série com title {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    console.log(`\nRemover o filme|série com title ${string}`);
});

Given('os seguintes reviews criadas pelo usuário {string} existem:', function (string, dataTable) {
    // Write code here that turns the phrase above into concrete actions
    getReviewsByUser(string,dataTable)
});

When('editar o review de {string} para ter rating {string} e reviewText {string}', function (string, string2, string3) {
    // Write code here that turns the phrase above into concrete actions
    console.log(`\nEditar o review de ${string} para ter rating ${string2} e reviewText ${string3}`);
});

Then('os seguintes reviews devem existir:', function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    getAllReviewsForMovie(dataTable);
});

When('adicionar um novo review para {string} com rating {string} e reviewText {string}', function (string, string2, string3) {
    // Write code here that turns the phrase above into concrete actions
    console.log(`Adicionar um novo review para ${string} com rating ${string2} e reviewText ${string3}`);
});

Given('os seguintes reviews existem:', function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    getAllReviewsForMovie(dataTable);
});

When('remover o review {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    console.log(`\nRemover o review ${string}`);
});

