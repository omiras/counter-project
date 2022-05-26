// Tu código aquí.
// Orden de ejecución de las instrucciones
// 6, 11, 14

// 1. Tener claro cual es el estado de la aplicación. Al principio es 0 porque es su valor inicial.
let counter = 0;

// 2. Dar funcionalidad a todos los elementos con los que el usuario puede interactuar. la mayoría de las veces eso se traduce en asociar el evento al elemento adecuado.

// Seleccionamos el elemento del DOM
let btnDecrement = document.querySelector(".prevBtn");
let btnIncrement = document.querySelector(".nextBtn");

// Capturamos el evento click y ejecutamos una función cada vez que se capture el evento click
btnDecrement.addEventListener("click", function () {
    console.log("Decrementar contador");
    counter--; // como el usuario ha clicado el botón 'decremntar' tenemos que restar una unidad a la variable que forma parte del estado de la app

    // actualizar la interfaz del usuario para plasmar el nuevo estado de la aplicaicón
    // Aproximación: cuantas menos variables globales mejor. Solo utilizo querySelector en el momento que tenga que actualiza la interfaz
    updateScorePanel(counter);

});

btnIncrement.addEventListener("click", function () {
    console.log("Decrementar contador");
    counter++; // como el usuario ha clicado el botón 'incrementar' tenemos que restar una unidad a la variable que forma parte del estado de la app

    // actualizar la interfaz del usuario para plasmar el nuevo estado de la aplicaicón
    // Aproximación: cuantas menos variables globales mejor. Solo utilizo querySelector en el momento que tenga que actualiza la interfaz
    updateScorePanel(counter);
});

function updateScorePanel(counterValue) {
    let scorePanel = document.querySelector("#counter");
    scorePanel.textContent = counterValue;

    // Voy a comprobar la variable counterValue y pondré de color rojo, gris o verde el contador, en función de si el valor de la variable es negativo, 0 , o positivo
    if (counterValue < 0) {
        scorePanel.style.color = "red";
    }

    else if (counterValue > 0) {
        scorePanel.style.color = "green";
    }

    else {
        scorePanel.style.color = "#333333";
    }
}


// Orden de lecutra de las instrucciones



// Regla: Cada vez que el suario interactue (haga click) en uno de los posibles controles
 // 1. Obtener información del usuario (qué botón ha clicado)
 // 2. Actualizar el estado de la aplicación
 // 3. Actualitzar la interfaz del usuario (actualizar la información visible del usuario para plasmar el estado actual de la app en la pantalla del usuario)