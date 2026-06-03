const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

document.getElementById('openBtn').addEventListener('click', () => {
    sidebar.classList.add('open');
    overlay.classList.add('active');
});

document.getElementById('closeBtn').addEventListener('click', cerrar);
overlay.addEventListener('click', cerrar);

function cerrar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
}
const seccionesIzq = document.querySelectorAll('.aparece');
const seccionesDer = document.querySelectorAll('.aparece-derecha');
const todasLasSecciones = [...seccionesIzq, ...seccionesDer];

const observerAnimaciones = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

todasLasSecciones.forEach(seccion => observerAnimaciones.observe(seccion));

//reloj
function moverReloj() {
  const ahora = new Date();
  const seg = ahora.getSeconds();
  const min = ahora.getMinutes();
  const hor = ahora.getHours() % 12;

  const gradSeg = seg * 6;
  const gradMin = min * 6 + seg * 0.1;
  const gradHor = hor * 30 + min * 0.5;

  document.getElementById('segundos').style.transform = `rotate(${gradSeg}deg)`;
  document.getElementById('minutos').style.transform = `rotate(${gradMin}deg)`;
  document.getElementById('horas').style.transform = `rotate(${gradHor}deg)`;
}

moverReloj();
setInterval(moverReloj, 1000);


//contador
const contadores = document.querySelectorAll('.contador');

contadores.forEach(contador => {
  const objetivo = +contador.dataset.objetivo;
  const duracion = 2000;
  const intervalo = 20;
  const pasos = duracion / intervalo;
  const incremento = objetivo / pasos;
  let actual = 0;

  const timer = setInterval(() => {
    actual += incremento;
    if (actual >= objetivo) {
      contador.textContent = '+' + objetivo;
      clearInterval(timer);
    } else {
      contador.textContent = '+' + Math.floor(actual);
    }
  }, intervalo);
});