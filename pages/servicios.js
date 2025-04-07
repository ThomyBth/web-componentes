async function fetchContentfulCards() {
  const contentfulUrl =
    "https://cdn.contentful.com/spaces/gojknqlfk5xa/environments/master/entries?access_token=5L99b-yykU4-ktLX08yefnzuyEXF5X79ZtbAL5E4ZM4&content_type=card&include=2";
  const cardsContainer = document.querySelector(".cards-container");

  if (!cardsContainer) {
    console.error("El elemento con clase 'cards-container' no se encontró.");
    return;
  }

  try {
    const response = await fetch(contentfulUrl);
    const data = await response.json();

    const items = data.items || [];
    const assets = data.includes?.Asset || [];

    // Crear tarjetas dinámicamente
    items.forEach((item) => {
      const title = item.fields?.titulo || "Título no disponible";
      const description =
        item.fields?.descripcion?.content?.[0]?.content?.[0]?.value ||
        "Descripción no disponible";

      const imageId = item.fields?.imagen?.sys?.id;
      const image = assets.find((asset) => asset.sys.id === imageId);
      const imageUrl = image ? `https:${image.fields.file.url}` : "";

      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = ` 
        <img src="${imageUrl}" alt="${title}" class="card-image">
        <h2 class="card-title">${title}</h2>
        <p class="card-description">${description}</p>
      `;
      cardsContainer.appendChild(card);
    });

    // Crear y añadir el botón "Ver más" al final del contenedor
    const botonVerMas = document.createElement("div");
    botonVerMas.className = "ver-mas-contenedor";
    botonVerMas.innerHTML = `
      <button class="boton-ver-mas">
        Ver más
        <img class="flecha-abajo" src="./arrow-down-svgrepo-com 1.png" alt="Flecha hacia abajo">
      </button>
    `;
    cardsContainer.appendChild(botonVerMas);
  } catch (error) {
    console.error("Error al obtener los datos de Contentful:", error);
    cardsContainer.innerHTML = `<p>Hubo un error al cargar las cards. Por favor, intentá más tarde.</p>`;
  }
}

// Ejecutar la función cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
  fetchContentfulCards();
});
