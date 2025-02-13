/*******************************
 * 📌 CONFIGURAÇÕES GERAIS
 *******************************/


// Nome do aplicativo
const APP_NAME = "Review";

// Configuração de tema (light/dark)
let themeMode = "dark";

// Idioma atual do usuário
let language = "pt";

/*******************************
 * 👤 USUÁRIO (AUTENTICAÇÃO & PERFIL)
 *******************************/

// Status de login do usuário
let isUserLoggedIn = false;

// Papéis de usuário
let USER_ROLE_ADMIN = "admin";
let USER_ROLE_REVIEWER = "reviewer";
let USER_ROLE_VIEWER = "viewer";

// Informações do perfil do usuário autenticado
let userProfile = {
  userId: "12345",
  userName: "JohnDoe",
  userEmail: "john.doe@example.com",
  profilePictureUrl: "https://example.com/avatar.jpg",
  favoriteGenres: ["Action", "Sci-Fi", "Drama"], // Gêneros favoritos
  watchlist: ["movie123", "series456"], // Lista de filmes/séries salvos
  isPremiumMember: true // Usuário possui plano premium?
};

/*******************************
 * 🎬 FILMES & SÉRIES
 *******************************/

// Objeto representando um filme
let movie = {
  movieId: "movie123",
  title: "Inception",
  releaseYear: 2010,
  Platform: ["Netflix","HBO Max"],
  genre: ["Sci-Fi", "Thriller"],
  director: "Christopher Nolan",
  cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
  durationMinutes: 148, // Duração do filme em minutos
  ratingAverage: 8.8, // Média de avaliações
  reviewCount: 25000, // Quantidade de reviews recebidos
  cover: 'http://www.algum_link'// Link da capa do filme
};

// Objeto representando uma série
let series = {
  seriesId: "series456",
  title: "Breaking Bad",
  Platform: ["Netflix","HBO Max"],
  seasons: 5,
  episodes: 62,
  genre: ["Crime", "Drama", "Thriller"],
  creators: ["Vince Gilligan"],
  ratingAverage: 9.5,
  reviewCount: 30000,
  cover: 'http://www.algum_link'// Link da capa da serie
};

/*******************************
 * ✍️ REVIEWS & COMENTÁRIOS
 *******************************/

// Review de um usuário sobre um filme/série
let review = {
  reviewId: "rev987",
  userId: "12345",
  movieId: "movie123",
  reviewText: "Amazing movie with a mind-bending plot!", // Texto da review
  rating: 9, // Nota de 1 a 10
  likesCount: 120, // Quantidade de curtidas recebidas
  createdAt: "2024-02-13T10:00:00Z" // Data da review
};

// Comentário em uma review
let comment = {
  commentId: "com567",
  reviewId: "rev987",
  userId: "67890",
  commentText: "Totally agree! The visuals were stunning!", // Texto do comentário
  likesCount: 10, // Curtidas no comentário
  createdAt: "2024-02-13T11:00:00Z"
};

/*******************************
 * 🔎 BUSCA & FILTRAGEM
 *******************************/

// Termo de pesquisa inserido pelo usuário
let searchQuery = "Christopher Nolan";

// Resultados da busca
let searchResults = [
  { type: "movie", id: "movie123", title: "Inception" },
  { type: "series", id: "series789", title: "Westworld" }
];

// Filtros aplicados na busca
let filters = {
  genre: "Sci-Fi", // Filtrar por gênero
  minRating: 8, // Nota mínima
  maxReleaseYear: 2024, // Ano máximo de lançamento
  sortBy: "rating_desc" // Ordenação: "rating_desc", "release_date_asc"
};

/*******************************
 * 📌 ESTADO GLOBAL DA APLICAÇÃO
 *******************************/

// Controla se a aplicação está carregando algo
let isLoading = false;

// Indica se ocorreu um erro
let hasError = false;

// Mensagem de erro (se houver)
const errorMessage = "...";


//module.exports = { movie }