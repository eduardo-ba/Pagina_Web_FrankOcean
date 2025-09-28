document.addEventListener('DOMContentLoaded', function() {
    // ⚠️ CLASES CORREGIDAS al español:
    const header = document.querySelector('.encabezado-frank');
    const heroSection = document.querySelector('.seccion-hero');
    // La clase para ocultar también debe ser la de español:
    const CLASE_OCULTA = 'encabezado-oculto'; 

    // Salir si los elementos no existen
    if (!header || !heroSection) return; 

    // Obtener la altura del hero y del header
    // Nota: Es mejor obtenerlas dentro del toggleHeaderVisibility
    // o al inicio, pero si el DOM está cargado, no debería haber problema.
    const heroHeight = heroSection.offsetHeight;
    const headerHeight = header.offsetHeight;
    
    // El punto de activación será un poco antes de que el hero salga de la vista.
    const activationPoint = heroHeight - headerHeight; 

    function toggleHeaderVisibility() {
        // window.scrollY indica cuántos píxeles hemos bajado
        if (window.scrollY > activationPoint) {
            // Se elimina la clase en español
            header.classList.remove(CLASE_OCULTA);
        } else {
            // Se añade la clase en español
            header.classList.add(CLASE_OCULTA);
        }
    }

    // 1. Inicialmente, aseguramos que el header esté oculto.
    // Usamos la clase en español: 'encabezado-oculto'
    header.classList.add(CLASE_OCULTA);
    
    // 2. Ejecutamos la función al cargar
    toggleHeaderVisibility(); 

    // 3. Adjuntamos la función al evento de scroll.
    window.addEventListener('scroll', toggleHeaderVisibility);
});