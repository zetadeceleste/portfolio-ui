export type ImageSetType = {
  name: string
  description: string
  caption?: string
  sizes?: string
  mobile?: ImageType
  tablet?: ImageType
  desktop?: ImageType
}

type ImageType = {
  height?: number
  width: number
  format: string
}
