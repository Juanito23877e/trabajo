document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn-leer-mas");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const card = this.closest(".card");
            const text = card.querySelector(".card-text");
            
            if (text.classList.contains("expanded")) {
                text.classList.remove("expanded");
                this.textContent = "Leer más";
            } else {
                text.classList.add("expanded");
                this.textContent = "Leer menos";
            }
        });
    });

    // Mantener la preferencia del usuario sobre el modo oscuro
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }
});

// Efecto Parallax
window.addEventListener("scroll", function () {
    let parallax = document.querySelector(".parallax");
    let scrollPosition = window.scrollY;
    parallax.style.backgroundPositionY = scrollPosition * 0.5 + "px";

    // Mostrar u ocultar el botón "Volver arriba"
    let scrollTopButton = document.getElementById("scrollTopBtn");
    if (scrollPosition > 300) {
        scrollTopButton.style.opacity = "1";
        scrollTopButton.style.pointerEvents = "auto";
    } else {
        scrollTopButton.style.opacity = "0";
        scrollTopButton.style.pointerEvents = "none";
    }
});

// Desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Función para volver arriba
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Modo Oscuro
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Guardar la preferencia en LocalStorage
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
});

// Cargar contenido dinámicamente dentro de la página sin abrir nuevas pestañas
function cargarContenido(pagina) {
    fetch(pagina)
        .then(response => response.text())
        .then(data => {
            document.getElementById("contenido").innerHTML = data;
            document.getElementById("contenido").classList.add("fade-in");
        })
        .catch(error => console.error("Error al cargar la página: ", error));
}

// Modificar función para que use la carga de contenido en la misma página
function abrirInfo(pagina) {
    cargarContenido(pagina);
}

// Recargar la página para volver al inicio
function cargarInicio() {
    location.reload();
}
