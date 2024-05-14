const loadMovies = require("./loadMovies");

$.get("https://students-api.up.railway.app/movies", (data) => {
  loadMovies(data);
});
