import { ArrowDown, TShirt, PaintBrush, Ruler } from '@phosphor-icons/react'
import Reveal from '../components/Reveal.jsx'
import Tagline from '../components/Tagline.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { products } from '../data/products.js'

const detalles = [
  { Icon: PaintBrush, titulo: 'Gráfica grande en la espalda', texto: 'El diseño principal ocupa la espalda y cuenta la historia de cada pieza.' },
  { Icon: TShirt, titulo: 'Detalle pequeño al frente', texto: 'Un logo discreto en el pecho firma la prenda sin competir con la espalda.' },
  { Icon: Ruler, titulo: 'Corte oversize', texto: 'Camisetas oversize en blanco y negro, y un hoodie negro para completar la colección.' },
]

export default function Home() {
  return (
    <>
      <section className="px-4 pt-24 pb-16 md:pt-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="caption-4 mb-6 text-[#9B9B9B]">Colección 2026 · 14 diseños</p>
            <h1 className="heading-1 hero-gradient max-w-[680px]">
              Ropa con actitud,<br />hecha para la calle.
            </h1>
            <p className="body-3 mt-6 max-w-[680px] text-[#9B9B9B]">
              Camisetas oversize y hoodies con la gráfica grande en la espalda y un detalle pequeño al frente. Grafiti, cómic y cultura de club en cada diseño.
            </p>
            <a href="#coleccion" className="btn btn-primary mt-8">Ver la colección <ArrowDown size={20} weight="bold" aria-hidden="true" /></a>
          </div>
          <div className="rounded-2xl border border-[#272727] bg-[#181818] p-8">
            <img src="/logo.png" alt="Logo de Saint Louis Vice: un chico con audífonos frente a la tipografía de la marca" className="mx-auto w-full max-w-sm" />
          </div>
        </div>
      </section>

      <section id="detalles" className="px-4 py-24">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {detalles.map(({ Icon, titulo, texto }) => (
            <Reveal as="article" key={titulo} className="hover-card rounded-2xl border border-[#272727] bg-[#181818] p-6">
              <Icon size={32} weight="regular" aria-hidden="true" />
              <h2 className="title-2 mt-6">{titulo}</h2>
              <p className="body-6 mt-2 text-[#9B9B9B]">{texto}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grain relative flex min-h-[90svh] items-center overflow-hidden bg-[#131209] px-4 py-24" aria-label="Lema de la marca">
        <div aria-hidden="true" className="watermark pointer-events-none absolute inset-0 select-none">
          <span>Saint</span><span>Louis</span><span>Vice</span>
        </div>
        <div aria-hidden="true" className="absolute inset-x-4 top-8 z-[2] flex items-center gap-4">
          <span className="h-px flex-1 bg-[#313131]" />
          <span className="caption-4 uppercase tracking-[0.4em] text-[#9B9B9B]">Saint Louis ®</span>
          <span className="h-px flex-1 bg-[#313131]" />
        </div>
        <div className="relative z-[2] mx-auto flex w-full max-w-6xl flex-col items-start gap-12 md:flex-row md:items-center md:justify-between">
          <Tagline className="tagline-text" text="Cada diseño cuenta su propia historia. Grafiti, cómic, arte clásico, cultura de club y ciudad, sobre una prenda oversize hecha para la calle." />
          <Reveal className="shrink-0 self-center">
            <img src="/personaje.png" alt="Personaje de Saint Louis Vice: un chico con audífonos y mirada seria" className="w-56 md:w-96" />
          </Reveal>
        </div>
        <div aria-hidden="true" className="absolute inset-x-4 bottom-8 z-[2] flex items-center gap-4">
          <span className="h-px flex-1 bg-[#313131]" />
          <span className="caption-4 uppercase tracking-[0.4em] text-[#9B9B9B]">Premium streetwear</span>
          <span className="h-px flex-1 bg-[#313131]" />
        </div>
      </section>

      <section id="coleccion" className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="heading-2">La colección 2026</h2>
            <p className="body-3 mt-2 max-w-[680px] text-[#9B9B9B]">Catorce diseños en camisetas oversize y hoodie. Elige una prenda para ver precios y tallas.</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
            {products.map((p) => <ProductCard key={p.id} p={p} total={products.length} />)}
          </div>
        </div>
      </section>
    </>
  )
}
