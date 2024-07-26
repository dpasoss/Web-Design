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





/*Boton de whatsapp*/
    document.querySelector('.btn-whatsapp').addEventListener('click', function(event) {
    });



//desaparece el boton ScrollTop al cargar la pagina web
document.getElementById("flechabtn").style.display = "none";

//esconder botón ScrollTop (parte superior)
window.onscroll = function() {
    scrollFunction()
};

//funcion scroll
function scrollFunction() {
    if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) {
        document.getElementById("flechabtn").style.display = "block";
    } else {
        document.getElementById("flechabtn").style.display = "none";
    }
}



//Funcián Scrolltop (Jquery)
function topFunction() {
    $('#flechabtn').click(function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
}