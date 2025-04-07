function headerComponent(el) {
  const componentEl = document.createElement("header");
  componentEl.className = "header-component";

  componentEl.innerHTML = `
        <img class="logo-header-component" src="./logo-sf.png" alt="Logo" />
  <button class="burguer-button">&#9776;</button>
  <div class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <ul>
        <li><a href="portfolio.html">Portfolio</a></li>
        <li><a href="servicios.html">Servicios</a></li>
        <li><a href="contacto.html">Contacto</a></li>
      </ul>
    </div>
  </div>
  <!-- Menú fuera de la modal -->
  <ul class="menu">
    <li><a href="portfolio.html">Portfolio</a></li>
    <li><a href="servicios.html">Servicios</a></li>
    <li><a href="contacto.html">Contacto</a></li>
  </ul>
    
`;
  const burguerBtn = componentEl.querySelector(".burguer-button");
  const modal = componentEl.querySelector(".modal");
  const closeModal = componentEl.querySelector(".close");

  burguerBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  el.appendChild(componentEl);
}

document.addEventListener("DOMContentLoaded", () => {
  const headerEl = document.querySelector(".header-component");

  if (headerEl) {
    headerComponent(headerEl);
  } else {
    console.error("No se encontró el elemento .header-component en el DOM.");
  }
});
