window.addEventListener('scroll', function () {
    const header = document.querySelector('#main-header');
    if (window.scrollY > 0) {
        header.classList.add('size');
    } else {
        header.classList.remove('size');
    }
});

function createCards(data) {
    const cardContainer = document.getElementById("cardContainer");

    data.forEach(cardData => {
        const cardElement = document.createElement("div");
        cardElement.className = "cards";

        const imageElement = document.createElement("div");
        imageElement.className = "image";
        const image = new Image();

        // Cargar la imagen de forma síncrona
        image.onload = function() {
            imageElement.appendChild(image);
        };

        // Manejar errores de carga de la imagen
        image.onerror = function() {
            console.error("Error al cargar la imagen:", cardData.imageSrc);
        };

        image.src = cardData.imageSrc;
        cardElement.appendChild(imageElement);

        const nameElement = document.createElement("div");
        nameElement.className = "name";
        const name = document.createElement("h2");
        name.textContent = cardData.name;
        nameElement.appendChild(name);
        cardElement.appendChild(nameElement);

        const positionElement = document.createElement("div");
        positionElement.className = "position";
        const position = document.createElement("h4");
        position.textContent = cardData.position;
        positionElement.appendChild(position);
        cardElement.appendChild(positionElement);

        const descriptionElement = document.createElement("div");
        descriptionElement.className = "des";
        const description = document.createElement("p");
        description.textContent = cardData.description;
        descriptionElement.appendChild(description);

        const iconContainer = document.createElement("div");
        iconContainer.className = "icon-container";


        cardData.icons.forEach(icon => {
            const link = document.createElement("a");
            link.href = icon.link;
            const iconElement = document.createElement("i");

            // Asignar la clase de icono correspondiente según el tipo
            switch (icon.type) {
                case "github":
                    iconElement.className = "fa-brands fa-github fa-2xl";
                    break;
                case "facebook":
                    iconElement.className = "fa-brands fa-facebook fa-2xl";
                    break;
                case "instagram":
                    iconElement.className = "fa-brands fa-square-instagram fa-2xl";
                    break;
                case "whatsapp":
                    iconElement.className = "fa-brands fa-whatsapp fa-2xl";
                    break;
                default:
                    // Si el tipo de icono no coincide con ninguno de los casos anteriores, se usa un icono predeterminado
                    iconElement.className = "fas fa-external-link-alt fa-2x";
                    break;
            }

            link.appendChild(iconElement);
            iconContainer.appendChild(link);
        });


        descriptionElement.appendChild(iconContainer);
        cardElement.appendChild(descriptionElement);

        cardContainer.appendChild(cardElement);
    });
}