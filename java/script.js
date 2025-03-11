 // Obtener los elementos del DOM
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

// Seleccionar todas las imágenes de la galería
const images = document.querySelectorAll(".vestidoimg");

// Función para abrir el modal y mostrar la imagen
images.forEach(image => {
  image.addEventListener("click", () => {
    modal.style.display = "flex";  // Mostrar el modal
    modalImage.src = image.src;  // Establecer la imagen en el modal
    setTimeout(() => {
      modal.classList.add("show"); // Añadir la clase 'show' para activar la animación de la imagen
    }, 10); // Añadido un pequeño retraso para asegurarse de que la transición se active
  });
});

// Función para cerrar el modal
closeModal.addEventListener("click", () => {
  modal.classList.remove("show");  // Eliminar la clase 'show' para cerrar la animación
  setTimeout(() => {
    modal.style.display = "none";  // Ocultar el modal después de la animación
  }, 300); // Espera que termine la animación antes de esconder el modal
});

// Cerrar el modal cuando se haga clic fuera de la imagen
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");  // Eliminar la clase 'show' para cerrar la animación
    setTimeout(() => {
      modal.style.display = "none";  // Ocultar el modal después de la animación
    }, 300); // Espera que termine la animación antes de esconder el modal
  }
});



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

// Obtener elementos
const menuToggle = document.getElementById('menu-toggle');
const indexList = document.getElementById('index-list');

// Función para mostrar/ocultar el menú
menuToggle.addEventListener('click', () => {
  indexList.classList.toggle('show'); // Agregar o quitar la clase 'show'
  menuToggle.classList.toggle('open'); // Agregar o quitar la clase 'open' para animar el icono
});
