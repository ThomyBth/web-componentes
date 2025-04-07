function headerComponent(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
      <div class="header-component">
        <img class="logo-header-component" src="./logo-sf.png" alt="Logo" />
        <button id="burguerBtn" class="burguer-button">&#9776;</button>
  
        <div id="modal" class="modal">
          <div class="modal-content">
            <span id="closeModal" class="close">&times;</span>
            <ul>
              <li><a href="https://www.enlace-opcion1.com" id="option1">Portfolio</a></li>
              <li><a href="https://www.enlace-opcion2.com" id="option2">Servicios</a></li>
              <li><a href="https://www.enlace-opcion3.com" id="option3">Contacto</a></li>
            </ul>
          </div>
        </div>
      </div>;
  `;
  el.appendChild(componentEl);

  const burgerBtn = componentEl.querySelector("#burguerBtn");
  const modal = componentEl.querySelector("#modal");
  const closeModal = componentEl.querySelector("#closeModal");

  burgerBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });
}
