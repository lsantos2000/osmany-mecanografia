import Link from "next/link";
import {PageHero,Shell} from "../site";

export default function Cienfuegos(){return <Shell>
  <PageHero kicker="Raíces" title="Orgulloso de ser cienfueguero."><p>Una ciudad de arquitectura luminosa, calles con historia y gente que reconoce el valor de hacer bien las cosas.</p></PageHero>
  <section className="city-intro wrap"><div><span className="kicker">La Perla del Sur</span><h2>Mi ciudad, mi casa.</h2></div><p>Osmany comparte con orgullo escenas cotidianas de Cienfuegos. Esta ciudad no es solo la dirección de su servicio: es el lugar desde donde trabaja, atiende y forma parte de su comunidad.</p></section>
  <section className="city-gallery wrap"><figure><img src="/cienfuegos-01.jpg" alt="Edificio histórico y paseo arbolado en Cienfuegos"/><figcaption>Arquitectura y espacios públicos de Cienfuegos. Fotografía compartida por Osmany en su perfil público.</figcaption></figure><figure><img src="/cienfuegos-02.jpg" alt="Calle arbolada y vida cotidiana en Cienfuegos"/><figcaption>Una mañana en las calles de la ciudad. Fotografía compartida por Osmany en su perfil público.</figcaption></figure></section>
  <section className="city-quote"><div className="wrap"><blockquote>“Servir desde Cienfuegos también es una manera de quererla.”</blockquote><p>Osmany Santos Macías · Cienfueguero</p></div></section>
  <section className="mini-cta"><div className="wrap"><h2>Un servicio cercano, aquí en Cienfuegos.</h2><p>Conozca cómo puede ayudarle Osmany.</p><Link className="button cream" href="/servicios">Ver servicios →</Link></div></section>
</Shell>}
