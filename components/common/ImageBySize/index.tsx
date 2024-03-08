import Image from 'next/image'

import styles from './ImageBySize.module.css'

import { ImageSet } from '@/types'
import { useWindowSize } from '@/utils/window'

interface Props {
  images: ImageSet
  priority?: boolean
}

const ImageBySize = ({ images, priority = false }: Props) => {
  const { name, description, desktop, tablet } = images
  const { width } = useWindowSize()

  const getImageProps = () => {
    if (width < 768) {
      return {
        path: `/images/${name}-mobile.webp`,
        imageMobile: true,
      }
    }

    if (width >= 768 && width <= 1024 && tablet) {
      return {
        path: `/images/${name}-tablet.webp`,
        imageHeight: tablet.height,
        imageWidth: tablet.width,
      }
    }

    // Fallback to desktop
    return {
      path: `/images/${name}-desktop.webp`,
      imageHeight: desktop.height,
      imageWidth: desktop.width,
    }
  }

  const { path, imageHeight, imageWidth, imageMobile } = getImageProps()

  return (
    <Image
      src={path}
      alt={description}
      height={imageMobile ? 0 : imageHeight}
      width={imageMobile ? 0 : imageWidth}
      className={imageMobile ? styles.mobile : styles.image}
      sizes="100vw"
      priority={priority}
    />
  )
}

export default ImageBySize
