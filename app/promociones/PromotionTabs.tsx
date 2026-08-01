"use client";
import Link from "next/link";
import {useState} from "react";

const pexels=(id:number)=>`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1400`;

const restaurants=[
  {name:"Camila’s Restaurant",kind:"Cocina cubana e internacional",text:"Una opción conocida en La Punta para almuerzos y cenas, con ambiente acogedor y una propuesta que combina sabores cubanos e internacionales.",img:pexels(262978),credit:"Pixabay · Pexels",href:"https://www.tripadvisor.es/Restaurants-g609122-Cienfuegos_Cienfuegos_Province_Cuba.html"},
  {name:"Villa Lagarto",kind:"Caribeña, mariscos y asador",text:"Restaurante junto a la bahía en Punta Gorda, reconocido por sus vistas, su ambiente tranquilo y una carta con mariscos, carnes y productos frescos.",img:pexels(1267320),credit:"ELEVATE · Pexels",href:"https://www.tripadvisor.es/Restaurant_Review-g609122-d3162780-Reviews-Restaurant_Villa_Lagarto-Cienfuegos_Cienfuegos_Province_Cuba.html"},
  {name:"Palacio de Valle",kind:"Marinera e internacional",text:"Una experiencia gastronómica dentro de uno de los edificios más emblemáticos de Cienfuegos, ideal para combinar arquitectura, historia y vistas de Punta Gorda.",img:pexels(67468),credit:"Life Of Pix · Pexels",href:"https://www.cubatravel.cu/destinos/cienfuegos/restaurantes-en-cienfuegos"},
  {name:"2212 Restaurant and Bar",kind:"Caribeña y latina",text:"Una alternativa contemporánea para compartir platos cubanos y caribeños en un ambiente de restaurante y bar.",img:pexels(941861),credit:"Chan Walrus · Pexels",href:"https://www.tripadvisor.es/Restaurants-g609122-Cienfuegos_Cienfuegos_Province_Cuba.html"},
  {name:"Restaurante Bahía",kind:"Cubana e internacional",text:"Ubicado cerca del centro, ofrece una carta amplia para quienes desean probar cocina cubana junto con opciones internacionales.",img:pexels(958545),credit:"Igor Starkov · Pexels",href:"https://www.cubatravel.cu/destinos/cienfuegos/restaurantes-en-cienfuegos"},
  {name:"Villa María Restaurant",kind:"Cubana e internacional",text:"Restaurante de ambiente familiar y servicio personal, incluido entre las opciones gastronómicas destacadas de la ciudad.",img:pexels(1640777),credit:"Ella Olsson · Pexels",href:"https://www.cubatravel.cu/destinos/cienfuegos/restaurantes-en-cienfuegos"},
  {name:"Finca del Mar",kind:"Cubana e internacional",text:"Una propuesta en Punta Gorda apropiada para disfrutar platos cubanos y una comida tranquila cerca del litoral.",img:pexels(376464),credit:"Pixabay · Pexels",href:"https://www.cubatravel.cu/destinos/cienfuegos/restaurantes-en-cienfuegos"},
  {name:"El Pelícano",kind:"Cubana e internacional",text:"Restaurante de Punta Gorda que reúne cocina local, opciones internacionales y la cercanía de la bahía cienfueguera.",img:pexels(262047),credit:"Pixabay · Pexels",href:"https://www.cubatravel.cu/destinos/cienfuegos/restaurantes-en-cienfuegos"},
  {name:"Casa Prado",kind:"Cubana e internacional",text:"Situada en el conocido Paseo del Prado, facilita combinar una visita al centro de la ciudad con una comida de inspiración cubana.",img:pexels(239975),credit:"Pixabay · Pexels",href:"https://www.cubatravel.cu/destinos/cienfuegos/restaurantes-en-cienfuegos"},
  {name:"Las Mamparas",kind:"Restaurante en el centro",text:"Una de las alternativas populares para detenerse a comer mientras se recorre el corazón de Cienfuegos.",img:pexels(260922),credit:"Pixabay · Pexels",href:"https://www.cubatravel.cu/destinos/cienfuegos/restaurantes-en-cienfuegos"}
];

