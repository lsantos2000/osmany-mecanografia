import Link from "next/link";
import {PageHero,Shell} from "../site";
import ServiceTabs from "./ServiceTabs";

export default function Servicios(){return <Shell>
  <PageHero kicker="Servicios" title="Todo lo que necesita, en un solo lugar."><p>Explore las tres áreas del servicio y conozca qué puede solicitar. Cada encargo se revisa personalmente antes de confirmar alcance, plazo y tarifa.</p></PageHero>
  <figure className="promo-page-image services-promo-image"><img src="/document-workspace.jpg" alt="Espacio moderno para preparar y organizar documentos digitales"/><figcaption>Documentos organizados, claros y preparados según cada necesidad.</figcaption></figure>
  <ServiceTabs/>
  <section className="section wrap services-request"><div className="section-head"><div><span className="kicker">Para recibir una respuesta precisa</span><h2>Información útil para cotizar.</h2></div><p>Describa el material, la cantidad, el resultado deseado y la fecha de entrega. Puede acompañar su mensaje con una fotografía o muestra.</p></div><div className="services-links"><Link className="button primary" href="/proceso">Ver cómo trabajo →</Link><Link className="button primary" href="/tarifas">Consultar cómo se cotiza →</Link></div></section>
  <section className="mini-cta"><div className="wrap"><h2>¿Tiene un encargo diferente?</h2><p>Explíquelo, envíe una muestra y reciba una respuesta directa antes de comenzar.</p><Link className="button cream" href="/contacto">Hacer una consulta →</Link></div></section>
</Shell>}
