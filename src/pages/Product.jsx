import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Info, ShoppingBag } from '@phosphor-icons/react'
import { products, PRICE_OPTIONS, SIZES } from '../data/products.js'
import { useCart } from '../context/Cart.jsx'
import { NotFound } from './Pages.jsx'

export default function Product() {
  const { id } = useParams()
  const p = products.find((x) => String(x.id) === id)
  const { add } = useCart()
  const [priceId, setPriceId] = useState(PRICE_OPTIONS[0].id)
  const [size, setSize] = useState('')
  const [added, setAdded] = useState(false)
  useEffect(() => { window.scrollTo(0, 0) }, [id])
  if (!p) return <NotFound />

  const price = PRICE_OPTIONS.find((x) => x.id === priceId)

  const onAdd = () => {
    if (!size || !price) return
    add({
      productId: p.id,
      nombre: p.nombre,
      imagen: p.imagen,
      size,
      price: price.value,
    })
    setAdded(true)
  }

  return (
    <section className="px-4 pt-24 pb-16 md:pt-32">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-start">
        <div className="overflow-hidden rounded-2xl border border-[#272727] bg-[#181818]">
          <img src={p.imagen} alt={`${p.nombre}, ${p.prenda.toLowerCase()} ${p.color.toLowerCase()}, vista frontal y trasera`} className="w-full object-cover" />
        </div>

        <div>
          <Link to="/#coleccion" className="caption-4 inline-flex items-center gap-1 text-[#9B9B9B] transition-colors hover:text-white">
            <ArrowLeft size={14} weight="bold" aria-hidden="true" /> Volver a la colección
          </Link>
          <p className="caption-4 mt-6 text-[#9B9B9B]">{p.numero} / {products.length}</p>
          <h1 className="heading-3 mt-2">{p.nombre}</h1>
          <p className="body-3 mt-2 text-[#9B9B9B]">{p.prenda} · {p.color}</p>

          <fieldset className="mt-8">
            <legend className="title-4 mb-3">Precio</legend>
            <p className="body-6 mb-3 flex items-start gap-2 rounded-lg border border-[#272727] bg-[#181818] p-3 text-[#9B9B9B]">
  <Info size={20} weight="bold" aria-hidden="true" className="mt-0.5 shrink-0" />
  Según el precio cambia la tela de la prenda.
</p>  
            <div role="radiogroup" aria-label="Precio" className="grid grid-cols-2 gap-3">
              {PRICE_OPTIONS.map((opt) => {
                const on = priceId === opt.id
                return (
                  <button key={opt.id} type="button" role="radio" aria-checked={on} onClick={() => { setPriceId(opt.id); setAdded(false) }}
                    className={`choice ${on ? 'choice-on' : ''}`}>
                    <span className="title-2 block">{opt.label}</span>
                  </button>
                )
              })}
            </div>
          </fieldset>

          <fieldset className="mt-8">
            <legend className="title-4 mb-3">Talla</legend>
            <div role="radiogroup" aria-label="Talla" className="grid grid-cols-4 gap-2 sm:grid-cols-6">
              {SIZES.map((s) => {
                const on = size === s
                return (
                  <button key={s} type="button" role="radio" aria-checked={on} onClick={() => { setSize(s); setAdded(false) }}
                    className={`choice ${on ? 'choice-on' : ''}`}>
                    {s}
                  </button>
                )
              })}
            </div>
            {!size && <p className="caption-4 mt-3 text-[#9B9B9B]">Elige una talla para agregar al carrito.</p>}
          </fieldset>

          <button type="button" className="btn btn-primary mt-8 w-full justify-center md:w-auto" disabled={!size} onClick={onAdd}>
            <ShoppingBag size={20} weight="bold" aria-hidden="true" />
            {added ? 'Agregado al carrito' : 'Agregar al carrito'}
          </button>
        </div>
      </div>
    </section>
  )
}
