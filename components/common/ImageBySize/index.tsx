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
    if (width >= 1024) {
      return {
        src: `/images/${name}-desktop.jpeg`,
        height: desktop.height,
        width: desktop.width,
      }
    }

    if (width >= 768 && tablet) {
      return {
        src: `/images/${name}-tablet.jpeg`,
        height: tablet.height,
        width: tablet.width,
      }
    }

    if (mobile) {
      return {
        src: `/images/${name}-mobile.jpeg`,
        height: mobile.height,
        width: mobile.width,
      }
    }

    // Fallback to desktop image
    return {
      src: `/images/${name}-desktop.jpeg`,
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
