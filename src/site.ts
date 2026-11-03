// Datos de la web en un solo sitio: enlaces de las tiendas, web legal y contacto.

/** Rutas de `public/` con la base de GitHub Pages (`/chipaa-web/`). */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

/**
 * Fichas de las apps. Mientras estén vacías, los botones llevan a la zona de descarga con «Muy pronto».
 * Cuando se publiquen: https://apps.apple.com/es/app/chipaa/id… y
 * https://play.google.com/store/apps/details?id=app.getchipa.android
 */
export const storeLinks = {
  ios: "",
  android: "",
}

// Páginas legales y de soporte: HTML estático en public/, en el mismo dominio (chipaa.club).
// Son las URLs que usan las apps y las fichas de App Store y Google Play.
export const links = {
  support: "/soporte.html",
  privacy: "/privacidad.html",
  terms: "/terminos.html",
  deleteAccount: "/eliminar-cuenta.html",
  contact: "mailto:taras.ole9@gmail.com?subject=Chipaa",
}

export const nav = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#alertas", label: "Alertas" },
  { href: "#preguntas", label: "Preguntas" },
  { href: links.support, label: "Soporte" },
]
