// Obtener todos los elementos con la clase "subject-box"
const subjectBoxes = document.querySelectorAll('.subject-box');

// Agregar una animación "bounce" que dure 2 segundos a cada cuadro
subjectBoxes.forEach((box, index) => {
    box.style.animation = `bounce 2s ${index * 0.3}s both`;
});