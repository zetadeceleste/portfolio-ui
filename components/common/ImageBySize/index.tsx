import Image from 'next/image'
import { useEffect, useState } from 'react'

import styles from './ImageBySize.module.css'

import { ImageSet } from '@/types'
import { useWindowSize } from '@/utils/window'

interface Props {
  images: ImageSet
}

const ImageBySize = ({ images }: Props) => {
  const { name, description } = images
  const [src, setSrc] = useState('')
  const { width: windowWidth } = useWindowSize()

  useEffect(() => {
    if (windowWidth < 768 && windowWidth > 0) {
      setSrc(`/images/${name}--mobile.svg`)
    } else if (windowWidth >= 768 && windowWidth <= 1024) {
      setSrc(`/images/${name}--tablet.svg`)
    } else {
      setSrc(`/images/${name}--desktop.svg`)
    }
  }, [windowWidth])

  return (
    src !== '' && (
      <picture className={styles.picture}>
        <Image
          src={src}
          height={0}
          width={0}
          alt={description}
          quality={100}
          className={styles.image}
          priority
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </picture>
    )
  )
}

export default ImageBySize
