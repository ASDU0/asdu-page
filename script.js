const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous','next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel{
    constructor( container, items, controls){
        this.carouselContainer = container;
        this.cauroselControls = controls;
        this.carouselArray = [...items];
    }
    updateGallery(){
        this.carouselArray.forEach( el => {
            el.classList.remove('gallery-item-1');
            el.classList.remove('gallery-item-2');
            el.classList.remove('gallery-item-3');
            el.classList.remove('gallery-item-4');
            el.classList.remove('gallery-item-5');
            el.classList.remove('gallery-item-6');
        });        

        this.carouselArray.slice(0, 6).forEach((el, i) => {
            el.classList.add(`gallery-item-${i + 1}`);
        
            // Agregar redireccionamiento al hacer clic en la imagen
            const imageLink = el.querySelector('a');
            const imageIndex = el.querySelector('img').getAttribute('data-index');
        
            // Redireccionar según el índice de la imagen
            imageLink.addEventListener('click', (e) => {
              e.preventDefault();
              switch (imageIndex) {
                case '1':
                  window.location.href = 'http://in.unsaac.edu.pe/home/';
                  break;
                case '2':
                  window.location.href = 'http://in.unsaac.edu.pe/home/';
                  break;
                case '3':
                  window.location.href = 'http://in.unsaac.edu.pe/home/';
                  break;
                case '4':
                window.location.href = 'http://in.unsaac.edu.pe/home/';
                break;
                case '5':
                window.location.href = 'http://in.unsaac.edu.pe/home/';
                break;
                case '6':
                window.location.href = 'http://in.unsaac.edu.pe/home/';
                break;
                // Agrega más casos según la cantidad de imágenes en tu carrusel
                default:
                  break;
              }
            });
        });
    }

    setCurrentState(direction){
        if(direction.className == 'gallery-controls-previous'){
            this.carouselArray.unshift(this.carouselArray.pop());
        }else{
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    setControls(){
        this.cauroselControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
            document.querySelector(`.gallery-controls-${control}`).innerText = control;
        });
    }

    useControls(){
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }

}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();