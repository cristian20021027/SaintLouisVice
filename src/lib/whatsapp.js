import { products, formatPrice } from '../data/products.js'

// Número del negocio con indicativo de Colombia (57), sin espacios ni signos.
export const WHATSAPP_NUMBER = '573023029945'

export function buildOrderMessage(items, total) {
  const lineas = items.map((item, i) => {
    const p = products.find((x) => x.id === item.productId)
    const detalle = p ? `${p.prenda} ${p.color.toLowerCase()}` : ''
    return [
      `${i + 1}. ${item.nombre}${detalle ? ` (${detalle})` : ''}`,
      `Talla: ${item.size}`,
      `Precio: ${formatPrice(item.price)}`,
      `Cantidad: ${item.qty}`,
      `Subtotal: ${formatPrice(item.price * item.qty)}`,
    ].join('\n')
  })
  return [
    'Hola Saint Louis Vice, quiero hacer este pedido:',
    '',
    lineas.join('\n\n'),
    '',
    `Total: ${formatPrice(total)}`,
  ].join('\n')
}

export const buildWhatsAppUrl = (items, total) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildOrderMessage(items, total))}`
