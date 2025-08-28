import { useEffect, useRef, useState } from 'react'

interface UseInViewportOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export const useInViewport = ({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
}: UseInViewportOptions = {}) => {
  const elementRef = useRef<HTMLElement>(null)
  const [isInViewport, setIsInViewport] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInViewport(true)

          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsInViewport(false)
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, rootMargin, triggerOnce])

  return {
    elementRef,
    isInViewport,
  }
}
