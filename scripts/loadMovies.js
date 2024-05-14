const constructMovieCard = require("./constructorMovieCard");

function loadMovies(data) {
  const movies = document.getElementById("movies");
  data.forEach((movie) => {
    const card = constructMovieCard(movie);
    movies.appendChild(card);
  });
}

module.export = loadMovies;
