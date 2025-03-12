// Espera a que el DOM se haya cargado completamente
document.addEventListener('DOMContentLoaded', function () {
  // Obtener los elementos del DOM para el modal
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeModal = document.getElementById("closeModal");

  // Seleccionar todas las imágenes de la galería
  const images = document.querySelectorAll(".vestidoimg");

  // Verifica si las imágenes y el modal existen antes de añadir event listeners
  if (images.length > 0 && modal && modalImage) {
      images.forEach(image => {
          image.addEventListener("click", () => {
              modal.style.display = "flex";  // Mostrar el modal
              modalImage.src = image.src;  // Establecer la imagen en el modal
              setTimeout(() => {
                  modal.classList.add("show"); // Añadir la clase 'show' para activar la animación de la imagen
              }, 10); // Añadido un pequeño retraso para asegurarse de que la transición se active
          });
      });
  }

  // Obtener los elementos del menú hamburguesa
  const menuToggle = document.querySelector('.menu-toggle'); // Selector correcto
  const navbar = document.querySelector('.navbar ul');  // El ul que queremos mostrar/ocultar

  // Verifica si los elementos están presentes antes de añadir el event listener
  if (menuToggle && navbar) {
      // Función para mostrar/ocultar el menú
      menuToggle.addEventListener('click', () => {
          // Animación para el icono hamburguesa (opcional)
          menuToggle.classList.toggle('open'); // Agregar o quitar la clase 'open' para animar el icono

          // Alternar la visibilidad del menú usando clases CSS
          navbar.classList.toggle('show');  // Añadimos o quitamos la clase 'show' para mostrar/ocultar el menú
      });
  }


// Función para mostrar notificación
function showNotification(message) {
  // Obtener el elemento de la notificación
  var notification = document.getElementById("notification");

  // Cambiar el mensaje
  notification.textContent = message;

  // Asegurarse de que el texto es blanco
  notification.style.color = "white";

  // Mostrar la notificación
  notification.style.display = "block";

  // Ocultar la notificación después de 3 segundos
  setTimeout(function() {
      notification.style.display = "none";
  }, 4000);
}

// Delegación de eventos para los botones de añadir a favoritos y añadir a la cesta
document.body.addEventListener("click", function(event) {
  // Si el clic es en un botón "Añadir a Favoritos"
  if (event.target && event.target.classList.contains("add-to-favorites")) {
      showNotification("¡Producto añadido a Favoritos!");
  }
  
  // Si el clic es en un botón "Añadir a la Cesta"
  if (event.target && event.target.classList.contains("add-to-cart")) {
      showNotification("¡Producto añadido a la Cesta!");
  }
});

// Cambiar el icono de corazón al hacer clic
document.getElementById('heart1').addEventListener('click', function() {
  const heartIcon = this;
  // Cambiar al icono de corazón lleno
  if (heartIcon.classList.contains('fa-heart')) {
      heartIcon.classList.remove('fa-heart');
      heartIcon.classList.add('fa-heart-solid');
  } else {
      // Cambiar al icono de corazón vacío
      heartIcon.classList.remove('fa-heart-solid');
      heartIcon.classList.add('fa-heart');
  }
});
});
// Espera a que el DOM se haya cargado completamente
document.addEventListener('DOMContentLoaded', function () {
  // Obtener los elementos del DOM para el modal
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeModal = document.getElementById("closeModal");

  // Seleccionar todas las imágenes de la galería
  const images = document.querySelectorAll(".vestidoimg");

  // Verifica si las imágenes y el modal existen antes de añadir event listeners
  if (images.length > 0 && modal && modalImage) {
    images.forEach(image => {
      image.addEventListener("click", () => {
        modal.style.display = "flex";  // Mostrar el modal
        modalImage.src = image.src;  // Establecer la imagen en el modal
        setTimeout(() => {
          modal.classList.add("show"); // Añadir la clase 'show' para activar la animación de la imagen
        }, 10); // Añadido un pequeño retraso para asegurarse de que la transición se active
      });
    });
  }

  // Función para cerrar el modal si se hace clic fuera de la imagen
  modal.addEventListener("click", function (event) {
    // Verificar si el clic fue en el fondo (no en la imagen)
    if (event.target === modal) {
      modal.style.display = "none"; // Ocultar el modal
      modal.classList.remove("show"); // Remover la clase 'show' para detener la animación
    }
  });

  // Cerrar el modal cuando el botón de cerrar sea clickeado
  closeModal.addEventListener("click", function () {
    modal.style.display = "none"; // Ocultar el modal
    modal.classList.remove("show"); // Remover la clase 'show' para detener la animación
  });
});
