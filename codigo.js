////////////  Boton links   /////////////

document.getElementById('menu-toggle').addEventListener('click', function() {
    const menuLinks = document.getElementById('menu-links');
    menuLinks.classList.toggle('show');
});

const menuLinks = document.querySelectorAll('.linksmenu');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menu-links').classList.remove('show');
    });
});
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu-links');
    const toggle = document.getElementById('menu-toggle');
    
    if (!menu.contains(event.target) && !toggle.contains(event.target) && menu.classList.contains('show')) {
        menu.classList.remove('show');
    }
});
  
////////////  Boton de subir   /////////////

const botonSubir = document.querySelector('.subir-arriba');
const seccionOpciones = document.querySelector('#opciones');

window.addEventListener('scroll', () => {
    const seccionBottom = seccionOpciones.getBoundingClientRect().bottom;
    if (seccionBottom < 0) {
        botonSubir.style.display = 'flex';
    } else {
        botonSubir.style.display = 'none';
    }
});
botonSubir.style.display = 'none';


////////////// carrusel ///////////////////

const carruseles = document.querySelectorAll('.carousel');

carruseles.forEach(carrusel => {
  const imgs = Array.from(carrusel.children);

  imgs.forEach(img => {
    const clone = img.cloneNode(true);
    carrusel.appendChild(clone);
  });

  let desplazamiento = 0;

  function moverCarrusel() {
    desplazamiento += 1;
    if (desplazamiento >= carrusel.scrollWidth / 2) {
      desplazamiento = 0;
    }
    carrusel.scrollLeft = desplazamiento;
    requestAnimationFrame(moverCarrusel);
  }

  moverCarrusel();
});

///////////////////////// objeto de fondo con three.js //////////////////////////
import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';


