// *************************************************************
// *********************** GIBLI PRACTICE ********************
// *************************************************************

const app = document.getElementById("root");

const logo = document.createElement("img");
logo.src =
  "https://github.com/taniarascia/sandbox/blob/master/ghibli/logo.png?raw=true";

const container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open("GET", "https://ghibliapi.herokuapp.com/films", true);
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  console.log(data);
  if (request.status >= 200 && request.status < 400) {
    data.forEach((movie) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = movie.title;

      const p = document.createElement("p");
      movie.description = movie.description.substring(0, 300);
      p.textContent = `${movie.description}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement("marquee");
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
};

// request.send();

// *************************************************************
// *********************** POKEMON PRACTICE ********************
// *************************************************************

const app = document.getElementById("root");

const container = document.createElement("div");

container.setAttribute("class", "container");

app.appendChild(container);

const pokeRequest = new XMLHttpRequest();

pokeRequest.open("GET", "https://pokeapi.co/api/v2/pokemon/?limit=9", true);

pokeRequest.onload = function () {
  const data = JSON.parse(this.response);
  if (pokeRequest.status >= 200) {
    data.results.forEach((pokemon) => {
      const card = document.createElement("div");
      card.setAttribute("class", "poke-container");
      const name = document.createElement("h1");

      name.textContent = pokemon.name;
      card.appendChild(name);

      container.appendChild(card);

      name.addEventListener("click", (event) => {
        if (card.children.length == 1) {
          const detailsRequest = new XMLHttpRequest();

          detailsRequest.open("GET", pokemon.url, true);

          detailsRequest.onload = function () {
            if (pokeRequest.status >= 200) {
              const details = JSON.parse(this.response);
              const image = document.createElement("img");

              image.setAttribute("class", "sprite");
              image.src = details.sprites.front_default;

              card.appendChild(image);
            } else {
              const errorMessage = document.createElement("div");
              errorMessage.textContent = "No Image";
              app.appendChild(errorMessage);
            }
          };
          detailsRequest.send();
        } else {
          let images = card.querySelector(".sprite");
          images.remove();
        }
      });
    });
  } else {
    const errorMessage = document.createElement("div");
    errorMessage.textContent = "No pokemon";
    app.appendChild(errorMessage);
  }
};

pokeRequest.send();
