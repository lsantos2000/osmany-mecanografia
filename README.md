# Osmany Mecanografía

Sitio web profesional de **Osmany Santos Macías**, servicio de mecanografía y preparación de documentos en Cienfuegos, Cuba.

Professional website for **Osmany Santos Macías**, a typing and document-preparation service in Cienfuegos, Cuba.

---

## Español

### Acerca del proyecto

El sitio presenta los servicios, el perfil profesional, el proceso de trabajo, una tarjeta de contacto y la información pública del negocio en una experiencia editorial adaptable a computadoras y teléfonos.

### Páginas

- `/` — Inicio y propuesta de valor
- `/servicios` — Mecanografía, documentos, formato y apoyo documental
- `/sobre-osmany` — Perfil y fuentes públicas
- `/proceso` — Proceso detallado, preparación y criterios de calidad
- `/tarjeta` — Tarjeta de presentación y contacto
- `/contacto` — Teléfono, correo, dirección y horario publicado

### Fuentes y precisión

La información de contacto, ubicación, horario y actividad profesional procede de fuentes públicas consultadas en julio de 2026. Los servicios, precios, plazos y disponibilidad deben confirmarse directamente con Osmany. El sitio no ofrece asesoría legal ni representación oficial.

### Desarrollo local

Requiere Node.js 22.13 o posterior.

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

### Validación

```bash
npm run build
```

### Publicación en Cloudflare Pages

```bash
npx wrangler login
npx wrangler pages project create osmany-mecanografia
npx wrangler pages deploy work/pages-dist --project-name osmany-mecanografia --branch main
```

---

## English

### About the project

This website presents the services, professional profile, working process, contact card, and public business information in a responsive editorial experience for desktop and mobile.

### Pages

- `/` — Home and value proposition
- `/servicios` — Typing, documents, formatting, and document support
- `/sobre-osmany` — Professional profile and public sources
- `/proceso` — Detailed workflow, preparation, and quality standards
- `/tarjeta` — Business card and contact details
- `/contacto` — Phone, email, address, and published hours

### Sources and accuracy

Contact details, location, hours, and professional activity come from public sources reviewed in July 2026. Services, pricing, delivery times, and availability must be confirmed directly with Osmany. The website does not provide legal advice or official representation.

### Local development

Node.js 22.13 or later is required.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Validation

```bash
npm run build
```

### Deploy to Cloudflare Pages

```bash
npx wrangler login
npx wrangler pages project create osmany-mecanografia
npx wrangler pages deploy work/pages-dist --project-name osmany-mecanografia --branch main
```

## Technology

- React 19
- Next.js-compatible routing via vinext
- TypeScript
- Tailwind CSS 4
- Cloudflare deployment output

## Publicación automática / Automated publishing

Desde PowerShell, ejecute el siguiente comando en la raíz del proyecto. El script compila, confirma y empuja los cambios a GitHub, crea el proyecto de Cloudflare Pages solo cuando no existe y, en ejecuciones posteriores, publica una actualización.

From PowerShell, run the following command in the project root. The script builds, commits and pushes changes to GitHub, creates the Cloudflare Pages project only when it does not exist, and deploys updates on later runs.

```powershell
.\scripts\publish.ps1
```

Mensaje de commit personalizado / Custom commit message:

```powershell
.\scripts\publish.ps1 -CommitMessage "Actualizar contenido"
```

## Contact

- Phone: `(043) 524229`
- Email: `osmcfg1966@gmail.com`
- Address: Ave. 64 No. 3508, Cienfuegos, Cuba 55100
