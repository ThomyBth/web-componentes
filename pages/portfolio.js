let currentIndex = 0;
const itemsPerPage = 3;
let allItems = [];

async function fetchContentfulData() {
  const contentfulUrl =
    "https://cdn.contentful.com/spaces/gojknqlfk5xa/environments/master/entries?access_token=5L99b-yykU4-ktLX08yefnzuyEXF5X79ZtbAL5E4ZM4&content_type=cardPortfolio&include=2";
  const contentContainer = document.getElementById("servicios-portfolio");

  if (!contentContainer) {
    console.error("No se encontró el contenedor.");
    return;
  }

  try {
    const response = await fetch(contentfulUrl);
    const data = await response.json();

    // Guardamos todos los items
    allItems = data.items.map((item) => {
      const titulo = item.fields?.tituloportfolio || "Título no disponible";

      const descripcionContent = item.fields?.descripcion?.content || [];
      const descripcion =
        descripcionContent
          .map((paragraph) =>
            paragraph.content.map((textNode) => textNode.value).join(" ")
          )
          .join("\n") || "Descripción no disponible";

      const assetId = item.fields?.imagen?.sys?.id;
      const image = data.includes?.Asset.find(
        (asset) => asset.sys.id === assetId
      );
      const imageUrl = image
        ? `https:${image.fields.file.url}`
        : "Imagen no disponible";

      return { titulo, descripcion, imageUrl };
    });

    renderItems(); // Cargamos los primeros

    // Botón Ver más
    const botonVerMas = document.createElement("div");
    botonVerMas.className = "ver-mas-contenedor";
    botonVerMas.innerHTML = `
      <button class="boton-ver-mas">
        Ver más
        <img class="flecha-abajo" src="./arrow-down-svgrepo-com 1.png" alt="Flecha hacia abajo">
      </button>
    `;
    contentContainer.appendChild(botonVerMas);

    botonVerMas.addEventListener("click", () => {
      renderItems();
      if (currentIndex >= allItems.length) {
        botonVerMas.style.display = "none";
      }
    });
  } catch (error) {
    console.error("Error al obtener datos:", error);
    contentContainer.innerHTML = `<p>Hubo un error al cargar los datos.</p>`;
  }
}

function renderItems() {
  const container = document.getElementById("servicios-portfolio");

  const nextItems = allItems.slice(currentIndex, currentIndex + itemsPerPage);
  nextItems.forEach(({ titulo, descripcion, imageUrl }) => {
    const template = `
      <div class="portfolio-item">
        <img src="${imageUrl}" alt="${titulo}" class="portfolio-image">
        <h3 class="titulo-portafolio">${titulo}</h3>
        <p class="descripcion-portafolio">${descripcion}</p>
      </div>
    `;
    container.innerHTML += template;
  });

  currentIndex += itemsPerPage;
}

document.addEventListener("DOMContentLoaded", () => {
  fetchContentfulData();
});
