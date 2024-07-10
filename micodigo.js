document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("boton");
    const mensaje = document.getElementById("mensaje");

    boton.addEventListener("click", function () {
        mensaje.textContent = "En la Primera Era, en la primera batalla, la primera vez que las sombras se alargaron, alguien resistió. Consumido por las ascuas del Armagedón, su alma ardió en los fuegos del Infierno y, demasiado corrupta para la ascensión, escogió la senda del tormento perpetuo. No hallo la paz en su boraz odio, y con su sangre hirviendo recorrió las llanuras del umbral para vengarse de los señores oscuros que tanto daño le habían hecho. Portaba la corona de los Centinelas de la noche y los que probaron su espada le llamaron, Asesino de la Muerte.";
        mensaje.style.color = "white"; // Agregamos el estilo de color rojo
    });
});