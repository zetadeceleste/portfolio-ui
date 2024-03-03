import Image from 'next/image'

import styles from './ImageBySize.module.css'

import { ImageSet } from '@/types'
import useWindowSize from '@/utils/useWindowSize'

interface Props {
  images: ImageSet
}

const ImageBySize = ({ images }: Props) => {
  const { name, description, desktop, tablet, mobile } = images
  const { width } = useWindowSize()

  const getImageProps = () => {
    if (width <= 768 && mobile) {
      return {
        path: `/images/${name}-mobile.webp`,
        imageHeight: mobile.height,
        imageWidth: mobile.width,
      }
    }

    if (width <= 1024 && width >= 768 && tablet) {
      return {
        path: `/images/${name}-tablet.webp`,
        imageHeight: tablet.height,
        imageWidth: tablet.width,
      }
    }

    return {
      path: `/images/${name}-desktop.webp`,
      imageHeight: desktop.height,
      imageWidth: desktop.width,
    }
  }

  const { path, imageHeight, imageWidth } = getImageProps()

  return (
    <Image
      src={path}
      alt={description}
      height={imageHeight}
      width={imageWidth}
      className={styles.image}
    />
  )
}

export default ImageBySize
