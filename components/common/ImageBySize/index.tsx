import Image from 'next/image'

import styles from './ImageBySize.module.css'

import { ImageSet } from '@/types'

interface Props {
  images: ImageSet
}

const ImageBySize = ({ images }: Props) => {
  const { name, description, heigth, width } = images

  return (
    <picture className={styles.picture}>
      <source
        media="(width >= 1024px)"
        srcSet={`/images/${name}--desktop.svg`}
        type="image/svg+xml"
      />
      <source
        media="(width >= 768px)"
        srcSet={`/images/${name}--tablet.svg`}
        type="image/svg+xml"
      />
      <Image
        src={`/images/${name}--mobile.svg`}
        height={heigth}
        width={width}
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
