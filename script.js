new Swiper('.card-warpper ', {
    loop: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0:{
            slidesPerView: 1
        },
        768:{
            slidesPerView: 2
        },
        1024:{
            slidesPerView: 3
        },
    }
  
  });

  // Seleccionar elementos
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const caption = document.getElementById("caption");
const closeBtn = document.getElementById("close");
const galleryItems = document.querySelectorAll(".gallery-item");

// Agregar eventos a las imágenes
galleryItems.forEach(item => {
    item.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = item.src;
        caption.textContent = item.alt;
    });
});

// Cerrar el modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar el modal al hacer clic fuera de la imagen
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
