import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const KEY = 'slv-cart'
const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem(KEY)) || [] } catch { return [] }
  })
  const [open, setOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(items))
  }, [items])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const value = useMemo(() => {
    const count = items.reduce((n, i) => n + i.qty, 0)
    const total = items.reduce((n, i) => n + i.price * i.qty, 0)
    const add = (item) => {
      setItems((prev) => {
        const i = prev.findIndex((x) => x.productId === item.productId && x.size === item.size && x.price === item.price)
        if (i >= 0) {
          return prev.map((x, idx) => idx === i ? { ...x, qty: x.qty + 1 } : x)
        }
        return [...prev, { ...item, id: `${item.productId}-${item.size}-${item.price}`, qty: 1 }]
      })
      setOpen(true)
    }
    const setQty = (id, qty) => {
      setItems((prev) => prev.flatMap((x) => x.id !== id ? [x] : qty < 1 ? [] : [{ ...x, qty }]))
    }
    const remove = (id) => setItems((prev) => prev.filter((x) => x.id !== id))
    const clear = () => setItems([])
    return { items, open, setOpen, add, setQty, remove, clear, count, total }
  }, [items, open])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart necesita CartProvider')
  return ctx
}
