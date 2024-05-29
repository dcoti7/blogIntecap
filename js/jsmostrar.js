let globalIndice;
document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("publicaciones")) {
    listaPublicacion = JSON.parse(localStorage.getItem("publicaciones"));
    listaPublicacion.forEach((publicacion, indice) => {
      publicacion.indice = indice;
      createCard(
        publicacion.titulo,
        publicacion.resumen,
        publicacion.urlImg,
        publicacion.indice
      );
    });
  }
});

function createCard(titulo, resumen, url, indice) {
  /* console.log(indice); */
  // Crear el contenedor principal del div
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";
  cardDiv.style.width = "18rem";

  // Crear la imagen
  const img = document.createElement("img");
  img.src = url;
  img.className = "card-img-top";
  img.alt = "img";

  // Crear el contenedor del cuerpo de la tarjeta
  const cardBodyDiv = document.createElement("div");
  cardBodyDiv.className = "card-body";

  // Crear el título de la tarjeta
  const cardTitleElement = document.createElement("h5");
  cardTitleElement.className = "card-title";
  cardTitleElement.textContent = titulo;

  // Crear el texto de la tarjeta
  const cardTextElement = document.createElement("p");
  cardTextElement.className = "card-text";
  cardTextElement.textContent = resumen;

  // Crear el enlace del botón
  const btn = document.createElement("a"); /* 
  btn.href = "#"; */
  btn.className = "btn btn-primary";
  btn.id = indice;
  btn.onclick = function (event) {
    mostrarArticulo(event);
  };
  btn.textContent = "Ir al articulo";

  // Añadir los elementos al contenedor del cuerpo de la tarjeta
  cardBodyDiv.appendChild(cardTitleElement);
  cardBodyDiv.appendChild(cardTextElement);
  cardBodyDiv.appendChild(btn);

  // Añadir la imagen y el cuerpo de la tarjeta al contenedor principal
  cardDiv.appendChild(img);
  cardDiv.appendChild(cardBodyDiv);

  // Añadir el contenedor principal al DOM (por ejemplo, a un contenedor específico)
  document.getElementById("card-container").appendChild(cardDiv);
}



function mostrarArticulo(event) {
  globalIndice = event.target.id;
  localStorage.setItem("selecIndice", JSON.stringify(globalIndice));
  window.location.href = "leerArticulo.html";
}
