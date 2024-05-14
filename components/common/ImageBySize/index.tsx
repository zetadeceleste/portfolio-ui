import Image from 'next/image'

import styles from './ImageBySize.module.css'

import { ImageSet } from '@/types'

interface Props {
  images: ImageSet
}

const ImageBySize = ({ images }: Props) => {
  const { name, description } = images

  return (
    <picture className={styles.picture}>
      <source
        media="(width >= 768px)"
        srcSet={`/images/${name}-desktop.svg`}
        type="image/svg+xml"
      />
      <Image
        src={`/images/${name}-mobile.svg`}
        width={100}
        height={100}
        alt={description}
        quality={100}
        className={styles.image}
        sizes="(width >= 1024px) 60vw, (width >= 768px) 50vw, 100vw"
        priority
      />
    </picture>
  )
}

export default ImageBySize
