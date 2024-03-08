export type ImageSet = {
  name: string
  description: string
  desktop: Image
  mobile: Image
  tablet?: Image
}

type Image = {
  height: number
  width: number
}
