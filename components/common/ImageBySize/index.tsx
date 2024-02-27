import Image from 'next/image'

import { ImageSet } from '../../../types'

import styles from './ImageBySize.module.css'

import useWindowSize from '@/utils/useWindowSize'

interface Props {
  images: ImageSet
}

const ImageBySize = ({ images }: Props) => {
  const { name, description, desktop, tablet, mobile } = images
  const { width } = useWindowSize()

  const getImagePath = () => {
    if (width >= 1024) return `/images/${name}-desktop.jpeg`
    if (width >= 768)
      return tablet
        ? `/images/${name}-tablet.jpeg`
        : `/images/${name}-desktop.jpeg`
    return mobile
      ? `/images/${name}-mobile.jpeg`
      : `/images/${name}-tablet.jpeg` || `/images/${name}-desktop.jpeg`
  }

  const getImageSize = () => {
    if (width >= 1024) return desktop
    if (width >= 768) return tablet || desktop
    return mobile || tablet || desktop
  }

  const { height, width: imgWidth } = getImageSize()

  return (
    <Image
      src={getImagePath()}
      alt={description}
      height={height}
      width={imgWidth}
      className={styles.image}
    />
  )
}

export default ImageBySize
