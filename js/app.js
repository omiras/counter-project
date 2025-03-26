// Establecer cual es el estado de esta app. El valor inicial es 0. 
let counter = 0;

// Recuperamos el objeto (nodo) del botón de decrementar
const btnLowerCount = document.querySelector(".prevBtn");

// Recuperamos el objeto (nodo) del botón de incrementar
const btnAddCount = document.querySelector(".nextBtn");

// Recuperamos el objeto (nodo) del contenedor donde va a ir la información textual a mostrar al usuario
const displayCount = document.querySelector('#counter');

// A todos los elementos accionables , les asociamos un evento (click)
// Comprobamos con console.log que hemos asociado correctamente los eventos a los botones
btnLowerCount.addEventListener("click", function () {
    console.log("He pulsado el botón de lower count");
    // Actualizar la variable de estado counter
    counter--; // counter = counter - 1

    // Actualizar el DOM #counter con el nuevo valor de la variable de estado. La propiedad del nodo adecuada para hacer esto es la propiedad .textContent
    displayCount.textContent = counter;

    // Si el valor de counter es menor o igual a 0 (un numero negativo), cambiar el color de la letra a rojo (propiedad style.color)

    if (counter < 0) {

        // Actualizo el objeto style, propiedad color. Le asigno un color CSS válido, en este caso, un rojo en formato hexadecimal 
        displayCount.style.color = "#FF0000"; // color CSS
    } else if (counter == 0) {
        displayCount.style.color = "#333333";
    }


    // El 0 debería verse en gris. Arreglar esto. Corregir. 21.45

});

btnAddCount.addEventListener("click", function () {
    console.log("He pulsado el botón de add count");

    // Actualizar la variable de estado counter
    counter++;

    // Actualizar el DOM #counter con el nuevo valor de la variable de estado. La propiedad del nodo adecuada para hacer esto es la propiedad .textContent
    displayCount.textContent = counter;

    // Si el valor de la variable de estado counter es superior a 0 (es un numero positivo), cambiar el color de la letra a verde (propiedad style.color)
    if (counter > 0) {
        // Actualizo el objeto style, propiedad color (la propiedad adecuada para cambiar el color de la letra usando un estilo en línea). Le asigno el valor "verde" en formato hexadecimal
        displayCount.style.color = "#00FF00";
    } else if (counter == 0) {
        displayCount.style.color = "#333333";
    }

    // El 0 debería verse en gris. Arreglar esto. Corregir. 21.45


})


