document.addEventListener("DOMContentLoaded", () => {
  const formEl = document.querySelector(".form-contact");
  if (formEl) {
    contactComponent(formEl);
  } else {
    console.error("No se encontró el contenedor .form-contact en el DOM.");
  }
});

function contactComponent(el) {
  const componentEl = document.createElement("form");
  componentEl.className = "form-contact";

  componentEl.innerHTML = `
      <h1 class="h1_form-contacto">Escribime</h1>
      <div class="inputs-labels">
        <label class="label-nombre" for="name">Nombre</label>
        <input
          class="input-nombre"
          id="name"
          name="name"
          type="text"
          placeholder="Tu Nombre"
          required
        />
        
        <label class="label-email" for="email">E-mail</label>
        <input
          class="input-email"
          id="email"
          name="email"
          type="email"
          placeholder="tu@mail.com"
          required
        />
        
        <label class="label-mensaje" for="mensaje">Mensaje</label>
        <textarea
          class="input-mensaje"
          id="mensaje"
          name="mensaje"
          placeholder="Dejanos tu mensaje"
          rows="5"
          required
        ></textarea>
        
        <button class="button-contacto" type="submit">
          Enviar <img class="imagen-button-contacto" src="./icono-send (1).png" alt="icono de envio" />
        </button>
      </div>
    `;

  componentEl.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("El formulario se envió correctamente.");
  });

  el.replaceWith(componentEl);
}
