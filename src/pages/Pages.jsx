import { Link } from 'react-router-dom'
import { ArrowLeft } from '@phosphor-icons/react'

function Shell({ children }) {
  return <section className="mx-auto flex min-h-[70svh] max-w-3xl flex-col items-start justify-center gap-6 px-4 pt-24 pb-16">{children}</section>
}
const Back = () => <Link to="/" className="btn btn-primary"><ArrowLeft size={20} weight="bold" aria-hidden="true" />Volver al inicio</Link>

export function Legal({ titulo }) {
  return (
    <Shell>
      <h1 className="heading-2">{titulo}</h1>
      <p className="body-3 text-[#9B9B9B]">{'{{texto legal pendiente}}'}</p>
      <Back />
    </Shell>
  )
}

export function NotFound() {
  return (
    <Shell>
      <p className="caption-4 text-[#9B9B9B]">Error 404</p>
      <h1 className="heading-2 hero-gradient">Esta página no existe.</h1>
      <p className="body-3 text-[#9B9B9B]">El enlace está roto o la página cambió de lugar. Vuelve al inicio para ver la colección.</p>
      <Back />
    </Shell>
  )
}
