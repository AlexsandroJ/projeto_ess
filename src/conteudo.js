
let movie = {
    movieId: "movie123",
    title: "Inception",
    releaseYear: 2010,
    Platform: ["Netflix", "HBO Max"],
    genre: ["Sci-Fi", "Thriller"],
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
    durationMinutes: 148, // Duração do filme em minutos
    ratingAverage: 8.8, // Média de avaliações
    reviewCount: 25000, // Quantidade de reviews recebidos
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

function getReviewsByUser(string, dataTable) {
    movies = dataTable.hashes();
    console.log(`\nReviews do usuario ${string}:\n`);
    movies.forEach(element => {
        console.log("title: ", element.title, " rating: ", element.rating, " reviewText: ", element.reviewText);
    });
}

function addMovie(movies) {
    console.log("title: ", movies.title, " releaseYear: ", movies.releaseYear, " ratingAverage:", movies.ratingAverage, " cover: ", movies.cover, " platform: ", movies.platform);
}

function updateMovie(movieId, newMovieData) {
    movieId = newMovieData;
    Object.entries(movie).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });
}
function deleteMovie(movieId) {
    console.log("Filme: ", movieId, " removido");
}

function deleteReview(reviewId){
    
}

function addReview(reviewData) {
    // Implementação
}

function updateReview(reviewId, newReviewData) {
    // Implementação
}

module.exports = {
    getAllMovies,
    getAllReviewsForMovie,
    getReviewsByUser,
    addMovie,
    updateMovie,
    deleteMovie,
    deleteReview,
    addReview,
    updateReview,
};