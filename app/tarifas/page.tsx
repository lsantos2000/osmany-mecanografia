import Link from "next/link";
import {PageHero,Shell} from "../site";

const factors=[["01","Tipo de trabajo","Mecanografía, impresión, fotocopiado, plastificado, encuadernación, digitalización o llenado de formularios."],["02","Envergadura","Cantidad de páginas, copias, documentos, fotografías o formularios que forman parte del encargo."],["03","Complejidad","Estado del original, formato requerido, revisión, restauración, colorización o preparación especial."],["04","Materiales y acabado","Papel, color, tamaño, plastificado, encuadernación y cualquier terminación acordada."],["05","Tiempo de entrega","La duración prevista y la disponibilidad necesaria para completar el trabajo con cuidado."]];

export default function Tarifas(){return <Shell>
  <PageHero kicker="Tarifas" title="Un precio para cada encargo."><p>No todos los documentos requieren el mismo trabajo. Cuéntenos qué necesita y recibirá una confirmación antes de comenzar.</p></PageHero>
  <section className="tariff-images wrap"><figure><img src="/document-workspace.jpg" alt="Preparación digital de documentos en un espacio moderno"/><figcaption>Preparación y formato digital</figcaption></figure><figure><img src="/modern-printing.jpg" alt="Impresión de documentos con equipo multifunción"/><figcaption>Impresión y terminación</figcaption></figure></section>
  <section className="section wrap"><div className="section-head"><div><span className="kicker">Cómo se calcula</span><h2>Primero entendemos el trabajo.</h2></div><p>El precio se confirma directamente después de conocer estos elementos.</p></div><div className="detail-list">{factors.map(f=><article key={f[0]}><span className="kicker">{f[0]}</span><div><h2>{f[1]}</h2><p>{f[2]}</p></div></article>)}</div></section>
  <section className="city-quote"><div className="wrap"><blockquote>Explique su necesidad. Osmany le confirmará el alcance, el plazo y el precio.</blockquote><p>Sin compromiso · Antes de comenzar</p></div></section>
  <section className="mini-cta"><div className="wrap"><h2>Solicite una cotización.</h2><p>Indique el tipo de trabajo, cantidad y fecha en que lo necesita.</p><Link className="button cream" href="/contacto">Escribir a Osmany →</Link></div></section>
</Shell>}
