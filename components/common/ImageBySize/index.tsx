import Image from 'next/image'

import styles from './ImageBySize.module.css'

import { ImageSet } from '@/types'

interface Props {
  images: ImageSet
}

const ImageBySize = ({ images }: Props) => {
  const { name, description, height, witdth } = images

  return (
    <picture className={styles.wrapper}>
      <source
        media="(width >= 1024px)"
        srcSet={`/images/${name}-desktop.webp`}
        type="image/webp"
      />
      <source
        media="(width >= 768px)"
        srcSet={`/images/${name}-tablet.webp`}
        type="image/webp"
      />
      <Image
        src={`/images/${name}-mobile.webp`}
        width={witdth}
        height={height}
        alt={description}
        quality={100}
        className={styles.image}
        priority
      />
    </picture>
  )
}

export default ImageBySize
