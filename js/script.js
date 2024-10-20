document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu li a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    document.addEventListener('DOMContentLoaded', function() {
        const filterButtons = document.querySelectorAll('.filtro-btn');
        const projectItems = document.querySelectorAll('.proyecto-item');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                
                // Remover la clase 'active' de todos los botones
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Añadir la clase 'active' al botón clickeado
                button.classList.add('active');

                projectItems.forEach(item => {
                    if (filter === 'todo' || item.classList.contains(filter)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    });
});

// Inicialización del slider de reseñas
var resenasSwiper = new Swiper('.resenas-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        // Cuando el ancho de la ventana es >= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // Cuando el ancho de la ventana es >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // Cuando el ancho de la ventana es >= 1024px
        1024: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});

// JavaScript para la funcionalidad de la galería
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var closeBtn = document.getElementsByClassName("close")[0];

var images = document.querySelectorAll('.galeriaImagenes img');
images.forEach(function(img) {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

