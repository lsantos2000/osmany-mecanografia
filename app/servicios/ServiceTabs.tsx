"use client";
import Link from "next/link";
import {useState} from "react";

type TabKey="basicos"|"mecanografia"|"impresion"|"formularios"|"otros";
type ServiceGroup={label:string;intro:string;items:readonly (readonly [string,string])[];photos:readonly {src:string;alt:string;caption:string;credit:string}[];href?:string;link?:string;help?:boolean};

const pexels=(id:number)=>`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;

const groups:Record<TabKey,ServiceGroup>={
  basicos:{label:"Servicios básicos",intro:"Una visión completa de todo lo que puede solicitar: desde pasar un manuscrito a computadora hasta imprimir, copiar, plastificar o preparar un formulario.",items:[
    ["Mecanografía y transcripción","Pasamos textos manuscritos, notas, cartas, borradores y documentos impresos a archivos digitales claros. Podemos entregar un documento editable, un PDF, una impresión o una combinación de estos formatos."],
    ["Preparación y formato","Organizamos títulos, párrafos, márgenes, tablas, listados, numeración y páginas para que el documento tenga una presentación limpia, coherente y apropiada para su propósito."],
    ["Impresión y fotocopias","Imprimimos a color o en blanco y negro y producimos las copias necesarias. Antes de comenzar confirmamos cantidad, tamaño, color, calidad y fecha de entrega."],
    ["Digitalización de documentos","Convertimos páginas físicas en archivos digitales ordenados para conservar, enviar, consultar o imprimir nuevamente. Los documentos de varias páginas pueden reunirse en un solo archivo."],
    ["Encuadernación y plastificado","Preparamos tesis, informes y expedientes con encuadernación. También plastificamos carnés, identificaciones y documentos hasta tamaño Carta para protegerlos del uso frecuente."],
    ["Formularios y trámites","Ayudamos a organizar datos y completar formularios generales, migratorios, de turismo a México y de ciudadanía española, incluida la Ley de Memoria Democrática."],
    ["Fotografías y restauración","Podemos preparar fotografías para impresión, mejorar imágenes antiguas y, cuando el original lo permite, restaurar fotografías en blanco y negro o aplicar color."],
    ["Modelos para oficinas","Diseñamos registros, controles, recibos, listados, formularios internos y otras plantillas reutilizables adaptadas a la información de cada oficina o pequeño negocio."]
  ],photos:[
    {src:pexels(7658322),alt:"Personas revisando documentos en una oficina",caption:"Revisión cuidadosa de documentos y requisitos.",credit:"Pavel Danilyuk · Pexels"},
    {src:pexels(357514),alt:"Carpetas organizadas con documentos",caption:"Documentos organizados para conservar y consultar.",credit:"Pixabay · Pexels · CC0"}
  ]},
  mecanografia:{label:"Mecanografía",intro:"El oficio central de Osmany: convertir información escrita o impresa en documentos legibles, ordenados y listos para utilizar.",items:[
    ["De manuscrito a documento digital","Transcribimos cuadernos, cartas, notas, declaraciones, informes y otros originales escritos a mano. Se presta atención especial a nombres, fechas, cifras y palabras difíciles de interpretar."],
    ["Transcripción desde material impreso","Volvemos editable un texto que solo existe en papel o fotografía. Esto permite corregirlo, actualizarlo, compartirlo por correo o producir nuevas copias sin comenzar nuevamente."],
    ["Presentación profesional","Aplicamos una estructura consistente con títulos, subtítulos, márgenes, sangrías, listas, tablas, numeración y paginación. Si existe una plantilla o modelo institucional, debe entregarse al inicio."],
    ["Revisión antes de entregar","Comprobamos el orden y la legibilidad del documento y señalamos cualquier duda encontrada en el original. La revisión básica no sustituye una corrección especializada, legal o académica."],
    ["Archivos y copias finales","El resultado puede prepararse como archivo editable, PDF, impresión o varias copias. También puede combinarse con digitalización, encuadernación o plastificado."],
    ["Trabajos urgentes","Si dispone de poco tiempo, indíquelo desde el primer mensaje. Revisaremos la extensión y la disponibilidad para confirmar si podemos acomodar una entrega prioritaria."]
  ],photos:[
    {src:pexels(5058920),alt:"Persona escribiendo en un teclado moderno",caption:"Digitación atenta para obtener documentos claros.",credit:"Thirdman · Pexels"},
    {src:pexels(30535780),alt:"Manos escribiendo en un teclado",caption:"Precisión en nombres, fechas y cada detalle.",credit:"Vitaly Gariev · Pexels"}
  ]},
  impresion:{label:"Impresión",intro:"Impresión, copias y terminaciones para documentos personales, profesionales y académicos, confirmando cada detalle antes de producir el trabajo.",items:[
    ["Color y blanco y negro","Elegimos con el cliente la modalidad adecuada según el documento. El blanco y negro funciona bien para textos y formularios; el color ayuda con gráficos, fotografías, portadas y materiales visuales."],
    ["Fotocopias","Realizamos copias de documentos sueltos o conjuntos de páginas. Conviene indicar número de originales, cantidad de copias, tamaño y si alguna página necesita ampliación o atención especial."],
    ["Tesis y trabajos extensos","Imprimimos tesis de grado, investigaciones, informes y expedientes de muchas páginas. Revisamos previamente el archivo, la numeración, las páginas a color, la cantidad de ejemplares y la terminación."],
    ["Digitalización y reimpresión","Escaneamos documentos para conservarlos o enviarlos y podemos producir nuevas copias desde el archivo digital. Las páginas se ordenan antes de crear el documento final."],
    ["Encuadernación","Coordinamos la presentación final de tesis, informes y otros trabajos mediante encuadernación, según los materiales disponibles y el tipo de uso previsto."],
    ["Plastificado","Protegemos carnés, identificaciones y documentos hasta tamaño Carta. Antes de plastificar se confirma que la información esté correcta, porque el proceso debe considerarse permanente."]
  ],photos:[
    {src:pexels(7964429),alt:"Personas trabajando con una impresora de oficina",caption:"Impresión moderna y revisión antes de producir.",credit:"Felicity Tai · Pexels"},
    {src:pexels(16284689),alt:"Persona trabajando con documentos y teclado",caption:"Del archivo digital al documento terminado.",credit:"Jakub Zerdzicki · Pexels"}
  ],href:"/impresion",link:"Ver la guía completa de impresión →"},
  formularios:{label:"Formularios",intro:"Ayuda para organizar información y completar formularios con atención a los datos, los documentos de respaldo y las instrucciones de la institución receptora.",items:[
    ["Formularios generales","Completamos solicitudes, modelos administrativos, declaraciones y otros formularios. El cliente aporta los datos verdaderos y vigentes y revisa el resultado antes de firmar o presentar."],
    ["Trámites migratorios","Ayudamos a ordenar la información y preparar formularios relacionados con trámites de emigración. Se trabaja según los requisitos disponibles y el alcance acordado con cada cliente."],
    ["Visa de turismo a México","Ofrecemos orientación documental y ayuda con formularios para solicitudes de turismo a México. El servicio no constituye representación legal ni garantiza la aprobación de una visa."],
    ["Ciudadanía española y LMD","Ayudamos a organizar información y completar modelos relacionados con ciudadanía española y la Ley de Memoria Democrática, también conocida como Ley de Nietos."],
    ["Qué debe traer","Comparta el formulario, las instrucciones oficiales, sus documentos de identidad, fechas, nombres completos y cualquier modelo recibido. No envíe información falsa ni omita datos relevantes."],
    ["Revisión final","Antes de presentar el formulario, el cliente debe confirmar nombres, números, fechas y respuestas. Las autoridades pueden cambiar requisitos, por lo que siempre deben consultarse las instrucciones oficiales vigentes."]
  ],photos:[
    {src:pexels(7821682),alt:"Persona completando un formulario con bolígrafo",caption:"Cada campo se completa con información revisada.",credit:"RDNE Stock project · Pexels"},
    {src:pexels(12899128),alt:"Persona escribiendo datos en una computadora",caption:"Organización digital de datos y documentos de respaldo.",credit:"Mizuno K · Pexels"}
  ]},
  otros:{label:"Otros servicios",intro:"Trabajos complementarios que no pertenecen directamente a mecanografía, impresión o formularios, pero ayudan a conservar información y resolver necesidades de oficina.",items:[
    ["Restauración de fotografías","Mejoramos fotografías antiguas, descoloridas o con daños visibles. También puede evaluarse la colorización de imágenes en blanco y negro, siempre respetando las posibilidades del original."],
    ["Rescate de documentos manuscritos","Digitalizamos cuadernos, cartas familiares, recetas, memorias y otros escritos para que puedan conservarse, editarse, compartirse o imprimirse nuevamente."],
    ["Impresión de fotografías","Preparamos e imprimimos fotografías cuando el tamaño, papel y equipo disponibles lo permiten. Si el trabajo requiere una capacidad diferente, orientamos al cliente hacia otro proveedor."],
    ["Modelos y controles de oficina","Creamos plantillas sencillas para registrar ventas, pagos, inventarios, asistencia, entregas, contactos u otra información utilizada regularmente en una oficina o emprendimiento."],
    ["Organización de archivos","Ayudamos a reunir, nombrar y ordenar documentos digitales o páginas escaneadas para facilitar su almacenamiento, envío y consulta posterior."]
  ],photos:[
    {src:pexels(3285199),alt:"Persona trabajando en una oficina con documentos",caption:"Soluciones prácticas para necesidades de oficina.",credit:"Jonathan Borba · Pexels"},
    {src:pexels(6538616),alt:"Persona organizando varias carpetas de oficina",caption:"Ayuda cuando el volumen de documentos crece.",credit:"cottonbro studio · Pexels"}
  ],href:"/otros-servicios",link:"Ver más detalles de otros servicios →",help:true}
};

export default function ServiceTabs(){const [active,setActive]=useState<TabKey>("basicos");const group=groups[active];return <section className="service-tabs-section wrap"><div className="service-tabs" role="tablist" aria-label="Tipos de servicios">{(Object.keys(groups) as TabKey[]).map(key=><button key={key} type="button" role="tab" aria-selected={active===key} aria-controls={`panel-${key}`} id={`tab-${key}`} className={active===key?"active":""} onClick={()=>setActive(key)}>{groups[key].label}</button>)}</div><div className="service-tab-panel" role="tabpanel" id={`panel-${active}`} aria-labelledby={`tab-${active}`}><div className="service-tab-intro"><span className="kicker">{group.label}</span><h2>{group.label}</h2><p>{group.intro}</p></div><div className="service-photo-grid">{group.photos.map(photo=><figure key={photo.src}><img src={photo.src} alt={photo.alt}/><figcaption><b>{photo.caption}</b><small>{photo.credit}</small></figcaption></figure>)}</div><div className="service-tab-grid">{group.items.map((item,index)=><article key={item[0]}><span>{String(index+1).padStart(2,"0")}</span><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div>{group.help&&<aside className="service-help"><span className="kicker">Pregúntenos</span><h3>¿No encuentra aquí el servicio de oficina que necesita?</h3><p>Cuéntenos qué desea resolver y, si es posible, envíe una fotografía o muestra. Evaluaremos el trabajo, le explicaremos qué podemos hacer y le orientaremos si requiere otro proveedor.</p><Link className="button primary" href="/contacto">Consultar cualquier servicio →</Link></aside>}{group.href&&group.link&&<Link className="button primary service-tab-link" href={group.href}>{group.link}</Link>}<p className="service-photo-credit">Fotografías gratuitas: <a href="https://www.pexels.com/" target="_blank" rel="noreferrer">Pexels</a>. Créditos individuales bajo cada imagen.</p></div></section>}
