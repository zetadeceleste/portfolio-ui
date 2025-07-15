import { ImageSetType } from '@/types'

export const HERO_SECTION_IMAGES: ImageSetType = {
  name: 'hero',
  description: 'Ilustration of a developer girl and her dog Luna.',
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
