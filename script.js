document.addEventListener('DOMContentLoaded', () => {
    // 1. Menú desplegable para dispositivos móviles
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Cerrar el menú al hacer clic en un enlace en móvil
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

    // 2. Cambio de estilo en la barra de navegación al hacer scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (header) {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 20px rgba(16, 29, 51, 0.1)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(16, 29, 51, 0.05)';
            }
        }
    });

    // 3. EFECTO DINÁMICO DE TEXTOS Y TÍTULOS AL HACER SCROLL (SEGURO Y ROBUSTO)
    const revealElements = document.querySelectorAll('.reveal-text');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 80; // Margen optimizado para activar los elementos antes de que salgan de pantalla

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    // Escuchar el evento de desplazamiento
    window.addEventListener('scroll', revealOnScroll);

    // Múltiples disparadores al cargar para garantizar que todo el contenido (incluyendo el de abajo) aparezca visible
    revealOnScroll();
    setTimeout(revealOnScroll, 100);
    setTimeout(revealOnScroll, 300);

    // 4. SLIDER AUTOMÁTICO (INDEX)
    const slides = document.querySelectorAll('.hero-slider .slide');
    let currentSlide = 0;
    const slideInterval = 3000;

    function nextSlide() {
        if (slides.length === 0) return;
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    if (slides.length > 0) {
        setInterval(nextSlide, slideInterval);
    }
});
