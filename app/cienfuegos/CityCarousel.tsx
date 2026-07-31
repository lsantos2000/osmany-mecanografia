"use client";
import {useState} from "react";

const photos=[
  {src:"/cienfuegos-01.jpg",alt:"Escena urbana de Cienfuegos compartida por Osmany",caption:"Cienfuegos, ciudad de historia, luz y orgullo cotidiano.",credit:"Fotografía pública compartida por Osmany"},
  {src:"/cienfuegos-05.jpg",alt:"Atardecer rosado sobre una calle de Cienfuegos",caption:"Un cielo rosado al caer la tarde en Cienfuegos.",credit:"Fotografía pública compartida por Osmany"},
  {src:"/cienfuegos-08.jpg",alt:"Gran árbol y calle tranquila de Cienfuegos",caption:"La sombra de un gran árbol sobre una mañana tranquila.",credit:"Fotografía pública compartida por Osmany"},
  {src:"/cienfuegos-09.jpg",alt:"Colección de plantas verdes cuidada en un patio cienfueguero",caption:"El verde y el cuidado cotidiano de un patio de la ciudad.",credit:"Fotografía pública compartida por Osmany"},
  {src:"/cienfuegos-02.jpg",alt:"Vida cotidiana en una calle arbolada de Cienfuegos",caption:"Movimiento y vida diaria en las calles cienfuegueras.",credit:"Fotografía pública compartida por Osmany"},
];

export default function CityCarousel(){const [active,setActive]=useState(0);const move=(step:number)=>setActive((active+step+photos.length)%photos.length);return <section className="city-carousel wrap" aria-label="Galería fotográfica de Cienfuegos" onKeyDown={e=>{if(e.key==="ArrowLeft")move(-1);if(e.key==="ArrowRight")move(1)}} tabIndex={0}><div className="city-slide"><img src={photos[active].src} alt={photos[active].alt}/><div className="city-slide-copy"><span>{String(active+1).padStart(2,"0")} / {String(photos.length).padStart(2,"0")}</span><b>{photos[active].caption}</b><small>{photos[active].credit}</small></div></div><div className="city-controls"><button type="button" onClick={()=>move(-1)} aria-label="Foto anterior">← Anterior</button><div>{photos.map((photo,index)=><button type="button" className={index===active?"active":""} onClick={()=>setActive(index)} aria-label={`Ver foto ${index+1}`} key={photo.src}/>)}</div><button type="button" onClick={()=>move(1)} aria-label="Foto siguiente">Siguiente →</button></div></section>}
