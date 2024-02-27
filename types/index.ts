export interface ImageSet {
  name: string
  description: string
  desktop: Image
  mobile: Image
  tablet?: Image
}

interface Image {
  height: number
  width: number
}
