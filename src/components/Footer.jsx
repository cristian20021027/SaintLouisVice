import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-[#272727] px-4 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <p className="caption-4 text-[#9B9B9B]">Saint Louis Vice © 2026. Premium streetwear.</p>
        <ul className="flex gap-6">
          <li><Link to="/privacidad" className="caption-4 text-[#9B9B9B] hover:text-white">Privacidad</Link></li>
          <li><Link to="/terminos" className="caption-4 text-[#9B9B9B] hover:text-white">Términos</Link></li>
        </ul>
      </div>
    </footer>
  )
}
