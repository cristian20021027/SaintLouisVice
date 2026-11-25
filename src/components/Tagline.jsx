import { useEffect, useRef, useState } from 'react'

function Word({ children }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setOn(true); io.disconnect() }
    }, { rootMargin: '0px 0px -35% 0px' })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return <span ref={ref} className={`word ${on ? 'on' : ''}`}>{children} </span>
}

export default function Tagline({ text, className = 'heading-3 mx-auto' }) {
  return (
    <p className={`${className} max-w-[680px]`}>
      {text.split(' ').map((w, i) => <Word key={i}>{w}</Word>)}
    </p>
  )
}
