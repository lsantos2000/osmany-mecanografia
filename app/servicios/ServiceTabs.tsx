"use client";
import Link from "next/link";
import {useState} from "react";

const groups={
  basicos:{label:"Servicios básicos",intro:"Preparación, organización y conservación de documentos para uso personal, académico o profesional.",items:[
    ["Mecanografía y transcripción","Conversión de manuscritos, cartas, notas y textos impresos en documentos digitales claros, editables y listos para imprimir."],
    ["Preparación de documentos","Organización de títulos, párrafos, tablas, listados y secciones para currículos, solicitudes, cartas y modelos administrativos."],
    ["Formato y revisión básica","Ajuste de márgenes, espaciado, numeración, paginación y consistencia visual para lograr una presentación ordenada."],
    ["Digitalización y modelos de oficina","Conversión de documentos físicos a archivos digitales y diseño de registros, controles, recibos y formularios reutilizables."]
  ]},
  impresion:{label:"Impresión",intro:"Producción moderna a color o en blanco y negro, con copias y terminaciones según el uso final.",items:[
    ["Impresión de documentos","Impresión a color o en blanco y negro de cartas, formularios, informes, expedientes y materiales profesionales."],
    ["Fotocopias y digitalización","Copias legibles de documentos y creación de archivos digitales organizados para conservar, enviar o volver a imprimir."],
    ["Tesis y trabajos académicos","Impresión de tesis de grado, investigaciones e informes extensos, confirmando páginas, ejemplares y fecha de entrega."],
    ["Encuadernación y plastificado","Terminación de documentos mediante encuadernación y plastificado de carnés o identificaciones hasta tamaño Carta."]
  ],href:"/impresion",link:"Ver todos los detalles de impresión →"},
  otros:{label:"Otros servicios",intro:"Soluciones complementarias para fotografías, formularios, trámites y materiales que necesitan recuperación o preparación especial.",items:[
    ["Rescate de fotografías","Mejora de fotografías antiguas o dañadas y colorización de imágenes en blanco y negro cuando el material lo permite."],
    ["Rescate de manuscritos","Transcripción de cuadernos, cartas y documentos escritos a mano para conservarlos en formato digital."],
    ["Formularios y trámites","Ayuda para completar formularios generales, migratorios y de ciudadanía española, incluida la Ley de Memoria Democrática."],
    ["Impresión de fotografías","Preparación e impresión cuando esté disponible; si el trabajo requiere otro equipo, se orienta al cliente hacia proveedores adecuados."]
  ],href:"/otros-servicios",link:"Ver todos los otros servicios →"}
} as const;

type TabKey=keyof typeof groups;

export default function ServiceTabs(){const [active,setActive]=useState<TabKey>("basicos");const group=groups[active];return <section className="service-tabs-section wrap"><div className="service-tabs" role="tablist" aria-label="Tipos de servicios">{(Object.keys(groups) as TabKey[]).map(key=><button key={key} type="button" role="tab" aria-selected={active===key} aria-controls={`panel-${key}`} id={`tab-${key}`} className={active===key?"active":""} onClick={()=>setActive(key)}>{groups[key].label}</button>)}</div><div className="service-tab-panel" role="tabpanel" id={`panel-${active}`} aria-labelledby={`tab-${active}`}><div className="service-tab-intro"><span className="kicker">{group.label}</span><h2>{group.label}</h2><p>{group.intro}</p></div><div className="service-tab-grid">{group.items.map((item,index)=><article key={item[0]}><span>{String(index+1).padStart(2,"0")}</span><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div>{"href" in group&&<Link className="button primary service-tab-link" href={group.href}>{group.link}</Link>}</div></section>}
