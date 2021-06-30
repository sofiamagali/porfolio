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
function addClass() {
    document.body.classList.add("sent");
}

sendLetter.addEventListener("click", addClass);

// CONTACTO 

var Calcula = document.getElementsByClassName('form')
Calcula.addEventListener('click', mostrar)

function mostrar() {

    var formulario = document.getElementsByClassName('form');

    formulario.style.display = block;

}