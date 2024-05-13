import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import styles from './ImageBySize.module.css'

import { ImageSet } from '@/types'
import { useWindowSize } from '@/utils/window'

interface Props {
  images: ImageSet
}

const ImageBySize = ({ images }: Props) => {
  const { name, description, height, width } = images
  const [, setSource] = useState(`/images/${name}-mobile.webp`)
  const { width: windowWidth } = useWindowSize()

  useEffect(() => {
    const handleSourceChange = () => {
      if (windowWidth >= 1024) {
        setSource(`/images/${name}-desktop.webp`)
      } else if (windowWidth >= 768) {
        setSource(`/images/${name}-tablet.webp`)
      } else {
        setSource(`/images/${name}-mobile.webp`)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleSourceChange)

      handleSourceChange()
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleSourceChange)
      }
    }
  }, [name])

  return (
    <picture className={styles.picture}>
      <source
        media="(min-width: 1024px)"
        srcSet={`/images/${name}-desktop.webp`}
        type="image/webp"
      />
      <source
        media="(min-width: 768px)"
        srcSet={`/images/${name}-tablet.webp`}
        type="image/webp"
      />
      <Image
        src={`/images/${name}-mobile.webp`}
        width={width}
        height={height}
        alt={description}
        quality={100}
        className={styles.image}
        sizes="(min-width: 1024px) 60vw, (min-width: 768px) 50vw, 100vw"
        priority
      />
    </picture>
  )
}

export default ImageBySize
