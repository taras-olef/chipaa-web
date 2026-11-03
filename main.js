// «¿Qué hace Chipaa?»: cada tarjeta enseña su captura en el móvil, y pasan solas cada 5 s
// hasta que el usuario toca una. Con «reducir movimiento», no pasan solas.
const features = [...document.querySelectorAll(".feature")];
const dots = [...document.querySelectorAll(".dot")];
const shot = document.getElementById("feature-shot");
let current = 0;
let timer;

function show(index) {
  current = index;
  const feature = features[index];
  features.forEach((f, i) => f.classList.toggle("is-active", i === index));
  dots.forEach((d, i) => d.classList.toggle("is-active", i === index));
  shot.style.opacity = "0";
  setTimeout(() => {
    shot.src = feature.dataset.shot;
    shot.alt = feature.dataset.alt;
    shot.onload = () => (shot.style.opacity = "1");
  }, 180);
}

function stop() {
  clearInterval(timer);
}

[...features, ...dots].forEach((el) =>
  el.addEventListener("click", () => {
    stop();
    show(Number(el.dataset.index));
  })
);

if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  timer = setInterval(() => show((current + 1) % features.length), 5000);
}

// Enlaces de las tiendas: cuando la app esté publicada, se rellenan aquí y los botones llevan a su ficha.
const storeLinks = {
  ios: "",     // p. ej. https://apps.apple.com/es/app/chipaa/id…
  android: "", // p. ej. https://play.google.com/store/apps/details?id=app.getchipa.android
};
document.querySelectorAll("[data-store]").forEach((a) => {
  const url = storeLinks[a.dataset.store];
  if (url) {
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener";
  }
});
