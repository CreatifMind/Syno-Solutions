import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const legacyRoutes: Record<string, string> = {
  '#/products': '/products',
  '#about': '/about',
  '#services': '/solutions',
  '#brands': '/products',
  '#why-us': '/about',
  '#contact': '/contact',
}

export function RouteEffects() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const legacyTarget = location.pathname === '/' ? legacyRoutes[location.hash] : undefined
    if (legacyTarget) navigate(legacyTarget, { replace: true })
  }, [location.hash, location.pathname, navigate])

  useEffect(() => {
    if (legacyRoutes[location.hash]) return

    const focusMain = () => {
      document.querySelector<HTMLElement>('#main-content')?.focus({ preventScroll: true })
    }

    if (location.hash) {
      let frame = 0
      let attempts = 0
      let cancelled = false
      const targetId = decodeURIComponent(location.hash.slice(1))

      const scrollWhenReady = () => {
        if (cancelled) return

        const target = document.getElementById(targetId)
        if (target) {
          target.scrollIntoView({ block: 'start' })
          focusMain()
          return
        }

        attempts += 1
        if (attempts < 30) frame = window.requestAnimationFrame(scrollWhenReady)
        else focusMain()
      }

      frame = window.requestAnimationFrame(scrollWhenReady)
      return () => {
        cancelled = true
        window.cancelAnimationFrame(frame)
      }
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
    window.requestAnimationFrame(focusMain)
  }, [location.hash, location.pathname])

  return null
}
