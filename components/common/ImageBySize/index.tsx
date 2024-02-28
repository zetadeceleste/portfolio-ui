import Image from 'next/image'

import styles from './ImageBySize.module.css'
import { ImageSet } from './types'

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
        src: `/images/${name}-mobile.webp`,
        height: mobile.height,
        width: mobile.width,
      }
    }

    if (width <= 1024 && width >= 768 && tablet) {
      return {
        src: `/images/${name}-tablet.webp`,
        height: tablet.height,
        width: tablet.width,
      }
    }

    return {
      src: `/images/${name}-desktop.webp`,
      height: desktop.height,
      width: desktop.width,
    }
  }

  const imageProps = getImageProps()

  return (
    <Image
      src={imageProps.src}
      alt={description}
      height={imageProps.height}
      width={imageProps.width}
      className={styles.image}
    />
  )
}

export default ImageBySize
