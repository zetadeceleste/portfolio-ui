import { useCallback } from 'react'

export const useScrollToSection = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    // If it's the hero section, scroll to top
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    // Find the section element
    const element = document.getElementById(sectionId)
    if (element) {
      // Calculate offset to account for header height
      const headerHeight = 80 // Adjust based on your header height
      const elementPosition = element.offsetTop - headerHeight

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      })
    }
  }, [])

  return { scrollToSection }
}
