import Link from "next/link";
import {PageHero,ServiceIcon,Shell} from "../site";

export default function Impresion(){return <Shell>
  <PageHero kicker="Impresión y copias" title="Del archivo al papel, bien presentado."><p>Impresión moderna a color o en blanco y negro, fotocopias, encuadernación y terminaciones para documentos personales, académicos y profesionales.</p></PageHero>
  <section className="print-hero wrap"><div><img src="/modern-printing.jpg" alt="Preparación de documentos en una impresora multifunción moderna"/><small>Fotografía: George Milton / Pexels</small></div><div><span className="kicker">Servicio completo</span><h2>Imprima lo que necesita, como lo necesita.</h2><p>Desde unas pocas páginas hasta una tesis de grado: confirme formato, cantidad, encuadernación y terminación antes de comenzar.</p><a className="button primary" href="mailto:osmcfg1966@gmail.com?subject=Consulta%20de%20impresi%C3%B3n">Consultar un trabajo →</a></div></section>
  <section className="section wrap print-services">
    <article><ServiceIcon n="01"/><h2>Color y blanco y negro</h2><p>Impresión de documentos con equipos modernos según el propósito de cada trabajo.</p><ul><li>Documentos personales</li><li>Informes y materiales</li><li>Formularios</li><li>Archivos digitales</li></ul></article>
    <article><ServiceIcon n="02"/><h2>Fotocopias</h2><p>Reproducción de documentos para trámites, estudio, archivo o entrega.</p><ul><li>Copias de documentos</li><li>Juegos de páginas</li><li>Material de estudio</li><li>Documentación de apoyo</li></ul></article>
    <article><ServiceIcon n="03"/><h2>Tesis de grado</h2><p>Impresión de tesis y trabajos extensos, cuidando orden, legibilidad y secuencia.</p><ul><li>Portada e interiores</li><li>Gráficos a color</li><li>Texto en blanco y negro</li><li>Copias para entrega</li></ul></article>
    <article><ServiceIcon n="04"/><h2>Encuadernación</h2><p>Organización y terminación de documentos para una entrega profesional y duradera.</p><ul><li>Tesis</li><li>Informes</li><li>Expedientes</li><li>Trabajos académicos</li></ul></article>
    <article><ServiceIcon n="05"/><h2>Plastificado</h2><p>Protección de carnés, identificaciones y documentos hasta tamaño Carta (8½ × 11 pulgadas).</p><ul><li>Carnés personales</li><li>Identificaciones</li><li>Credenciales</li><li>Documentos Carta</li></ul></article>
    <article><ServiceIcon n="06"/><h2>Fotografías</h2><p>Consulte la impresión de fotografías. Si no puede realizarse directamente, Osmany puede referirle otro proveedor.</p><ul><li>Consulta previa</li><li>Tamaños disponibles</li><li>Preparación del archivo</li><li>Referencia responsable</li></ul></article>
  </section>
  <section className="print-guide"><div className="wrap"><div><span className="kicker light">Antes de imprimir</span><h2>Traiga el archivo correcto.</h2></div><ol><li><b>Revise el contenido</b><span>Nombres, fechas, páginas y ortografía.</span></li><li><b>Indique el acabado</b><span>Color, cantidad, tamaño y encuadernación.</span></li><li><b>Confirme la entrega</b><span>Especialmente para tesis y trabajos extensos.</span></li></ol></div></section>
  <section className="mini-cta"><div className="wrap"><h2>¿Tiene un documento para imprimir?</h2><p>Cuente cuántas páginas necesita y cómo desea recibirlo.</p><Link className="button cream" href="/contacto">Contactar a Osmany →</Link></div></section>
</Shell>}
