# Chipaa · web

Página de la app Chipaa: busca un producto en varias tiendas y te enseña las ofertas ordenadas por precio total, con el envío incluido.

- **Stack**: Vite + React + Tailwind 4 + componentes de [shadcn/ui](https://ui.shadcn.com) (estilo `base-nova`, sobre Base UI): botón, tarjeta, acordeón, carrusel, panel lateral, etiqueta y separador.
- **MCP de shadcn**: configurado en `.mcp.json` (`npx shadcn@latest mcp`). Al abrir el repo con Claude Code, el asistente puede buscar y añadir componentes del registro.
- **Publicación**: GitHub Actions (`.github/workflows/pages.yml`) compila y sube `dist/` a GitHub Pages en cada push a `main`: https://chipaa.club (dominio propio en Cloudflare; `public/CNAME`)
- **Colores**: los de la app (`src/index.css`, tema de shadcn con los tokens de Chipaa).
- **Tiendas**: cuando las apps estén publicadas, rellenar `storeLinks` en `src/site.ts`.
- **Legal y soporte**: HTML estático en `public/` → chipaa.club/privacidad.html, /terminos.html, /eliminar-cuenta.html, /soporte.html

```bash
npm install
npm run dev
```
