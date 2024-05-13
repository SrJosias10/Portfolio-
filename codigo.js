//Aparicion de habilidades
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

//Aparicion de imagenes
document.addEventListener('scroll', function() {
    var proyectos = document.querySelectorAll('.aparicionImagen');
    for (var i = 0; i < proyectos.length; i++) {
        if (proyectoIsVisible(proyectos[i])) {
            proyectos[i].classList.add('visible');
        }
    }
});
function proyectoIsVisible(el) {
    var rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}
