function constructMovieCard(movie) {
  //Creo la card y su clase:
  const card = document.createElement("div");
  card.classList.add("card");

  //Creo los elementos de la card con sus clases y les asigno su contenido:
  const title = document.createElement("a");
  title.href = " ";
  title.innerHTML = movie.title;
  title.classList.add("titleCard");

  const year = document.createElement("p");
  year.innerHTML = "Año: " + movie.year;

  const director = document.createElement("p");
  director.innerHTML = "Director: " + movie.director;

  const duration = document.createElement("p");
  duration.innerHTML = "Duración: " + movie.duration;

  const genre = document.createElement("p");
  genre.innerHTML = "Género: " + movie.genre;

  const rate = document.createElement("p");
  rate.innerHTML = "Ranking: " + movie.rate;

  const poster = document.createElement("img");
  poster.src = movie.poster;
  poster.classList.add("imgCard");

  // Creo un div para todos los p, le doy una clase y appendeo:
  const informacion = document.createElement("div");
  informacion.appendChild(year);
  informacion.appendChild(director);
  informacion.appendChild(duration);
  informacion.appendChild(genre);
  informacion.appendChild(rate);
  informacion.classList.add("informacion");

  //Agrego los elementos a la card:
  card.appendChild(title);
  card.appendChild(poster);
  card.appendChild(informacion);

  //Devuelvo la card:
  return card;
}
module.exports = constructMovieCard;
