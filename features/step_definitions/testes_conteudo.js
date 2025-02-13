const { Given, When, Then } = require('@cucumber/cucumber');
const {
    getAllMovies,
    getAllReviewsForMovie,
    getReviewsByUser,
    addMovie,
    updateMovie,
    deleteMovie,
    deleteReview,
    addReview,
    updateReview,
} = require('../../src/conteudo');

let movie = {
    title: "Inception",
    releaseYear: 2010,
    Platform: ["Netflix", "HBO Max"],
    durationMinutes: 148, // Duração do filme em minutos
    ratingAverage: 8.8, // Média de avaliações
    cover: 'http://www.algum_link'// Link da capa do filme
};

let review = {
    reviewId: "rev987",
    userId: "12345",
    movieId: "movie123",
    reviewText: "Amazing movie with a mind-bending plot!", // Texto da review
    rating: 9, // Nota de 1 a 10
    likesCount: 120, // Quantidade de curtidas recebidas
    createdAt: "2024-02-13T10:00:00Z" // Data da review
};

Given('Exibir onde os filmes|séries estão disponíveis', function (dataTable) {
    getAllMovies(dataTable);
});

When('exibe a disponibilidade dos filmes|séries', function () {

    console.log('\nExibe a disponibilidade dos filmes|séries\n');
});


Then('devo ver a seguinte disponibilidade:', function (dataTable) {
    getAllMovies(dataTable);
});

Given('os seguintes filmes|séries existem:', function (dataTable) {
    getAllMovies(dataTable);
});

When('adiciono um novo filme|série com title {string}, releaseYear {string}, ratingAverage {string}, cover {string} e platform {string}', function (string, string2, string3, string4, string5) {
    movie.title = string;
    movie.ratingAverage = string2;
    movie.cover = string3;
    movie.platform = string4;
    movie.releaseYear = string5;
    addMovie(movie);
});

Then('os seguintes filmes|séries devem existir:', function (dataTable) {
    getAllMovies(dataTable);
});

When('edito o filme|série com title {string} para ter a platform {string}', function (string, string2) {
    movie.title = string;
    movie.platform = string2;
    updateMovie(movie, movie); // atualizar pois não ta mudando nada to com preguiça
    console.log(`\nEdito o filme|série com title: ${string} para ter a platform: ${string2}`);
});


When('remover o filme|série com title {string}', function (string) {
    deleteMovie(string);
});

Given('os seguintes reviews criadas pelo usuário {string} existem:', function (string, dataTable) {
    getReviewsByUser(string, dataTable)
});

When('editar o review de {string} para ter rating {string} e reviewText {string}', function (string, string2, string3) {
    updateReview(string)
    //console.log(`\nEditar o review de ${string} para ter rating ${string2} e reviewText ${string3}`);
});

Then('os seguintes reviews devem existir:', function (dataTable) {
    getAllReviewsForMovie(dataTable);
});

When('adicionar um novo review para {string} com rating {string} e reviewText {string}', function (string, string2, string3) {
    addReview(string)
    //console.log(`Adicionar um novo review para ${string} com rating ${string2} e reviewText ${string3}`);
});

Given('os seguintes reviews existem:', function (dataTable) {
    getAllReviewsForMovie(dataTable);
});

When('remover o review {string}', function (reviewId) {
    deleteReview(reviewId);
});

