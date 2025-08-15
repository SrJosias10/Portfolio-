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

//fondo

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.155.0/build/three.module.js';

// Crear el contenedor del canvas y añadirlo al body
const container = document.createElement('div');
container.style.position = 'fixed';
container.style.top = 0;
container.style.left = 0;
container.style.width = '100%';
container.style.height = '100%';
container.style.zIndex = '-1'; // atrás de todo
document.body.appendChild(container);

// Vertex shader
const vertexShader = `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

// Fragment shader
const fragmentShader = `
  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_mouse;

  const int octaves = 6;
  const float seed = 43758.5453123;

  vec2 random2(vec2 st, float seed){
    st = vec2(dot(st,vec2(127.1,311.7)), dot(st,vec2(269.5,183.3)));
    return -1.0 + 2.0*fract(sin(st)*seed);
  }

  float noise(vec2 st, float seed){
    vec2 i = floor(st);
    vec2 f = fract(st);
    vec2 u = f*f*(3.0-2.0*f);
    return mix(
      mix(dot(random2(i + vec2(0.0,0.0), seed), f - vec2(0.0,0.0)),
          dot(random2(i + vec2(1.0,0.0), seed), f - vec2(1.0,0.0)), u.x),
      mix(dot(random2(i + vec2(0.0,1.0), seed), f - vec2(0.0,1.0)),
          dot(random2(i + vec2(1.0,1.0), seed), f - vec2(1.0,1.0)), u.x),
      u.y
    );
  }

  float fbm1(in vec2 _st, float seed){
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    for (int i = 0; i < octaves; ++i){
      v += a * noise(_st, seed);
      _st = rot * _st * 2.0 + shift;
      a *= 0.4;
    }
    return v;
  }

  float pattern(vec2 uv, float seed, float time, inout vec2 q, inout vec2 r){
      q = vec2(fbm1(uv, seed), fbm1(uv + vec2(5.2,1.3), seed));
      r = vec2(fbm1(uv + 4.0*q + vec2(1.7 - time/3.,9.2), seed),
               fbm1(uv + 4.0*q + vec2(8.3 - time/4.,2.8), seed));
      vec2 s = vec2(fbm1(uv + 4.0*r + vec2(21.7 - time/2.,90.2), seed),
                    fbm1(uv + 4.0*r + vec2(80.3 - time/3.,20.8), seed));
      vec2 t = vec2(fbm1(uv + 4.0*s + vec2(121.7 - time/4.,190.2), seed),
                    fbm1(uv + 4.0*s + vec2(280.3 - time/5.,120.8), seed));
      float rtn = fbm1(uv + 4.0*t, seed) * 1.5;
      return clamp(rtn, 0., .6);
  }

  void main(){
    vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y;
    uv *= 1. + dot(uv, uv)*.3;

    float speed = 0.002 + (u_mouse.x / u_resolution.x) * 0.01;
    float time = u_time * speed;

    float angle = time;
    mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    uv = rot * uv;

    vec2 q = vec2(0.0);
    vec2 r = vec2(0.0);
    vec3 color = vec3(pattern(uv, seed, time, q, r));

    color.r *= 0.2;  // rojo bajo
    color.g *= 1.2;  // verde moderado
    color.b *= 1.4;  // azul máximo
    color *= 0.9;

    gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
  }
`;

// Configuración de Three.js
const scene = new THREE.Scene();
const camera = new THREE.Camera();
camera.position.z = 1;

const geometry = new THREE.PlaneGeometry(2, 2);

const uniforms = {
  u_time: { value: 0.0 },
  u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
  u_mouse: { value: new THREE.Vector2(0,0) }
};

const material = new THREE.ShaderMaterial({
  uniforms,
  vertexShader,
  fragmentShader
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// Actualizar resolución al redimensionar
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  uniforms.u_resolution.value.x = renderer.domElement.width;
  uniforms.u_resolution.value.y = renderer.domElement.height;
});

// Seguimiento suave del mouse
const targetMouse = new THREE.Vector2(0, 0);

document.addEventListener('mousemove', e => {
  targetMouse.x = e.clientX;
  targetMouse.y = window.innerHeight - e.clientY;
});

// Animación
function animate(){
  requestAnimationFrame(animate);

  // interpolación suave (0.05 = lentitud)
  uniforms.u_mouse.value.x += (targetMouse.x - uniforms.u_mouse.value.x) * 0.015;
  uniforms.u_mouse.value.y += (targetMouse.y - uniforms.u_mouse.value.y) * 0.015;

  uniforms.u_time.value += 0.7;
  renderer.render(scene, camera);
}
animate();

