//const data = require('../tests/test.json');
const data = require('../features/step_definitions/test.json');
const fs = require('fs');
const filePath = "test.json";


/*
export default class Movie {
    constructor(movieId, title, releaseYear, platforms, genres, director, cast, durationMinutes, ratingAverage, reviewCount, cover) {
      this.movieId = movieId;
      this.title = title;
      this.releaseYear = releaseYear;
      this.platforms = platforms;
      this.genres = genres;
      this.director = director;
      this.cast = cast;
      this.durationMinutes = durationMinutes;
      this.ratingAverage = ratingAverage;
      this.reviewCount = reviewCount;
      this.cover = cover;
    }

    // Método para exibir informações sobre o filme
    displayInfo() {
      console.log(`Título: ${this.title}`);
      console.log(`Ano de Lançamento: ${this.releaseYear}`);
      console.log(`Plataformas: ${this.platforms.join(', ')}`);
      console.log(`Gêneros: ${this.genres.join(', ')}`);
      console.log(`Diretor: ${this.director}`);
      console.log(`Elenco: ${this.cast.join(', ')}`);
      console.log(`Duração: ${this.durationMinutes} minutos`);
      console.log(`Avaliação Média: ${this.ratingAverage}`);
      console.log(`Quantidade de Avaliações: ${this.reviewCount}`);
      console.log(`Capa: ${this.cover}`);
    }
  }
  */