// Redes
document.addEventListener('click', function (e) {
  const fab = document.getElementById('socialFabIzq');
  const toggle = document.getElementById('btn-fab-toggle-izq');

  if (toggle && toggle.checked && !fab.contains(e.target)) {
    toggle.checked = false;
  }
});

/// Hamburguesa, Temas e Idioma
document.addEventListener('DOMContentLoaded', () => {
    const botonMenu = document.getElementById('botonAbrirMenu');
    const menuFlotante = document.getElementById('menuFlotante');
    const circulosColores = document.querySelectorAll('.circulo-color');

    function alternarMenu() {
        const estaActivo = menuFlotante.classList.toggle('activo');
        botonMenu.classList.toggle('activo', estaActivo);
    }
    if (botonMenu) {
        botonMenu.addEventListener('click', (e) => {
            e.stopPropagation();
            alternarMenu();
        });
    }
    document.addEventListener('click', (e) => {
        if (menuFlotante && menuFlotante.classList.contains('activo') && !menuFlotante.querySelector('.panel-menu').contains(e.target) && !botonMenu.contains(e.target)) {
            menuFlotante.classList.remove('activo');
            botonMenu.classList.remove('activo');
        }
    });
    window.addEventListener('scroll', () => {
        if (botonMenu) {
            if (window.scrollY > 30) {
                botonMenu.classList.add('con-scroll');
            } else {
                botonMenu.classList.remove('con-scroll');
            }
        }
    });

    function aplicarTema(tema) {
        circulosColores.forEach(c => {
            c.classList.toggle('seleccionado', c.getAttribute('data-tema') === tema);
        });

        if (tema === 'oscuro') {
            document.documentElement.style.setProperty('--color-fondo-base', '#121212');
            document.documentElement.style.setProperty('--color-degradado-arriba', '#000000');
            document.documentElement.style.setProperty('--color-degradado-medio', '#0d0d0d');
            document.documentElement.style.setProperty('--color-degradado-abajo', '#161616');
            document.documentElement.style.setProperty('--color-acento', '#3b82f6');
            document.documentElement.style.setProperty('--color-acento-sombra', 'rgba(59, 131, 246, 0.233)');
            document.documentElement.style.setProperty('--color-sobremi-glow', '#3b82f6');
            document.documentElement.style.setProperty('--color-sobremi-opacidad-texto', '0.85');
            document.documentElement.style.setProperty('--color-titulo', 'linear-gradient(90deg, #cecece 0%, #ffffff 100%)');
            document.documentElement.style.setProperty('--color-texto', 'white');
            document.documentElement.style.setProperty('--color-texto-secundario', 'rgba(255, 255, 255, 0.6)');
            document.documentElement.style.setProperty('--color-panel-fondo', '#1c1c1e');
            document.documentElement.style.setProperty('--color-panel-texto', '#ffffff');
            document.documentElement.style.setProperty('--color-borde-seleccion', '#ffffff');
            document.documentElement.style.setProperty('--transition-smooth', 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)');
            document.documentElement.style.setProperty('--sombra', '#000000e7');
            document.documentElement.style.setProperty('--sombra-leve', '#0000007c');
            document.documentElement.style.setProperty('--filtro-imagen', 'grayscale(100%) brightness(200%) invert(1)');
            document.documentElement.style.setProperty('--color-icono', '#ffffff');
            document.documentElement.style.setProperty('--color-separador', 'rgba(255, 255, 255, 0.1)');
            document.documentElement.style.setProperty('--color-encabezado', '#ffffff');
        } else if (tema === 'claro') {
            document.documentElement.style.setProperty('--color-fondo-base', '#e0e0e2');
            document.documentElement.style.setProperty('--color-degradado-arriba', '#b4b4b4');
            document.documentElement.style.setProperty('--color-degradado-medio',' #dbdbdb');
            document.documentElement.style.setProperty('--color-degradado-abajo',' #ffffff');
            document.documentElement.style.setProperty('--color-acento', '#1c3e9b');
            document.documentElement.style.setProperty('--color-acento-sombra', 'rgba(43, 54, 206, 0.43)');
            document.documentElement.style.setProperty('--color-sobremi-glow', '#3b82f6');
            document.documentElement.style.setProperty('--color-titulo', 'linear-gradient(90deg, #0e0e0e 0%, #252525 100%)');
            document.documentElement.style.setProperty('--color-texto', '#111111');
            document.documentElement.style.setProperty('--color-texto-secundario', 'rgba(0, 0, 0, 0.75)');
            document.documentElement.style.setProperty('--color-panel-fondo', '#ffffff');
            document.documentElement.style.setProperty('--color-panel-texto', '#111111');
            document.documentElement.style.setProperty('--color-borde-seleccion', '#000000');
            document.documentElement.style.setProperty('--sombra', '#999999d8');
            document.documentElement.style.setProperty('--sombra-leve', '#b9b9b97c');
            document.documentElement.style.setProperty('--filtro-imagen', 'none');
            document.documentElement.style.setProperty('--color-icono', '#ffffff');
            document.documentElement.style.setProperty('--color-separador', 'rgba(15, 15, 15, 0.1)');
            document.documentElement.style.setProperty('--color-encabezado', '#000000');
        } else if (tema === 'azul') {
            document.documentElement.style.setProperty('--color-fondo-base', '#0a111f');
            document.documentElement.style.setProperty('--color-degradado-arriba', '#060c18');
            document.documentElement.style.setProperty('--color-degradado-medio', '#0a1730');
            document.documentElement.style.setProperty('--color-degradado-abajo', '#12284d');
            document.documentElement.style.setProperty('--color-acento', '#22d3ee');
            document.documentElement.style.setProperty('--color-acento-sombra', 'rgba(34, 211, 238, 0.35)');
            document.documentElement.style.setProperty('--color-sobremi-glow', '#0e7490');
            document.documentElement.style.setProperty('--color-sobremi-opacidad-texto', '0.88');
            document.documentElement.style.setProperty('--color-titulo', 'linear-gradient(90deg, #cecece 0%, #ffffff 100%)');
            document.documentElement.style.setProperty('--color-texto', '#f0f9ff');
            document.documentElement.style.setProperty('--color-texto-secundario', 'rgba(240, 249, 255, 0.68)');
            document.documentElement.style.setProperty('--color-panel-fondo', '#0b1426'); 
            document.documentElement.style.setProperty('--color-panel-texto', '#f0f9ff');
            document.documentElement.style.setProperty('--color-borde-seleccion', '#22d3ee');
            document.documentElement.style.setProperty('--transition-smooth', 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)');
            document.documentElement.style.setProperty('--sombra', '#02040ae7');
            document.documentElement.style.setProperty('--sombra-leve', '#02040a7c');
            document.documentElement.style.setProperty('--filtro-imagen', 'grayscale(100%) brightness(200%) invert(1)');
            document.documentElement.style.setProperty('--color-icono', '#f0f9ff');
            document.documentElement.style.setProperty('--color-encabezado', '#ffffff');
        } else if (tema === 'verde') {
            document.documentElement.style.setProperty('--color-fondo-base', '#b1e4b5');
            document.documentElement.style.setProperty('--color-degradado-arriba', '#16411a');
            document.documentElement.style.setProperty('--color-degradado-medio', '#7dbb83');
            document.documentElement.style.setProperty('--color-degradado-abajo', '#b1e4b5'); 
            document.documentElement.style.setProperty('--color-acento', '#0b6e42');
            document.documentElement.style.setProperty('--color-acento-sombra', 'rgba(11, 110, 66, 0.25)');
            document.documentElement.style.setProperty('--color-sobremi-glow', '#4ac965'); 
            document.documentElement.style.setProperty('--color-sobremi-opacidad-texto', '0.9');
            document.documentElement.style.setProperty('--color-titulo', 'linear-gradient(90deg, #0e1110 0%, rgb(31, 32, 32) 100%)');
            document.documentElement.style.setProperty('--color-texto', '#131d17');
            document.documentElement.style.setProperty('--color-texto-secundario', 'rgba(28, 42, 34, 0.68)');
            document.documentElement.style.setProperty('--color-panel-fondo', '#0a9758');
            document.documentElement.style.setProperty('--color-panel-texto', '#1c2a22');
            document.documentElement.style.setProperty('--color-borde-seleccion', '#b8912a');
            document.documentElement.style.setProperty('--transition-smooth', 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)');
            document.documentElement.style.setProperty('--sombra', 'rgba(60, 50, 20, 0.28)');
            document.documentElement.style.setProperty('--sombra-leve', 'rgba(60, 50, 20, 0.12)');
            document.documentElement.style.setProperty('--filtro-imagen', 'none');
            document.documentElement.style.setProperty('--color-icono', '#ffffff');
            document.documentElement.style.setProperty('--color-encabezado', '#ffffff');
        }
        localStorage.setItem("tema_preferido", tema);
    }

    circulosColores.forEach(circulo => {
        circulo.addEventListener('click', () => {
            const tema = circulo.getAttribute('data-tema');
            aplicarTema(tema);
        });
    });

    const temaGuardado = localStorage.getItem("tema_preferido") || "oscuro";
    aplicarTema(temaGuardado);
    const enlacesNavegacion = document.querySelectorAll('a[href^="#"]');
    
    enlacesNavegacion.forEach(enlace => {
        enlace.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const objetivo = document.querySelector(targetId);
                if (objetivo) {
                    objetivo.scrollIntoView({ behavior: 'smooth' });
                }
            }

            window.history.replaceState(null, null, window.location.pathname);
            if (menuFlotante && menuFlotante.classList.contains('activo')) {
                menuFlotante.classList.remove('activo');
                if (botonMenu) botonMenu.classList.remove('activo');
            }
        });
    });
});

