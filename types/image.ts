export type ImageSet = {
  name: string
  description: string
  sizes: string
  mobile?: Image
  tablet?: Image
  desktop?: Image
}

type Image = {
  height?: number
  width: number
  format: string
}
