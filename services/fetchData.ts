import { API_URL } from './apiInfo'

export const fetchData = async (path: string) => {
  try {
    const response = await fetch(`${API_URL}/${path}`)

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`)
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.error(`Error fetching data from ${path}:`, error)

    throw error
  }
}
