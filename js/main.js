
// ========================================
// J. LOPEZ | CONTROL & TECHNOLOGY
// Funciones de navegación
// ========================================

document.addEventListener("DOMContentLoaded", function () {

  // Menú adaptable para teléfonos
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

      const isOpen = navLinks.classList.toggle("active");

      menuToggle.setAttribute("aria-expanded", isOpen);
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú" : "Abrir menú"
      );

      menuToggle.textContent = isOpen ? "×" : "☰";

    });

    // Cerrar menú después de seleccionar una sección
    navLinks.querySelectorAll("a").forEach(function (link) {

      link.addEventListener("click", function () {

        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");
        menuToggle.textContent = "☰";

      });

    });

  }

  // Actualizar año del pie de página
  const yearElement = document.getElementById("current-year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

});