const camera = new THREE.PerspectiveCamera(
    10,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 40;
const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container3D').appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(ambientLight);

const topLight = new THREE.DirectionalLight(0xffffff, 2.5);
topLight.position.set(50, 50, 50);
scene.add(topLight);

let computadora;
let mixer;

const loader = new GLTFLoader();
loader.load('carpeta/compu.glb',
    function (gltf) {
        computadora = gltf.scene;

        const box = new THREE.Box3().setFromObject(computadora);
        const center = box.getCenter(new THREE.Vector3());
        computadora.position.sub(center);
        computadora.scale.set(0.01, 0.01, 0.01);

        scene.add(computadora);
    },
    undefined,
    function (error) {
        console.error(error);
    }
);

let arrPositionModel = [
    {
        id: 'presentacion',
        position: { x: 0, y: -3, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        scale: { x: 0.010, y: 0.010, z: 0.010 }
    },
    {
        id: "sobremi",
        position: { x: -4, y: -2, z: 0 },
        rotation: { x: 0.4, y: 0.6, z: 0.2 },
        scale: { x: 0.014, y: 0.014, z: 0.014 }
    },
    {
        id: "sobremi2",
        position: { x: -4, y: 1, z: 0 },
        rotation: { x: 0.8, y: 0.8, z: 0 },
        scale: { x: 0.014, y: 0.014, z: 0.014 }
    },
    {
        id: "conocimiento",
        position: { x: 4, y: 1, z: 0 },
        rotation: { x: 0.6, y: -0.2, z: 0 },
        scale: { x: 0.010, y: 0.010, z: 0.010 }
    },
    {
        id: "conocimiento2",
        position: { x: 4, y: 0, z: 0 },
        rotation: { x: 0.6, y: -0.3, z: 0 },
        scale: { x: 0.010, y: 0.010, z: 0.010 }
    },
    {
        id: "proyectos",
        position: { x: -4, y: 3.8, z: 0 },
        rotation: { x: 0.6, y: -0.6, z: -0.1},
        scale: { x: 0.05, y: 0.05, z: 0.05 }
    },
    {
        id: "proyectos1",
        position: { x: -4, y: 3.6, z: 0 },
        rotation: { x: 0.6, y: -0.6, z: -0.1},
        scale: { x: 0.05, y: 0.05, z: 0.05 }
    },
    {
        id: "proyectos2",
        position: { x: -4, y: 3.4, z: 0 },
        rotation: { x: 0.6, y: -0.6, z: -0.1},
        scale: { x: 0.05, y: 0.05, z: 0.05 }
    },
    {
        id: "proyectosUlt",
        position: { x: -4, y: 3.2, z: 0 },
        rotation: { x: 0.6, y: -0.6, z: -0.1},
        scale: { x: 0.05, y: 0.05, z: 0.05 }
    },
    {
        id: "contacto",
        position: { x: 3, y: 0, z: 0 },
        rotation: { x: 1, y: -0.4, z: 0.2 },
        scale: { x: 0.013, y: 0.013, z: 0.013 }
    },
    {
        id: "contacto1",
        position: { x: 4, y: 1, z: 0 },
        rotation: { x: 0.8, y: -0.6, z: 0 },
        scale: { x: 0.013, y: 0.013, z: 0.013 }
    }
    
];

let scrollY = 0;
let targetScrollY = 0;

window.addEventListener('scroll', () => {
    targetScrollY = window.scrollY;
});

function updateModelByScroll(scrollPos) {
    if (!computadora) return;

    const totalScroll = document.body.scrollHeight - window.innerHeight;
    const t = scrollPos / totalScroll;

    const numSections = arrPositionModel.length - 1;
    const sectionFloat = t * numSections;

    const index = Math.floor(sectionFloat);
    const nextIndex = Math.min(index + 1, arrPositionModel.length - 1);
    const localT = sectionFloat - index;

    const from = arrPositionModel[index];
    const to = arrPositionModel[nextIndex];

    if (from && to) {
        computadora.position.x = THREE.MathUtils.lerp(from.position.x, to.position.x, localT);
        computadora.position.y = THREE.MathUtils.lerp(from.position.y, to.position.y, localT);
        computadora.position.z = THREE.MathUtils.lerp(from.position.z, to.position.z, localT);

        computadora.rotation.x = THREE.MathUtils.lerp(from.rotation.x, to.rotation.x, localT);
        computadora.rotation.y = THREE.MathUtils.lerp(from.rotation.y, to.rotation.y, localT);
        computadora.rotation.z = THREE.MathUtils.lerp(from.rotation.z, to.rotation.z, localT);

        computadora.scale.x = THREE.MathUtils.lerp(from.scale.x, to.scale.x, localT);
        computadora.scale.y = THREE.MathUtils.lerp(from.scale.y, to.scale.y, localT);
        computadora.scale.z = THREE.MathUtils.lerp(from.scale.z, to.scale.z, localT);
    }
}

// Render loop
const reRender3D = () => {
    requestAnimationFrame(reRender3D);
    scrollY += (targetScrollY - scrollY) * 0.08;
    updateModelByScroll(scrollY);
    renderer.render(scene, camera);

    if (mixer) mixer.update(0.02);
};
reRender3D();

// Resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

//Boton cambiar modo nocturno-claro

document.addEventListener('DOMContentLoaded', function() {
    const modoNocturnoClaro = document.getElementById('modo-nocturno-claro');
    const icono = modoNocturnoClaro.querySelector('i');
    
    // Guarda lo seleccionado 
    const savedTheme = localStorage.getItem('tema');
    if (savedTheme === 'modo-oscuro') {
        document.body.classList.add('modo-oscuro');
        icono.classList.remove('fa-moon');
        icono.classList.add('fa-sun');
    }
    
    // funcion para cambiar el tema
    modoNocturnoClaro.addEventListener('click', function() {
        document.body.classList.toggle('modo-oscuro');
        
        if (document.body.classList.contains('modo-oscuro')) {
            localStorage.setItem('tema', 'modo-oscuro');
            icono.classList.remove('fa-moon');
            icono.classList.add('fa-sun');
        } else {
            localStorage.setItem('tema', 'modo-claro');
            icono.classList.remove('fa-sun');
            icono.classList.add('fa-moon');
        }
    });
});

//funcion para  mail
const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        successMessage.style.display = 'block';

        setTimeout(() => {
            successMessage.style.display = 'none';
            window.history.replaceState({}, document.title, window.location.pathname);
        }, 5000);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


