function animarHabilidades() {
    const habilidades = document.querySelectorAll("#habilidades-contenedor > *");

    habilidades.forEach((habilidad, index) => {
        const retraso = (index + 1) * 100;
        const habilidadTop = habilidad.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (habilidadTop < windowHeight) {
            habilidad.style.transition = `opacity 0.5s ease ${retraso}ms, transform 0.5s ease ${retraso}ms`;
            habilidad.style.opacity = "1";
            habilidad.style.transform = "translateX(0)";
        } else {
            habilidad.style.opacity = "0";
            habilidad.style.transform = "translateX(-50px)";
        }
    });
}
document.addEventListener("DOMContentLoaded", animarHabilidades);
window.addEventListener("scroll", animarHabilidades);