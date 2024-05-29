document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var inputVal = document.getElementById('search-input').value.toLowerCase();
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Limpiar resultados anteriores
  
    // Obtener todos los divs con contenido relevante
    var contentDivs = document.querySelectorAll('#card-container > div.card');
  
    // Filtrar y encontrar el div que contiene la palabra clave
    contentDivs.forEach(function(div) {
      var titulo = div.querySelector('.card-title').textContent.toLowerCase();
      if(titulo.includes(inputVal)){
        // Crear un nuevo elemento de enlace <a>
        var a = document.createElement('a');
        // Establecer el texto del enlace con el título del elemento
        a.textContent = titulo;
        // Asignar la URL del enlace con el id del botón dentro del div para anclar a la sección
        a.href = 'leerArticulo.html';
        // Añadir un atributo de datos personalizado para almacenar el índice
        a.dataset.indice = div.querySelector('.btn').id;
        // Añadir un controlador de eventos para el clic que establecerá el índice seleccionado
        a.addEventListener('click', function() {
          localStorage.setItem('selecIndice', JSON.stringify(this.dataset.indice));
        });
        // Añadir el enlace al div de resultados
        resultsDiv.appendChild(a);
        // Añadir un salto de línea para separar los enlaces
        resultsDiv.appendChild(document.createElement('br'));
      }
    });
  
    // Si no se encuentra ninguna coincidencia, mostrar un mensaje
    if(resultsDiv.innerHTML === '') {
      resultsDiv.innerHTML = 'No se encontraron resultados para "' + inputVal + '"';
    }
  });


