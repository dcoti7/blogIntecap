document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("publicaciones")) {
      listaPublicacion = JSON.parse(localStorage.getItem("publicaciones"));
    }
    if (localStorage.getItem("selecIndice")) {
        globalIndice = JSON.parse(localStorage.getItem("selecIndice"));
      }
    crearArtículo();
  });


  function crearArtículo(){
    
    /* console.log("articulo Creado con indice: "  + globalIndice); */
    /* console.log(listaPublicacion[globalIndice]); */
    /* console.log(listaPublicacion[globalIndice].contenido) */

        // Crear elementos HTML
        const main = document.createElement('main');
        main.classList.add('container-principal');
    
        const div1 = document.createElement('div');
        div1.classList.add('container-img');
    
        const img = document.createElement('img');
        img.src = listaPublicacion[globalIndice].urlImg;
        img.classList.add('img-fluid');
    
        const div2 = document.createElement('div');
        div2.classList.add('container', 'titulo');
        const h1 = document.createElement('h1');
        h1.textContent = listaPublicacion[globalIndice].titulo;
        div2.appendChild(h1);
    
        const div3 = document.createElement('div');
        div3.classList.add('container', 'contenido');
        const p = document.createElement('p');
        p.textContent = listaPublicacion[globalIndice].contenido;
        div3.appendChild(p);
    
        const div4 = document.createElement('div');
        div4.classList.add('container', 'nombre');
        const strong = document.createElement('strong');
        strong.textContent = "Publicado por: " + listaPublicacion[globalIndice].nombrePersona;
        div4.appendChild(strong);
    
        const div5 = document.createElement('div');
        div5.classList.add('container', 'botones');
        const button2 = document.createElement('button');
        button2.type = 'button';
        button2.classList.add('btn', 'btn-danger');
        button2.onclick = function(event){
          eliminarPublicacionPorIndice();
        };
        button2.textContent = 'Eliminar';
        div5.appendChild(button2);
    
        // Agregar elementos al contenedor principal
        main.appendChild(div1);
        div1.appendChild(img);
        main.appendChild(div2);
        main.appendChild(div3);
        main.appendChild(div4);
        main.appendChild(div5);
    
        // Agregar el contenedor principal al documento
        document.querySelector('.container-principal').appendChild(main);
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
    window.location.href = "mostrar.html";
  }