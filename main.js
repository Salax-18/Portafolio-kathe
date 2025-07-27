
const enlaces = document.querySelectorAll('.navbar a');
const secciones = document.querySelectorAll('.seccion');
const header = document.getElementById('welcome');

function mostrarSeccion(id) {
  // Oculta todas las secciones
  secciones.forEach(sec => sec.classList.remove('activa'));

  // Si el destino es la bienvenida
  if (id === 'welcome') {
    header.classList.remove('oculto');
  } else {
    header.classList.add('oculto');

    // Muestra solo la sección correspondiente
    const activa = document.getElementById(id);
    if (activa) {
      activa.classList.add('activa');
      history.pushState(null, '', '/' + id);
    }
  }

  // Actualiza el menú para mostrar el link activo
  const links = document.querySelectorAll('.navbar a');
  links.forEach(link => {
    link.classList.remove('activo');
    if (link.getAttribute('href') === `#${id}`) {
      link.classList.add('activo');
    }
  });
}

// Escuchar clics en el menú
enlaces.forEach(enlace => {
  enlace.addEventListener('click', e => {
    e.preventDefault();
    const destino = enlace.getAttribute('href').substring(1);
    mostrarSeccion(destino);
  });
});

// Al cargar la página, mostrar solo el header o la sección según la URL
window.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.replace('/', '');

  if (path && document.getElementById(path)) {
    // Si hay ruta, oculta el header y muestra la sección
    header.classList.add('oculto');
    mostrarSeccion(path);
  } else {
    // Si no hay ruta, solo muestra el header
    header.classList.remove('oculto');
    secciones.forEach(sec => sec.classList.remove('activa'));
  }
});