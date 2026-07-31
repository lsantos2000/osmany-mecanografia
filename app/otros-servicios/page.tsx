import Link from "next/link";
import {PageHero,PagePhoto,ServiceIcon,Shell} from "../site";

const extras=[
  ["01","Rescate de fotografías","Mejora de fotografías antiguas en blanco y negro y conversión a color, según el estado y la calidad del original."],
  ["02","Manuscritos a formato digital","Rescate de documentos escritos a mano mediante transcripción y preparación de una copia digital ordenada."],
  ["03","Formularios para trámites","Ayuda para completar formularios de emigración, ciudadanía española y otros procesos con los datos que entregue el cliente."],
  ["04","Digitalización de documentos","Conversión de documentos físicos a archivos digitales para conservar, compartir o volver a imprimir."],
  ["05","Modelos para oficinas","Diseño y preparación de modelos, plantillas y documentos de uso habitual en oficinas."],
  ["06","Impresión de fotografías","Consulta para impresión fotográfica. Si el trabajo no puede realizarse directamente, se recomienda otro proveedor."],
];

export default function OtrosServicios(){return <Shell><PageHero kicker="Otros servicios" title="Conservar, completar y resolver."><p>Apoyo práctico para recuperar recuerdos, digitalizar documentos y preparar formularios o modelos de uso personal y profesional.</p></PageHero><PagePhoto src="/writing-desk.jpg" alt="Detalle de escritura sobre un documento en papel" label="Del papel al archivo" caption="Lo importante puede conservarse y volver a utilizarse." credit="Fotografía de archivo · Unsplash"/><section className="section wrap detail-list">{extras.map(x=><article key={x[0]}><ServiceIcon n={x[0]}/><div><h2>{x[1]}</h2><p>{x[2]}</p></div></article>)}</section><section className="process"><div className="wrap process-inner"><div><span className="kicker light">Importante</span><h2>Ayuda documental, sin confusión.</h2></div><ol><li><span>1</span><div><b>Usted aporta la información</b><p>Los datos y documentos deben ser correctos y completos.</p></div></li><li><span>2</span><div><b>Osmany ayuda a organizarlos</b><p>Se completa el formulario según sus indicaciones.</p></div></li><li><span>3</span><div><b>Revise antes de presentar</b><p>Este servicio no sustituye asesoría legal o migratoria.</p></div></li></ol></div></section><section className="mini-cta"><div className="wrap"><h2>¿Necesita uno de estos servicios?</h2><p>Explique el material y el resultado que busca.</p><Link className="button cream" href="/contacto">Consultar con Osmany →</Link></div></section></Shell>}
