Lottiecontainer2.addEventListener('click', function() {
    lottieAnimation.play();
});

var lottieAnimation = bodymovin.loadAnimation({
    container2 = document.getElementById(animacion), // ID del div
    path = 'imagenes/animacion.json', // Ruta fichero .json de la animación
    renderer: 'svg', // Requerido
    autoplay: true, // Opcional
    name: "Hello World", // Opcional
})

// animacion rotar 

$('.thumbnail').on('transitionend webkitTransitionEnd MSTransitionEnd', function(e) {
    if (e.originalEvent.propertyName != 'transform') return;

    alert('webkitTransitionEnd')
});


// proyectos