/// Carrusel
document.addEventListener("DOMContentLoaded", () => {
    function crearCarrusel({ pistaId, prevId, nextId, puntosId }) {
      const pista = document.getElementById(pistaId);
      if (!pista) return;
  
      const btnPrev = document.getElementById(prevId);
      const btnNext = document.getElementById(nextId);
      const puntosContainer = document.getElementById(puntosId);
  
      const originales = Array.from(pista.children);
      const total = originales.length;
  
      if (!total) return;
  
      const clones = Math.min(2, total);
      let indice = clones;
      let moviendo = false;
  
      const clonesInicio = originales.slice(-clones).map(el => el.cloneNode(true));
      const clonesFinal = originales.slice(0, clones).map(el => el.cloneNode(true));
  
      clonesInicio.reverse().forEach(el => {
        pista.insertBefore(el, pista.firstChild);
      });
  
      clonesFinal.forEach(el => {
        pista.appendChild(el);
      });
  
      Array.from(pista.children).forEach((tarjeta, i) => {
        tarjeta.addEventListener("click", (e) => {
          if (i !== indice && !moviendo) {
            e.preventDefault();
            e.stopPropagation();
  
            moviendo = true;
            indice = i;
            posicionar(true);
          }
        });
      });
  
      if (puntosContainer) {
        puntosContainer.innerHTML = "";
  
        originales.forEach((_, i) => {
          const punto = document.createElement("div");
          punto.className = "punto";
  
          if (i === 0) {
            punto.classList.add("activo");
          }
  
          punto.addEventListener("click", () => {
            if (moviendo) return;
  
            moviendo = true;
            indice = i + clones;
            posicionar(true);
          });
  
          puntosContainer.appendChild(punto);
        });
      }
  
      const puntos = puntosContainer ? Array.from(puntosContainer.children) : [];
  
      function obtenerTransformX() {
        const transform = getComputedStyle(pista).transform;
        if (!transform || transform === "none") return 0;
        return new DOMMatrix(transform).m41;
      }
  
      function posicionar(conTransicion = true) {
        const tarjeta = pista.children[indice];
        if (!tarjeta) return;
  
        pista.classList.toggle("con-transicion", conTransicion);
  
        const rect = tarjeta.getBoundingClientRect();
        const centroTarjeta = rect.left + rect.width / 2;
        const centroPagina = window.innerWidth / 2;
        const diferencia = centroPagina - centroTarjeta;
        const transformActual = obtenerTransformX();
  
        pista.style.transform = `translate3d(${transformActual + diferencia}px, 0, 0)`;
  
        actualizarEstado();
      }
  
      function actualizarEstado() {
        const tarjetas = Array.from(pista.children);
  
        tarjetas.forEach((tarjeta, i) => {
          tarjeta.classList.toggle("activa", i === indice);
        });
  
        let real = (indice - clones) % total;
        if (real < 0) real += total;
  
        puntos.forEach((punto, i) => {
          punto.classList.toggle("activo", i === real);
        });
      }
  
      function mover(direccion) {
        if (moviendo) return;
        moviendo = true;
        indice += direccion;
        posicionar(true);
      }
  
      function corregirLoop() {
        if (indice >= total + clones) {
          indice = clones;
          posicionar(false);
        }
  
        if (indice < clones) {
          indice = total + clones - 1;
          posicionar(false);
        }
  
        moviendo = false;
      }
  
      pista.addEventListener("transitionend", e => {
        if (e.propertyName !== "transform") return;
        corregirLoop();
      });
  
      if (btnPrev) btnPrev.addEventListener("click", () => mover(-1));
      if (btnNext) btnNext.addEventListener("click", () => mover(1));
  
      let resizeTimer;
      window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => posicionar(false), 100);
      });
  
      requestAnimationFrame(() => posicionar(false));
    }
  
    crearCarrusel({
      pistaId: "pistaCarrusel",
      prevId: "btnPrev",
      nextId: "btnNext",
      puntosId: "indicadoresPuntos"
    });
});

