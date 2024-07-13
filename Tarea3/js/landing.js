document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el contenedor de la animación Lottie
    var animationContainer = document.querySelector('.lottie-animation');
    
    // Ruta al archivo de animación Lottie
    var animationPath = animationContainer.dataset.animationPath;
    
    // Carga la animación Lottie
    var anim = lottie.loadAnimation({
        container: animationContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: animationPath
    });
});
