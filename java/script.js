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
  if (heartIcon.classList.contains('fa-regular fa-heart')) {
      heartIcon.classList.remove('fa-regular fa-heart');
      heartIcon.classList.add('fa-solid fa-heart');
  } else {
      // Cambiar al icono de corazón vacío
      heartIcon.classList.remove('fa-regular fa-heart');
      heartIcon.classList.add('fa-solid fa-heart');
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

  // Función para cambiar el texto dependiendo del tamaño de la pantalla
  function cambiarTextoSegunDispositivo() {
    var anchoPantalla = window.innerWidth;

    // Cambiar el texto de "Quiénes Somos" si el dispositivo es móvil (pantalla pequeña)
    if (anchoPantalla <= 768) {
        document.getElementById("textoOriginalSomos").innerHTML = "En Cisbel, ofrecemos moda femenina única y accesible, especializada en vestidos, palazos, accesorios y costura personalizada. Nuestro objetivo es que las mujeres se sientan cómodas, elegantes y seguras con prendas que se ajusten perfectamente a su estilo y necesidades.";
        document.getElementById("textoOriginalHacer").innerHTML = "En Cisbel, además de ropa de alta calidad, ofrecemos un servicio exclusivo de costura para garantizar que cada prenda se ajuste a tus medidas. Nuestro equipo de costureras trabaja con materiales de primera calidad para crear diseños únicos, asegurando que te sientas cómoda y segura con cada prenda.";
    } else {
        // Si no es móvil (pantalla grande), mantener el texto original
        document.getElementById("textoOriginalSomos").innerHTML = "En Cisbel, somos una tienda de ropa femenina dedicada a ofrecer moda única, moderna y accesible. Nos especializamos en vestidos, palazos y accesorios, así como en un servicio de costura personalizado. Nuestro objetivo es ayudar a las mujeres a sentirse únicas, cómodas y elegantes en cada ocasión. Nos apasiona crear prendas que no solo resalten la belleza exterior, sino también la confianza interna.\nContamos con un equipo de expertos en moda y costura, listos para brindar un servicio personalizado y asegurarnos de que cada prenda encaje perfectamente en ti. Ya sea que busques un vestido de gala o un conjunto más casual, en Cisbel tenemos lo que necesitas para que te sientas especial.";
        document.getElementById("textoOriginalHacer").innerHTML = "En Cisbel no solo vendemos ropa de alta calidad, sino que también ofrecemos un servicio exclusivo de costura para asegurar que cada prenda se ajuste perfectamente a tus medidas. Ya sea que necesites una modificación, un ajuste a medida o crear una prenda completamente nueva, nuestro equipo de costureras se encargará de cada detalle. \n Trabajamos con materiales de primera calidad y nos aseguramos de que cada diseño sea único. Nuestro objetivo es que te sientas cómoda y segura con cada prenda que compres, porque creemos que la moda no solo debe verse bien, sino también sentirse bien. Visítanos y descubre todo lo que podemos hacer por ti.";
    }
}

// Llamar a la función al cargar la página
window.onload = cambiarTextoSegunDispositivo;

// Opcional: Escuchar cambios en el tamaño de la ventana (redimensionar)
window.addEventListener('resize', cambiarTextoSegunDispositivo);

//popup de descuento al registrarse
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const mensaje = document.getElementById("mensaje");
  const checkboxCookies = document.getElementById("cookies");
  const correoInput = document.getElementById("correo");

  if (!sessionStorage.getItem("popupMostrado")) {
    setTimeout(() => {
      popup.style.display = "flex";
      sessionStorage.setItem("popupMostrado", "true");
    }, 3000);
  }

  window.cerrarPopup = function () {
    popup.style.display = "none";
  };

  window.aceptar = function () {
    const correo = correoInput.value.trim();
    const cookiesAceptadas = checkboxCookies.checked;

    if (!correo) {
      mensaje.textContent = "El campo de correo es obligatorio.";
      mensaje.className = "error";
      return;
    }

    if (!cookiesAceptadas) {
      mensaje.textContent = "Debes aceptar las cookies para continuar.";
      mensaje.className = "error";
      return;
    }

    mensaje.textContent = "Has conseguido un 25% de descuento en tu primera compra.";
    mensaje.className = "ok";

    setTimeout(() => {
      cerrarPopup();
    }, 3000);
  };
});

  //carrusel de imágnes
  const imagenes = [
    "./img/vestidos/blanco y negro.jpg",
    "./img/palazos/palazo beige botones.jpg",
    "./img/accesorios/pendientes largos.jpg",
    "./img/festivaOutfit.jpg",
    "./img/blog/blog1.jpg"
  ]
  let indiceCentral = 0;

  function obtenerIndiceCircular(i){
    return(i + imagenes.length) % imagenes.length;
  }

  function renderCarrusel(){
    const carrusel = document.getElementById("carrusel");
    carrusel.innerHTML = "";

    for(let offset = -2; offset <= 2; offset++){
      const indice = obtenerIndiceCircular(indiceCentral + offset);
      const img = document.createElement("img");
      img.src = imagenes[indice];
      img.classList.add("carrusel-image");
      if(offset === 0){
        img.classList.add("center");
      }
      img.addEventListener("click", () => {
        indiceCentral = indice;
        renderCarrusel();
      });
      carrusel.appendChild(img);
    }
  }
  document.addEventListener("DOMContentLoaded", renderCarrusel);