// Datos del catálogo 2026. Los precios se conectarán después con Supabase.
export const PRICE_OPTIONS = [
  { id: '55', label: '$55.000', value: 55000 },
  { id: '65', label: '$65.000', value: 65000 },
]
export const SIZES = ['2', '4', '6', '8', '10', '12', '14', '16', 'S', 'M', 'L', 'XL']
export const formatPrice = (n) => `$${n.toLocaleString('es-CO')}`

const base = (n, nombre, prenda, color) => ({
  id: n, numero: String(n).padStart(2, '0'), nombre, prenda, color,
  imagen: `/productos/${String(n).padStart(2, '0')}.webp`,
  precioDesde: PRICE_OPTIONS[0].label,
})
export const products = [
  base(1, 'Saint Tunes', 'Camiseta oversize', 'Blanca'),
  base(2, 'Play Mode', 'Camiseta oversize', 'Blanca'),
  base(3, 'David Art', 'Camiseta oversize', 'Negra'),
  base(4, 'Saint Louis Vice DJ', 'Camiseta oversize', 'Blanca'),
  base(5, 'Caryled', 'Camiseta oversize', 'Negra'),
  base(6, 'Here We Go Again', 'Camiseta oversize', 'Negra'),
  base(7, 'Valid', 'Camiseta oversize', 'Negra'),
  base(8, 'Saint Mercy Vice City Edition', 'Camiseta oversize', 'Blanca'),
  base(9, 'Moonlight Racer', 'Hoodie', 'Negro'),
  base(10, 'All We Need Is Money', 'Camiseta oversize', 'Negra'),
  base(11, 'Art Good Day', 'Camiseta oversize', 'Blanca'),
  base(12, 'One Love', 'Camiseta oversize', 'Negra'),
  base(13, 'Mentality', 'Camiseta oversize', 'Blanca'),
  base(14, 'Stay Wild', 'Camiseta oversize', 'Negra'),
]
