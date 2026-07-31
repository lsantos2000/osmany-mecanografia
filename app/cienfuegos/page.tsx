import Link from "next/link";
import {PageHero,Shell} from "../site";
import CityCarousel from "./CityCarousel";

export default function Cienfuegos(){return <Shell>
  <PageHero kicker="Raíces" title="Orgulloso de ser cienfueguero."><p>Una ciudad de arquitectura luminosa, calles con historia y gente que reconoce el valor de hacer bien las cosas.</p></PageHero>
  <section className="city-intro wrap"><div><span className="kicker">La Perla del Sur</span><h2>Mi ciudad, mi casa.</h2></div><p>Osmany comparte con orgullo escenas cotidianas de Cienfuegos. Esta ciudad no es solo la dirección de su servicio: es el lugar desde donde trabaja, atiende y forma parte de su comunidad.</p></section>
  <CityCarousel/>
  <section className="city-quote"><div className="wrap"><blockquote>“Servir desde Cienfuegos también es una manera de quererla.”</blockquote><p>Osmany Santos Macías · Cienfueguero</p></div></section>
  <section className="mini-cta"><div className="wrap"><h2>Un servicio cercano, aquí en Cienfuegos.</h2><p>Conozca cómo puede ayudarle Osmany.</p><Link className="button cream" href="/servicios">Ver servicios →</Link></div></section>
</Shell>}
