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