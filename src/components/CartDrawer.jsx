import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Minus, Plus, Trash, WhatsappLogo } from '@phosphor-icons/react'
import { useCart } from '../context/Cart.jsx'
import { formatPrice } from '../data/products.js'
import { buildWhatsAppUrl } from '../lib/whatsapp.js'

export default function CartDrawer() {
  const { items, open, setOpen, setQty, remove, total } = useCart()
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, setOpen])

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      <button type="button" tabIndex={open ? 0 : -1} aria-label="Cerrar carrito" onClick={() => setOpen(false)}
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-500 ease-base ${open ? 'opacity-100' : 'opacity-0'}`} />
      <aside role="dialog" aria-modal="true" aria-labelledby="carrito-titulo"
        className={`absolute top-0 right-0 flex h-full w-full max-w-md flex-col border-l border-[#272727] bg-[#131209] transition-transform duration-500 ease-base ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between border-b border-[#272727] px-6 py-4">
          <h2 id="carrito-titulo" className="title-2">Tu carrito</h2>
          <button type="button" onClick={() => setOpen(false)} className="nav-menu-btn rounded-lg p-2" aria-label="Cerrar">
            <X size={20} weight="bold" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <p className="body-6 text-[#9B9B9B]">Aún no hay prendas. Elige un diseño de la colección.</p>
          ) : (
            <ul className="flex flex-col gap-4">
              {items.map((item) => (
                <li key={item.id} className="flex gap-3 rounded-2xl border border-[#272727] bg-[#181818] p-2">
                  <Link to={`/producto/${item.productId}`} onClick={() => setOpen(false)} className="h-24 w-20 shrink-0 overflow-hidden rounded-lg bg-[#272727]">
                    <img src={item.imagen} alt="" className="h-full w-full object-cover" />
                  </Link>
                  <div className="min-w-0 flex-1 py-1 pr-1">
                    <p className="title-4 truncate">{item.nombre}</p>
                    <p className="caption-4 text-[#9B9B9B]">Talla {item.size} · {formatPrice(item.price)}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button type="button" className="choice h-8 w-8 p-0" aria-label="Quitar una" onClick={() => setQty(item.id, item.qty - 1)}>
                          <Minus size={14} weight="bold" />
                        </button>
                        <span className="title-4 w-4 text-center">{item.qty}</span>
                        <button type="button" className="choice h-8 w-8 p-0" aria-label="Agregar una" onClick={() => setQty(item.id, item.qty + 1)}>
                          <Plus size={14} weight="bold" />
                        </button>
                      </div>
                      <button type="button" className="nav-menu-btn rounded-lg p-2 text-[#9B9B9B]" aria-label={`Quitar ${item.nombre}`} onClick={() => remove(item.id)}>
                        <Trash size={16} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-[#272727] px-6 py-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="body-6 text-[#9B9B9B]">Total</span>
              <span className="title-2">{formatPrice(total)}</span>
            </div>
            <a href={buildWhatsAppUrl(items, total)} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full justify-center">
              <WhatsappLogo size={20} weight="fill" aria-hidden="true" /> Pagar por WhatsApp
            </a>
            <p className="caption-4 mt-3 text-center text-[#9B9B9B]">Se abrirá WhatsApp con tu pedido listo para enviar.</p>
          </div>
        )}
      </aside>
    </div>
  )
}
