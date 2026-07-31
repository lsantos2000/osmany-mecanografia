import Link from "next/link";
import {PageHero,ServiceIcon,Shell} from "../site";

const items=[
  ["01","Mecanografía y transcripción","Paso de manuscritos o impresos a un formato digital legible, en máquina de escribir o computadora.","Textos manuscritos · Copias · Cartas · Trabajos personales"],
  ["02","Preparación de documentos","Composición clara de materiales que necesitan una presentación formal.","Currículos · Solicitudes · Formularios · Listados"],
  ["03","Formato y revisión básica","Orden visual y detección de inconsistencias evidentes; no sustituye revisión especializada.","Espaciado · Jerarquías · Paginación · Impresión"],
  ["04","Formularios y trámites","Ayuda para completar formularios generales, migratorios y de ciudadanía española con la información aportada por el cliente.","Emigración · Ciudadanía española · Formularios"],
  ["05","Impresión, copias y plastificado","Impresión moderna a color o en blanco y negro, fotocopias, tesis de grado y protección de carnés e identificaciones.","Impresión · Fotocopias · Tesis · Plastificado"],
  ["06","Digitalización y modelos","Digitalización de documentos y diseño de modelos prácticos para oficinas.","Escaneo · Archivo digital · Modelos de oficina"],
];

export default function Servicios(){return <Shell>
  <PageHero kicker="Servicios" title="Cada palabra, en su lugar."><p>Soluciones adaptadas al destino de cada texto. Consulte alcance, disponibilidad y precio.</p></PageHero>
  <figure className="promo-page-image wrap"><img src="/osmany-servicios-promo.png" alt="Servicios profesionales de mecanografía de Osmany Santos Macías"/></figure>
  <section className="section wrap detail-list">{items.map(x=><article key={x[0]}><ServiceIcon n={x[0]}/><div><h2>{x[1]}</h2><p>{x[2]}</p><b className="tags">{x[3]}</b>{x[0]==="05"&&<Link className="text-link" href="/impresion">Conocer impresión y copias →</Link>}{x[0]==="06"&&<Link className="text-link" href="/otros-servicios">Ver otros servicios →</Link>}</div></article>)}</section>
  <section className="mini-cta"><div className="wrap"><h2>¿Tiene un encargo diferente?</h2><p>Explíquelo y reciba una respuesta directa.</p><a className="button cream" href="mailto:osmcfg1966@gmail.com">Hacer una consulta →</a></div></section>
</Shell>}
