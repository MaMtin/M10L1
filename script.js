// 1. Contador dinámico acelerado de toneladas de CO2 emitidas
let baseCO2 = 19450820310; // Cifra base simulada en tiempo real
const counterElement = document.getElementById('co2-counter');

function updateCounter() {
    // Incremento veloz para generar el estímulo de urgencia visual
    baseCO2 += 135; 
    counterElement.innerText = baseCO2.toLocaleString('es-ES') + " Toneladas";
}

// Actualiza cada 100ms para mantener el movimiento constante en pantalla
setInterval(updateCounter, 100);

// 2. Soporte táctil interactivo para celulares y tablets
function toggleInfo(card) {
    const inner = card.querySelector('.card-inner');
    // Si la pantalla es táctil/móvil, rota la tarjeta mediante clicks alternados
    if (window.innerWidth <= 768) {
        if (inner.style.transform === "rotateY(180deg)") {
            inner.style.transform = "rotateY(0deg)";
        } else {
            inner.style.transform = "rotateY(180deg)";
        }
    }
}

// 3. Desplegar el panel de soluciones final con auto-scroll suave
function mostrarAccion() {
    const mensaje = document.getElementById('mensaje-accion');
    mensaje.classList.remove('hidden');
    
    setTimeout(() => {
        mensaje.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}