// Boton de subir
const botonSubir = document.querySelector('.subir-arriba');
const seccionInicio = document.querySelector('#inicio');

if (botonSubir) {
    botonSubir.style.display = 'none';
}

window.addEventListener('scroll', () => {
    const alturaMitadInicio = seccionInicio ? (seccionInicio.offsetHeight / 2) : 150;

    if (botonSubir) {
        if (window.scrollY > alturaMitadInicio) {
            botonSubir.style.display = 'flex';
        } else {
            botonSubir.style.display = 'none';
        }
    }
});

// Funcion mail
const urlParams = new URLSearchParams(window.location.search);
const successMessage = document.getElementById('successMessage');

if (urlParams.get('success') === 'true' && successMessage) {
    successMessage.style.display = 'block';

    setTimeout(() => {
        successMessage.style.display = 'none';
        window.history.replaceState({}, document.title, window.location.pathname);
    }, 5000);

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Idioma
document.addEventListener("DOMContentLoaded", () => {
    const traducciones = {
        es: {
            nav_inicio: "Inicio",
            nav_sobremi: "Sobre mí",
            nav_conocimientos: "Conocimientos",
            nav_proyectos: "Proyectos",
            nav_contacto: "Contacto",
            mensaje_exito: '<i class="fas fa-check-circle"></i> ¡El mensaje se envió con éxito!',
            inicio_tag: "Portfolio web",
            inicio_titulo: "Desarrollador de Software",
            sobremi_titulo: "Sobre mí",
            sobremi_p1: "Hola, soy <strong>Josías Omar Olave</strong>, tengo 28 años y soy de Argentina. Cuento con 2 años de experiencia como analista QA y actualmente estoy trabajando como desarrollador de software.",
            sobremi_p2: "Me gradué como Técnico Universitario en Programación en la UTN FRGP y actualmente estoy cursando el último año de la Licenciatura en Tecnologías Digitales en la Universidad de la Ciudad de Buenos Aires.",
            sobremi_p3: "Me apasiona el desarrollo de software, el diseño, la automatización y todo lo relacionado con la tecnología. Soy un autodidacta nativo: esa curiosidad constante me impulsa a investigar por mi cuenta y a meterme de lleno en el mundo de la Inteligencia Artificial para aplicarla en cada proyecto.",
            sobremi_cv: "Ver Currículum vitae",
            conocimientos_titulo: "Conocimientos",
            conocimientos_p: "Cuento con experiencia en desarrollo backend utilizando C++, C#, Java y ASP.NET, frontend con JavaScript, HTML5 y CSS3, y gestión de bases de datos relacionales en SQL Server y MySQL. En mi trayectoria laboral me he especializado en la ejecución de pruebas funcionales, de regresión y automatizadas con Cypress, gestionando incidencias y procesos a través de Azure DevOps, Jira, Control-M, SharePoint y Git.",
            conocimientos_btn_github: "Ver GitHub",
            card_dev_tools: "Herramientas de Desarrollo",
            card_databases: "Bases de datos",
            card_tech_tools: "Herramientas y Tecnologías",
            proyectos_titulo: "Proyectos",
            btn_mas_info: "Más información",
            p1_titulo: "Home Banking",
            p1_desc: "Home Banking para un banco ficticio cuya funcionalidad es crear un usuario donde el administrador podrá aprobarte para pedir cuentas, préstamos y realizar transferencias. Proyecto final de Laboratorio 4 con Java + MySQL.",
            p2_titulo: "Bot de Atención & Soporte",
            p2_desc: "Bot de atención al cliente, ventas y soporte en Node.js. Automatiza flujos de navegación, envío de archivos y derivación por mail. Ofrece atención integrada por WhatsApp y chat web (API REST), containerizado en Docker y desplegado en Azure Container Apps.",
            p3_titulo: "Diseño de página web",
            p3_desc: "Diseño y desarrollo de una página web responsive para una empresa de ciberseguridad hecho con HTML5, CSS3 Y JavaScript.",
            p4_titulo: "Carlos Duty Zombies",
            p4_desc: "Juego shooter estilo top-down realizado en C++ con SFML. Proyecto final de Laboratorio de Computación II.",
            p5_titulo: "Irwin's Revenge",
            p5_desc: "Juego de dados desarrollado en C++ como proyecto evaluativo en Laboratorio de Computación I. Aplicando principios de programación estructurada.",
            p6_titulo: "Carrito de compras",
            p6_desc: "Página web de compras en C# en .NET Framework con integración de API de Mercado Pago. Proyecto final integrador de Programación 3.",
            p7_titulo: "Inmobiliaria",
            p7_desc: "Página web de una inmobiliaria con sistema de favoritos y gestión de inmuebles por parte del administrador. Proyecto final de Programación 3 con C# .NET + SQL Server.",
            contacto_titulo: "Contacto",
            info_mail: "MAIL",
            info_tel: "TELÉFONO",
            form_hablemos: "Hablemos",
            form_btn: '<i class="fa-solid fa-envelope"></i> Enviar mensaje',
            ph_nombre: "Nombre completo",
            ph_email: "Correo electrónico",
            ph_mensaje: "Escribe tu mensaje aquí..",
            footer_desc: "Desarrollador de Software & Analista QA enfocado en el desarrollo backend, frontend y la automatización de pruebas.",
            footer_menu: "Menú",
            footer_contacto: "Contacto",
            footer_ubicacion: '<i class="fa-solid fa-location-dot icono-contacto"></i>Buenos Aires, Argentina',
            footer_rights: "© 2026 Josías Omar Olave. Todos los derechos reservados."
        },
        en: {
            nav_inicio: "Home",
            nav_sobremi: "About me",
            nav_conocimientos: "Skills",
            nav_proyectos: "Projects",
            nav_contacto: "Contact",
            mensaje_exito: '<i class="fas fa-check-circle"></i> Message sent successfully!',
            inicio_tag: "Web Portfolio",
            inicio_titulo: "Software Developer",
            sobremi_titulo: "About me",
            sobremi_p1: "Hi, I'm <strong>Josías Omar Olave</strong>, 28 years old from Argentina. I have 2 years of experience as a QA Analyst and I am currently working as a Software Developer.",
            sobremi_p2: "I graduated as a University Technician in Programming from UTN FRGP and I am currently in my final year of a Bachelor's Degree in Digital Technologies at UNICABA.",
            sobremi_p3: "I'm passionate about software development, design, automation, and everything technology-related. I am a native self-taught learner: that constant curiosity drives me to research on my own and dive deep into Artificial Intelligence to apply it to every project.",
            sobremi_cv: "View Resume",
            conocimientos_titulo: "Skills",
            conocimientos_p: "I have experience in backend development using C++, C#, Java, and ASP.NET, frontend with JavaScript, HTML5, and CSS3, and relational database management in SQL Server and MySQL. Throughout my career, I have specialized in functional, regression, and automated testing with Cypress, managing issues and workflows through Azure DevOps, Jira, Control-M, SharePoint, and Git.",
            conocimientos_btn_github: "View GitHub",
            card_dev_tools: "Development Tools",
            card_databases: "Databases",
            card_tech_tools: "Tools & Technologies",
            proyectos_titulo: "Projects",
            btn_mas_info: "Learn more",
            p1_titulo: "Home Banking",
            p1_desc: "Home Banking system for a mock bank allowing users to request accounts, loans, and make transfers upon admin approval. Final project for Computing Lab 4 using Java + MySQL.",
            p2_titulo: "Customer Care & Support Bot",
            p2_desc: "Multichannel Support Bot (Node.js): Automates sales and support flows via WhatsApp and web chat. Built with Node.js, containerized in Docker, and deployed on Azure.",
            p3_titulo: "Website Design",
            p3_desc: "Responsive website design and development for a cybersecurity firm using HTML5, CSS3, and JavaScript.",
            p4_titulo: "Carlos Duty Zombies",
            p4_desc: "Top-down shooter game built in C++ using SFML. Final project for Computing Lab II.",
            p5_titulo: "Irwin's Revenge",
            p5_desc: "Dice game developed in C++ as an evaluation project for Computing Lab I, applying structured programming principles.",
            p6_titulo: "E-commerce Shopping Cart",
            p6_desc: "E-commerce web application built in C# with .NET Framework and Mercado Pago API integration. Final capstone project for Programming 3.",
            p7_titulo: "Real Estate Portal",
            p7_desc: "Real estate platform with favorites system and admin property management. Final project for Programming 3 with C# .NET + SQL Server.",
            contacto_titulo: "Contact",
            info_mail: "EMAIL",
            info_tel: "PHONE",
            form_hablemos: "Let's talk",
            form_btn: '<i class="fa-solid fa-envelope"></i> Send message',
            ph_nombre: "Full name",
            ph_email: "Email address",
            ph_mensaje: "Write your message here..",
            footer_desc: "Software Developer & QA Analyst focused on backend/frontend development and test automation.",
            footer_menu: "Menu",
            footer_contacto: "Contact",
            footer_ubicacion: '<i class="fa-solid fa-location-dot icono-contacto"></i>Buenos Aires, Argentina',
            footer_rights: "© 2026 Josías Omar Olave. All rights reserved."
        }
    };

    const botonesIdioma = document.querySelectorAll(".selector-idioma button");

    function cambiarIdioma(lang) {
        botonesIdioma.forEach(btn => {
            btn.classList.toggle("activo", btn.dataset.lang === lang);
        });
        document.documentElement.lang = lang;
        
        document.querySelectorAll("[data-i18n]").forEach(elem => {
            const clave = elem.dataset.i18n;
            if (traducciones[lang] && traducciones[lang][clave]) {
                elem.innerHTML = traducciones[lang][clave];
            }
        });

        document.querySelectorAll("[data-i18n-ph]").forEach(elem => {
            const clave = elem.dataset.i18nPh;
            if (traducciones[lang] && traducciones[lang][clave]) {
                elem.placeholder = traducciones[lang][clave];
            }
        });
        localStorage.setItem("idioma_preferido", lang);
    }

    botonesIdioma.forEach(btn => {
        btn.addEventListener("click", () => {
            const lang = btn.dataset.lang;
            cambiarIdioma(lang);
        });
    });
    const idiomaNavegador = navigator.language || navigator.userLanguage;
    const idiomaPorDefecto = idiomaNavegador.startsWith("en") ? "en" : "es";
    const idiomaInicial = localStorage.getItem("idioma_preferido") || idiomaPorDefecto;

    cambiarIdioma(idiomaInicial);
});