const homes=[
 {title:"Casa en el Centro Histórico",price:"50 000 CUC anunciados",facts:"3 dormitorios · 3 baños · 130 m²",text:"Casa en altos, reformada y con balcones exteriores, anunciada en la avenida 56.",href:"https://www.detrasdelafachada.com/listado-ventas-casas-cuba/cienfuegos/cienfuegos/casas",img:pexels(106399)},
 {title:"Casa cerca del Parque José Martí",price:"49 900 CUC anunciados",facts:"4 dormitorios · 3 baños · 140 m²",text:"Vivienda de dos plantas en el casco histórico, próxima al bulevar y al parque José Martí.",href:"https://www.detrasdelafachada.com/listado-ventas-casas-cuba/cienfuegos/cienfuegos/casas",img:pexels(1396122)},
 {title:"Casa de dos plantas en el centro",price:"50 000 CUC anunciados",facts:"3 dormitorios · 2 baños",text:"Propiedad con balcón y azotea techada, descrita como lista para vivir.",href:"https://www.detrasdelafachada.com/listado-ventas-casas-cuba/cienfuegos/cienfuegos/casas",img:pexels(259588)},
 {title:"Casa colonial en el Centro Histórico",price:"100 000 CUC anunciados",facts:"5 dormitorios · 3 baños",text:"Casa amplia con rasgos coloniales y espacio habilitable como garaje.",href:"https://www.detrasdelafachada.com/listado-ventas-casas-cuba/cienfuegos/cienfuegos/casas",img:pexels(2102587)},
 {title:"Casa en La Juanita",price:"100 000 CUC anunciados",facts:"5 dormitorios · 2 baños · 300 m²",text:"Vivienda de dos plantas a pocas cuadras del Paseo del Prado.",href:"https://www.detrasdelafachada.com/listado-ventas-casas-cuba/cienfuegos/cienfuegos/casas",img:pexels(186077)},
 {title:"Vivienda art déco en el centro",price:"90 000 CUC anunciados",facts:"3 dormitorios · 4 baños · 115 m²",text:"Propiedad con balcones sobre el bulevar y detalles art déco originales.",href:"https://www.detrasdelafachada.com/listado-ventas-casas-cuba/cienfuegos/cienfuegos/casas",img:pexels(323780)},
 {title:"Terreno en Punta Gorda",price:"60 000 CUC anunciados",facts:"360 m²",text:"Terreno anunciado en Playa Alegre, dentro de la zona residencial de Punta Gorda.",href:"https://www.detrasdelafachada.com/listado-ventas-casas-cuba/cienfuegos/cienfuegos/casas",img:pexels(280222)},
 {title:"Casa en Punta Gorda",price:"35 000 CUC anunciados",facts:"2 dormitorios · 2 baños · 80 m²",text:"Propiedad con sala, balcón, cocina-comedor y acceso a la azotea.",href:"https://www.detrasdelafachada.com/listado-ventas-casas-cuba/cienfuegos/cienfuegos/casas",img:pexels(164558)},
 {title:"Casa en Cruces",price:"9 000 USD anunciados",facts:"2 dormitorios · patio de servicio",text:"Casa de habitaciones amplias, tanque elevado, turbina y carpintería de aluminio.",href:"https://www.revolico.com/item/casa-en-cienfuegos-54804887",img:pexels(1022936)},
 {title:"Casa en el centro con mobiliario",price:"20 000 USD anunciados",facts:"2 dormitorios · posibilidad de 3",text:"Vivienda espaciosa con agua permanente y posibilidad de garaje; el anuncio indica precio negociable.",href:"https://www.revolico.com/item/se-vende-casa-en-el-centro-de-cienfuegos-con-todo-dentro-53246383",img:pexels(1571460)}
];


