# Consultoría Bastías — Sitio Astro

Sitio web profesional construido con **Astro + Markdown + Formspree**.

## Stack
- **Framework**: Astro 4
- **Estilos**: CSS puro con variables (sin frameworks)
- **Blog**: Markdown via Astro Content Collections
- **Formularios**: Formspree
- **Tipografías**: Cormorant Garamond + Jost (Google Fonts)
- **Deploy sugerido**: Netlify / Vercel / Cloudflare Pages

---

## 1. Instalación

```bash
npm install
```

## 2. Desarrollo local

```bash
npm run dev
```

Abre http://localhost:4321

## 3. Build para producción

```bash
npm run build
npm run preview
```

---

## Estructura del proyecto

```
consultoria-bastias/
├── public/
│   ├── images/          ← TUS IMÁGENES VAN AQUÍ
│   │   ├── Logo-CB-white.webp
│   │   ├── favicon.png
│   │   ├── alejandra-bastias.webp
│   │   ├── consultoria-bastias.webp
│   │   ├── unidos-hacemos-mas.webp
│   │   ├── concurso-de-ventas.webp
│   │   ├── psicologia-en-ventas.webp
│   │   ├── formas-de-acompanamiento.webp
│   │   └── blog/
│   │       └── (imágenes de blog)
│   └── cv.pdf           ← Curriculum Vitae
│
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   └── WhatsappFloat.astro
│   ├── content/
│   │   ├── config.ts
│   │   └── blog/        ← ARTÍCULOS DE BLOG (archivos .md)
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro  ← Homepage
│   │   ├── 404.astro
│   │   └── blog/
│   │       ├── index.astro   ← Lista del blog
│   │       └── [slug].astro  ← Post individual
│   └── styles/
│       └── global.css
│
└── astro.config.mjs
```

---

## Imágenes — qué poner en public/images/

Copia tus imágenes exactamente con estos nombres (o cambia los src en el código):

| Archivo | Uso |
|---|---|
| `Logo-CB-white.webp` | Logo en navbar y footer |
| `favicon.png` | Ícono de pestaña |
| `alejandra-bastias.webp` | Foto en sección "Quién Soy" |
| `consultoria-bastias.webp` | Galería |
| `unidos-hacemos-mas.webp` | Galería |
| `concurso-de-ventas.webp` | Galería |
| `psicologia-en-ventas.webp` | Galería |
| `formas-de-acompanamiento.webp` | Galería |
| `cv.pdf` | CV descargable |

Las imágenes de blog van en `public/images/blog/` y se referencian en cada archivo .md.

---

## Cómo agregar artículos de blog

Crea un archivo `.md` en `src/content/blog/`:

```markdown
---
title: "Título del artículo"
description: "Descripción corta (para SEO y tarjeta)"
pubDate: 2026-01-15
image: "/images/blog/mi-imagen.webp"
tags: ["liderazgo", "equipos"]
---

Contenido del artículo en Markdown...
```

El nombre del archivo se convierte en la URL: `liderazgo-cuello-de-botella.md` → `/blog/liderazgo-cuello-de-botella`

---

## Colores del sitio (CSS Variables)

```css
--color-dark: #0d1117         /* Fondo principal */
--color-blue: #1e3a5f         /* Sección "Con quiénes trabajo" */
--color-accent: #c9a96e       /* Dorado - color de acento */
--color-white: #f5f1eb        /* Texto claro */
```

Para cambiar colores, edita `src/styles/global.css` en la sección `:root`.

---

## Formspree (formulario de contacto)

Si querés agregar un formulario de contacto:

1. Crea cuenta en https://formspree.io
2. Crea un formulario y copia el `action` URL
3. Agrega este HTML donde quieras el formulario:

```html
<form action="https://formspree.io/f/TU-ID-AQUI" method="POST" class="contact-form">
  <div class="form-group">
    <label for="name">Nombre</label>
    <input type="text" id="name" name="name" required />
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required />
  </div>
  <div class="form-group">
    <label for="message">Mensaje</label>
    <textarea id="message" name="message" required></textarea>
  </div>
  <button type="submit" class="btn btn-solid">Enviar</button>
</form>
```

---

## Deploy en Netlify

1. Sube el proyecto a GitHub
2. Conecta el repo en https://netlify.com
3. Build command: `npm run build`
4. Publish directory: `dist`

---

## Google Tag Manager

El GTM-KNJHW2RP ya está configurado en `src/layouts/Layout.astro`.
Para cambiar el ID, busca `GTM-KNJHW2RP` en ese archivo.
