const formulario = document.getElementById("formulario");
let listaPublicacion = [];


class Publicacion {
  constructor(nombrePersona, titulo, contenido, resumen, urlImg) {
    this.nombrePersona = nombrePersona;
    this.titulo = titulo;
    this.contenido = contenido;
    this.resumen = resumen;
    this.urlImg = urlImg;
    this.indice = null;
  }

  toJson() {
    return {
      nombrePersona: this.nombrePersona,
      titulo: this.titulo,
      contenido: this.contenido,
      resumen: this.resumen,
      urlImg: this.urlImg,
    };
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("publicaciones")) {
    listaPublicacion = JSON.parse(localStorage.getItem("publicaciones"));
  }
});

formulario.addEventListener("submit", function (event) {
  event.preventDefault;
  const nombre = document.getElementById("nombre").value;
  const titulo = document.getElementById("titulo").value;
  const contenido = document.getElementById("contenido").value;
  const resumen = document.getElementById("resumen").value;
  const urlImg = document.getElementById("url").value;

  const nuevaPublicacion = new Publicacion(
    nombre,
    titulo,
    contenido,
    resumen,
    urlImg
  );
  listaPublicacion.push(nuevaPublicacion);
  guardarLocalStorage();
  formulario.reset();
});

function guardarLocalStorage() {
  localStorage.setItem("publicaciones", JSON.stringify(listaPublicacion));
}



/* function createCard(titulo, resumen, url, indice) {
  console.log(indice);
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
  const btn = document.createElement("a");
  btn.href = "#";
  btn.className = "btn btn-primary";
  btn.id = indice;
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

function eliminarPublicacionPorIndice(indice) {
  let listaPublicacion =
    JSON.parse(localStorage.getItem("publicaciones")) || [];

  listaPublicacion.splice(indice, 1);
  // Actualiza el índice de los elementos restantes
  listaPublicacion.forEach((publicacion, index) => {
    publicacion.indice = index;
  });
  localStorage.setItem("publicaciones", JSON.stringify(listaPublicacion));
  location.reload();
} */



/* window.addEventListener('unload', function() {
  localStorage.removeItem('publicaciones');
}); */
