import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)
  const hovered = useRef(false)

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      current.current.x += (pos.current.x - current.current.x) * 0.12
      current.current.y += (pos.current.y - current.current.y) * 0.12
      if (cursorRef.current) {
        cursorRef.current.style.left = current.current.x + 'px'
        cursorRef.current.style.top = current.current.y + 'px'
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    const onOver = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover]') && !hovered.current) {
        hovered.current = true
        cursorRef.current?.classList.add('hovered')
      }
    }
    const onOut = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover]') && hovered.current) {
        hovered.current = false
        cursorRef.current?.classList.remove('hovered')
      }
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return <div className="cursor-blend" ref={cursorRef} />
}
