import { useEffect, useState } from 'react'

export const useWindowSize = () => {
  // Initialize state with width and height set to 0
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    // Define a function that updates the state with the current window dimensions
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth, // Get current window width
        height: window.innerHeight, // Get current window height
      })
    }

    // Add an event listener for the 'resize' event on the window
    window.addEventListener('resize', handleResize)

    // Call handleResize immediately to set the initial size
    handleResize()

    // Return a cleanup function that removes the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty dependency array means this effect runs only on mount and unmount

  // Return the current window size
  return windowSize
}
