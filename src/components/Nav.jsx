import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingBag } from '@phosphor-icons/react'
import { useCart } from '../context/Cart.jsx'

const links = [
  { href: '/#detalles', label: 'Detalles' },
  { href: '/#coleccion', label: 'Colección' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { count, setOpen: setCartOpen } = useCart()
  const line = 'block h-0.5 w-6 bg-white transition-transform duration-500 ease-base'
  return (
    <header>
      <nav aria-label="Principal" className="nav-shell fixed top-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-4 rounded-full border border-[#313131] bg-[#181818]/70 px-3 py-2 backdrop-blur-md md:gap-6">
        <Link to="/" aria-current={pathname === '/' ? 'page' : undefined} className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="Saint Louis Vice" className="nav-logo h-8 w-8 rounded-full bg-[#272727] object-cover" />
          <span className="nav-brand title-4">Saint Louis Vice</span>
        </Link>
        <ul className="hidden items-center gap-4 md:flex">
          {links.map((l) => (
            <li key={l.href}><a href={l.href} className="nav-link title-4">{l.label}</a></li>
          ))}
        </ul>
        <button type="button" aria-label={count ? `Abrir carrito, ${count} prendas` : 'Abrir carrito'} onClick={() => setCartOpen(true)} className="nav-menu-btn relative rounded-lg p-2">
          <ShoppingBag size={18} weight="bold" />
          {count > 0 && <span className="absolute -top-0.5 -right-0.5 min-w-4 rounded-full bg-white px-1 text-center text-[10px] font-semibold leading-4 text-black">{count}</span>}
        </button>
        <button type="button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} onClick={() => setOpen(!open)} className="nav-menu-btn flex flex-col gap-1 rounded-lg p-2 md:hidden">
          <span className={`${line} ${open ? 'translate-y-0.75 rotate-45' : ''}`} />
          <span className={`${line} ${open ? '-translate-y-0.75 -rotate-45' : ''}`} />
        </button>
      </nav>

      <div aria-hidden={!open} className={`fixed inset-0 z-30 flex flex-col justify-center gap-6 bg-black/90 px-8 backdrop-blur-xl transition-opacity duration-500 ease-base md:hidden ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
        {links.map((l, i) => (
          <a key={l.href} href={l.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? `${Math.min(i * 60, 400)}ms` : '0ms' }}
            className={`heading-4 transition-[transform,opacity] duration-500 ease-base ${open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
            {l.label}
          </a>
        ))}
      </div>
    </header>
  )
}
