document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
    });
});


function expandCarInfo(carId) {
    // Oculta todas las secciones de detalles
    const carDetailsSections = document.querySelectorAll('.car-details');
    carDetailsSections.forEach(section => section.style.display = 'none');

    // Muestra la sección de detalles específica
    const specificCarDetails = document.getElementById(carId + '-details');
    specificCarDetails.style.display = 'block';
}

// Inicializar el carrusel de imágenes
$('.image-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
});