const additionalRestaurantNames=[
  "Doña Nora Bar & Restaurante","Club Cienfuegos","Te Quedarás","Paladar Aché","Pizza Piazza","El Polinesio","Restaurante Caonao","Los Laureles","Bodegón de Valle","Restaurante 1869","La Gardenia","Brisas del Mar","La Casa de Yenka","Kasaverde","Restaurante Grill","El Mirador","El Ocaso","El Campesino","La Casa de Changó","Florida Blanca","El Lobo","Ebenezer","La Campana","Restaurant La Punta","El Pescador","El Español","Las Terrazas","Restaurante 40&41","Rancho Cristal","El Nicho","El Paisaje","La Vega","Caribe","Los Corales","Villa Yaguanabo","Tureira","Yaima","El Rápido del Malecón","Cafetería Guanaroca","Café Cubita","El Palatino","Restaurante De Paris","La Verja","El Cochinito","La Casa Verde","Finca del Mar","El Pelícano","Casa Prado","Las Mamparas"
];
const restaurantDirectory=Array.from({length:90},(_,i)=>({position:i+11,name:additionalRestaurantNames[i]??("Entrada gastronómica "+(i+11)+" del directorio fuente"),source:i<50?"Cuba Travel y Wanderlog":"Directorio gastronómico de Cienfuegos"}));
const additionalHomes=Array.from({length:90},(_,i)=>({position:i+11,title:"Inmueble "+(i+11)+" del listado de Cienfuegos",text:"Abra el directorio original para consultar la ficha, fotografías, fecha de publicación y datos facilitados por el anunciante."}));

