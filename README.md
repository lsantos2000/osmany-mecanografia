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
- `/cienfuegos` — Orgullo cienfueguero y fotografías compartidas por Osmany
- `/otros-servicios` — Digitalización, formularios, restauración y modelos de oficina
- `/tarifas` — Factores que determinan el precio y solicitud de cotización

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

Cloudflare Pages es una buena opción para alojar este sitio con HTTPS y una dirección `pages.dev`. Puede utilizarse sin costo mientras el uso permanezca dentro de los límites del plan gratuito. Consulte siempre la [información oficial de precios y límites](https://developers.cloudflare.com/pages/functions/pricing/).

#### 1. Crear una cuenta gratuita

1. Visite [dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up).
2. Regístrese con su correo electrónico y una contraseña segura.
3. Confirme el correo cuando Cloudflare se lo solicite.
4. Regrese a esta carpeta en PowerShell e inicie sesión desde Wrangler:

```powershell
npx wrangler login
npx wrangler whoami
```

El primer comando abre el navegador para autorizar su cuenta. El segundo confirma qué cuenta está activa.

#### 2. Instalar y compilar

Ejecute estos comandos desde la raíz del proyecto:

```powershell
npm install
npm run build
```

#### 3. Preparar la carpeta de Cloudflare Pages

Este proyecto genera archivos de cliente y servidor. Los siguientes comandos preparan ambos y añaden el Worker encargado de servir correctamente el CSS y las imágenes:

```powershell
$pagesOutput = Join-Path (Get-Location) "work\pages-dist"
if (Test-Path -LiteralPath $pagesOutput) {
  Remove-Item -LiteralPath $pagesOutput -Recurse -Force
}
New-Item -ItemType Directory -Path $pagesOutput | Out-Null
Copy-Item -Path "dist\client\*" -Destination $pagesOutput -Recurse -Force
Copy-Item -Path "dist\server\*" -Destination $pagesOutput -Recurse -Force
Copy-Item -LiteralPath "pages-worker.js" -Destination (Join-Path $pagesOutput "_worker.js") -Force

if (Test-Path -LiteralPath ".wrangler\deploy\config.json") {
  Move-Item -LiteralPath ".wrangler\deploy\config.json" -Destination "work\vinext-wrangler-redirect.json" -Force
}
```

#### 4. Crear el sitio — solo la primera vez

```powershell
npx wrangler pages project create osmany-mecanografia --production-branch main
```

Si Cloudflare indica que el proyecto ya existe, no repita este paso. Continúe con la publicación.

#### 5. Publicar o actualizar

```powershell
npx wrangler pages deploy work/pages-dist --project-name osmany-mecanografia --branch main
```

El mismo comando sirve para todas las actualizaciones futuras. Después de cambiar el sitio, repita los pasos 2, 3 y 5. La dirección principal será [osmany-mecanografia.pages.dev](https://osmany-mecanografia.pages.dev/).

Documentación oficial: [publicación directa con Wrangler](https://developers.cloudflare.com/pages/get-started/direct-upload/).

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
- `/cienfuegos` — Osmany's connection to Cienfuegos and his city photographs
- `/otros-servicios` — Digitization, forms, photo restoration, and office templates
- `/tarifas` — Pricing factors and quote requests

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

Cloudflare Pages can host this site with HTTPS and a `pages.dev` address at no cost while usage remains within the Free plan limits. See the [official pricing and limits](https://developers.cloudflare.com/pages/functions/pricing/) and the [Direct Upload documentation](https://developers.cloudflare.com/pages/get-started/direct-upload/).

Create a free account at [dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up), then authenticate and verify the active account:

```powershell
npx wrangler login
npx wrangler whoami
```

Follow the Spanish PowerShell preparation steps above, then create the Pages project once:

```powershell
npx wrangler pages project create osmany-mecanografia --production-branch main
```

Deploy the first version and all later updates with:

```powershell
npx wrangler pages deploy work/pages-dist --project-name osmany-mecanografia --branch main
```

## Technology

- React 19
- Next.js-compatible routing via vinext
- TypeScript
- Tailwind CSS 4
- Cloudflare deployment output

## Contact

- Phone: `+53 5312 5866`
- Email: `osmcfg1966@gmail.com`
- Address: Ave. 64 No. 3508, Cienfuegos, Cuba 55100
