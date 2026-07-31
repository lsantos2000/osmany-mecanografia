"use client";
import {useState} from "react";

const photos=[
  {src:"/cienfuegos-01.jpg",alt:"Edificio histórico y paseo arbolado en Cienfuegos",caption:"Arquitectura y espacios públicos de Cienfuegos.",credit:"Fotografía compartida por Osmany"},
  {src:"/cienfuegos-02.jpg",alt:"Calle arbolada y vida cotidiana en Cienfuegos",caption:"La vida cotidiana en las calles de la ciudad.",credit:"Fotografía compartida por Osmany"},
  {src:"/cienfuegos-03.jpg",alt:"Vista urbana de Cienfuegos, Cuba",caption:"Patrimonio, color y luz en la Perla del Sur.",credit:"Dan Lundberg · CC BY-SA 2.0 · Wikimedia Commons"},
  {src:"/cienfuegos-04.jpg",alt:"Glorieta histórica de Cienfuegos",caption:"La glorieta de Cienfuegos en una imagen histórica.",credit:"Dominio público · Wikimedia Commons"},
];

export default function CityCarousel(){const [active,setActive]=useState(0);const move=(step:number)=>setActive((active+step+photos.length)%photos.length);return <section className="city-carousel wrap" aria-label="Galería fotográfica de Cienfuegos" onKeyDown={e=>{if(e.key==="ArrowLeft")move(-1);if(e.key==="ArrowRight")move(1)}} tabIndex={0}><div className="city-slide"><img src={photos[active].src} alt={photos[active].alt}/><div className="city-slide-copy"><span>{String(active+1).padStart(2,"0")} / {String(photos.length).padStart(2,"0")}</span><b>{photos[active].caption}</b><small>{photos[active].credit}</small></div></div><div className="city-controls"><button type="button" onClick={()=>move(-1)} aria-label="Foto anterior">← Anterior</button><div>{photos.map((photo,index)=><button type="button" className={index===active?"active":""} onClick={()=>setActive(index)} aria-label={`Ver foto ${index+1}`} key={photo.src}/>)}</div><button type="button" onClick={()=>move(1)} aria-label="Foto siguiente">Siguiente →</button></div></section>}
