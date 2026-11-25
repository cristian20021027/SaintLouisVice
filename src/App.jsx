import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/Cart.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import { Legal, NotFound } from './pages/Pages.jsx'

export default function App() {
  return (
    <CartProvider>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-black focus:rounded-lg focus:px-3 focus:py-2 button-md">
        Saltar al contenido
      </a>
      <Nav />
      <main id="contenido">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto/:id" element={<Product />} />
          <Route path="/privacidad" element={<Legal titulo="Política de privacidad" />} />
          <Route path="/terminos" element={<Legal titulo="Términos y condiciones" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  )
}
