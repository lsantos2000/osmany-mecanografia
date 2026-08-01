import {PageHero,Shell} from "../site";
import PromotionTabs from "./PromotionTabs";

export default function Promociones(){return <Shell>
  <PageHero kicker="Promoción local" title="Descubra y dé a conocer lo mejor de Cienfuegos.">
    <p>Un espacio para presentar restaurantes, oportunidades inmobiliarias y otros negocios o servicios con información clara, imágenes atractivas y enlaces para ampliar los detalles.</p>
  </PageHero>
  <PromotionTabs/>
</Shell>}
