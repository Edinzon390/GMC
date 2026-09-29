    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const servicesMenu = document.querySelector(".services-menu");

    if (menuToggle && navLinks) {
      menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
        navLinks.classList.toggle("is-open", !isOpen);
      });

      navLinks.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("is-open");
          menuToggle.setAttribute("aria-expanded", "false");
          menuToggle.setAttribute("aria-label", "Abrir menú");
          if (servicesMenu) servicesMenu.open = false;
        });
      });
    }

    if (servicesMenu) {
      document.addEventListener("click", (event) => {
        if (!servicesMenu.contains(event.target)) servicesMenu.open = false;
      });
    }

    const contactForm = document.querySelector("#contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const subject = encodeURIComponent(`Consulta de ${form.get("nombre")}`);
        const body = encodeURIComponent(
          `Nombre: ${form.get("nombre")}\nTeléfono: ${form.get("telefono") || "No indicado"}\nCorreo: ${form.get("correo")}\n\nMensaje:\n${form.get("mensaje")}`
        );
        window.location.href = `mailto:info@clinicaejemplo.com?subject=${subject}&body=${body}`;
      });
    }

    const year = document.querySelector("#year");
    if (year) year.textContent = new Date().getFullYear();