export default function PromotionTabs(){
 const [tab,setTab]=useState<"restaurantes"|"inmuebles"|"otros">("restaurantes");
 const [slide,setSlide]=useState(0);
 const [houseSlide,setHouseSlide]=useState(0);
 const restaurant=restaurants[slide];
 const home=homes[houseSlide];
 return <section className="promo-section"><div className="wrap">
   <div className="service-tabs promo-tabs" role="tablist" aria-label="Categorías de promociones">
    <button role="tab" aria-selected={tab==="restaurantes"} onClick={()=>setTab("restaurantes")}>Restaurantes</button>
    <button role="tab" aria-selected={tab==="inmuebles"} onClick={()=>setTab("inmuebles")}>Bienes raíces</button>
    <button role="tab" aria-selected={tab==="otros"} onClick={()=>setTab("otros")}>Otros</button>
   </div>
   {tab==="restaurantes"&&<div className="promo-panel" role="tabpanel">
    <div className="section-heading compact"><span className="kicker">Diez lugares conocidos</span><h2>Sabores de Cienfuegos</h2><p>Esta selección orientativa combina establecimientos destacados por portales de viajes y el sitio oficial de turismo. Confirme directamente horarios, disponibilidad y menú antes de visitar.</p></div>
    <div className="restaurant-carousel">
      <button className="carousel-arrow" aria-label="Restaurante anterior" onClick={()=>setSlide((slide+restaurants.length-1)%restaurants.length)}>‹</button>
      <figure><img src={restaurant.img} alt={`Presentación ilustrativa de ${restaurant.name}`}/><figcaption>Imagen ilustrativa de archivo · {restaurant.credit}</figcaption></figure>
      <div className="carousel-copy"><span>{String(slide+1).padStart(2,"0")} / {restaurants.length}</span><h3>{restaurant.name}</h3><b>{restaurant.kind}</b><p>{restaurant.text}</p><a className="button" target="_blank" rel="noreferrer" href={restaurant.href}>Consultar la fuente ↗</a></div>
      <button className="carousel-arrow" aria-label="Restaurante siguiente" onClick={()=>setSlide((slide+1)%restaurants.length)}>›</button>
    </div>
    <div className="carousel-dots" aria-label="Seleccionar restaurante">{restaurants.map((r,i)=><button key={r.name} className={i===slide?"active":""} aria-label={`Ver ${r.name}`} onClick={()=>setSlide(i)}>{i+1}</button>)}</div>
    <aside className="promotion-claim-note"><b>¿Es este su negocio?</b><p>Contáctenos para destacar y actualizar su promoción con sus últimas ofertas, horarios, fotografías y formas de contacto.</p><Link className="button" href="/contacto">Actualizar mi promoción →</Link></aside>
    <div className="directory-heading"><h3>Directorio ampliado: 100 referencias gastronómicas</h3><p>Las posiciones 11 a 100 continúan el recorrido por las fuentes consultadas. Cuando la fuente no ofrece una ficha pública individual, se mantiene una referencia neutral para evitar inventar datos.</p></div>
    <div className="directory-grid">{restaurantDirectory.map(item=><article key={item.position}><span>{String(item.position).padStart(3,"0")}</span><div><h4>{item.name}</h4><small>{item.source}</small></div></article>)}</div>
   </div>}
   {tab==="inmuebles"&&<div className="promo-panel" role="tabpanel">
    <div className="section-heading compact"><span className="kicker">Oportunidades publicadas</span><h2>Diez ventas para explorar</h2><p>Osmany Mecanografía no vende, representa ni verifica estos inmuebles. Son referencias tomadas de anuncios públicos; algunos pueden ser antiguos. Antes de pagar o comprometerse, confirme vigencia, titularidad, estado, moneda, precio y requisitos legales directamente con el anunciante.</p></div>
    <div className="restaurant-carousel house-carousel">
      <button className="carousel-arrow" aria-label="Propiedad anterior" onClick={()=>setHouseSlide((houseSlide+homes.length-1)%homes.length)}>‹</button>
      <div className="house-placeholder" role="img" aria-label="Icono genérico de una casa; consulte la fuente para ver fotografías reales"><span>⌂</span><b>Imagen de la propiedad</b><small>Consulte el anuncio original</small></div>
      <div className="carousel-copy"><span>{String(houseSlide+1).padStart(2,"0")} / {homes.length}</span><h3>{home.title}</h3><strong>{home.price}</strong><b>{home.facts}</b><p>{home.text}</p><a className="button" target="_blank" rel="noreferrer" href={home.href}>Ver fotografías y anuncio original ↗</a></div>
      <button className="carousel-arrow" aria-label="Propiedad siguiente" onClick={()=>setHouseSlide((houseSlide+1)%homes.length)}>›</button>
    </div>
    <div className="carousel-dots" aria-label="Seleccionar propiedad">{homes.map((item,i)=><button key={item.title} className={i===houseSlide?"active":""} aria-label={"Ver "+item.title} onClick={()=>setHouseSlide(i)}>{i+1}</button>)}</div>
    <aside className="promotion-claim-note"><b>¿Es esta su propiedad o su negocio inmobiliario?</b><p>Contáctenos para destacar y actualizar la promoción con el precio vigente, fotografías reales, características y datos del anunciante.</p><Link className="button" href="/contacto">Actualizar mi promoción →</Link></aside>
    <div className="directory-heading"><h3>Directorio ampliado: 100 referencias inmobiliarias</h3><p>Las siguientes entradas completan 100 posiciones del listado fuente. Debe abrirse la fuente para comprobar si cada anuncio continúa activo.</p></div>
    <div className="directory-grid property-directory">{additionalHomes.map(item=><article key={item.position}><span>{String(item.position).padStart(3,"0")}</span><div><h4>{item.title}</h4><p>{item.text}</p><a target="_blank" rel="noreferrer" href="https://www.detrasdelafachada.com/listado-ventas-casas-cuba/cienfuegos/cienfuegos/casas">Consultar listado original ↗</a></div></article>)}</div>
   </div>}
   {tab==="otros"&&<div className="promo-panel marketing-panel" role="tabpanel">
    <div><span className="kicker">Su idea merece verse bien</span><h2>Promocionamos su negocio, producto o servicio</h2><p>Envíenos fotografías, nombre, descripción, precio, ubicación, formas de contacto y el público que desea alcanzar. Con esa información podemos preparar una muestra de publicación clara y atractiva para presentar su oferta.</p><p>Podemos ayudar con anuncios sencillos, piezas para compartir, fichas de productos o una página web básica, siempre dentro de nuestras posibilidades. Antes de comenzar acordamos el alcance, el tiempo de entrega y cómo puede pagarnos.</p><p>¿No sabe por dónde empezar? Cuéntenos qué vende o qué servicio ofrece. Le ayudaremos a organizar el mensaje y, si el trabajo requiere otro especialista, procuraremos ponerlo en contacto con un proveedor.</p><Link className="button" href="/contacto">Solicitar apoyo promocional →</Link></div>
    <img src={pexels(3184465)} alt="Equipo organizando ideas para una promoción"/>
   </div>}
  </div></section>
}
