import { ImageSetType } from '@/types'

export const HOME_PAGE_IMAGES: ImageSetType = {
  name: 'home-page',
  description: 'Illustration of a developer girl and her dog Luna.',
  caption: 'In memory of Luna, the sweetest dog in the world.',
  sizes: '(max-width: 768px) 50vw, 100vw',
  mobile: {
    height: 364,
    width: 768,
    format: 'webp',
  },
  tablet: {
    height: 698,
    width: 512,
    format: 'svg',
  },
  desktop: {
    height: 1140,
    width: 1000,
    format: 'webp',
  },
}
