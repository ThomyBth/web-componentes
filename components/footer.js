function footerComponent(el) {
  const componentEl = document.createElement("footer");
  componentEl.className = "footer-component";

  componentEl.innerHTML = `
        <img class="logo-header-component-footer" src="./logo-sf.png" alt="Logo" />
       <div class="footer__indice">
      <a href="portfolio.html"
        >Portfolio
        <img src="./logo-home.png" alt="github" />
      </a>
      <a href="servicios.html"
        >Servicios
        <img src="./logo-servicios.png" alt="Twitter" />
      </a>
      <a href="contacto.html"
        >Contacto
        <img src="./logo-contacto.png" alt="linkedin" />
      </a>
    </div>
      <div class="footer__social-media">
        <a href="https://github.com/" target="_blank">
          <img src="./git-hub-logo.png" alt="github" />
        </a>
        <a href="https://twitter.com" target="_blank">
          <img src="./twitter-logo.png" alt="Twitter" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
          <img src="./linkedin-logo.png" alt="linkedin" />
        </a>
      </div>
      <span class="copy">&copy;2025</span>`;

  el.appendChild(componentEl);
}

document.addEventListener("DOMContentLoaded", () => {
  const footerEl = document.querySelector(".footer-component");

  if (footerEl) {
    footerComponent(footerEl);
  } else {
    console.error("No se encontró el elemento .footer-component en el DOM.");
  }
});
