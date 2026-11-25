import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ p, total }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <Link to={`/producto/${p.id}`} className="product-card group block">
      <span className="product-shine" aria-hidden="true" />
      <div className="aspect-[4/5] overflow-hidden rounded-lg bg-[#272727]">
        <img src={p.imagen} alt={`${p.nombre}, ${p.prenda.toLowerCase()} ${p.color.toLowerCase()}, vista frontal y trasera`} loading="lazy" onLoad={() => setLoaded(true)}
          className={`h-full w-full object-cover transition-[transform,opacity] duration-500 ease-base group-hover:scale-110 ${loaded ? 'opacity-100' : 'opacity-0'}`} />
      </div>
      <div className="relative z-[2] px-2 pt-3 pb-2">
        <p className="caption-4 text-[#9B9B9B]">{p.numero} / {total}</p>
        <h3 className="product-name title-3">{p.nombre}</h3>
        <p className="caption-4 text-[#9B9B9B]">{p.prenda} · {p.color}</p>
        <p className="title-4 mt-2">desde {p.precioDesde}</p>
      </div>
    </Link>
  )
}
