// 1. Contador dinámico de toneladas de CO2 a nivel mundial en tiempo real
// (Aproximación basada en estadísticas globales por segundo para simular impacto continuo)
let baseCO2 = 18500000000; // Un número base gigante para simular el año en curso
const counterElement = document.getElementById('co2-counter');

function updateCounter() {
    // Cada décima de segundo se emiten aproximadamente 1200 toneladas a nivel global
    baseCO2 += 120; 
    counterElement.innerText = baseCO2.toLocaleString('es-ES') + " Toneladas";
}

// Actualiza el contador cada 100 milisegundos para dar sensación de urgencia vertiginosa
setInterval(updateCounter, 100);

// 2. Soporte para móviles (Hacer click para voltear la tarjeta si no hay mouse hover)
function toggleInfo(card) {
    const inner = card.querySelector('.card-inner');
    if (window.innerWidth <= 768) {
        if (inner.style.transform === "rotateY(180deg)") {
            inner.style.transform = "rotateY(0deg)";
        } else {
            inner.style.transform = "rotateY(180deg)";
        }
    }
}

// 3. Revelar el llamado a la acción final
function mostrarAccion() {
    const mensaje = document.getElementById('mensaje-accion');
    mensaje.classList.remove('hidden');
    
    // Auto-scroll suave hacia la solución revelada
    setTimeout(() => {
        mensaje.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}