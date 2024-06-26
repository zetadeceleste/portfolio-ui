import Image from 'next/image'
import { useEffect, useState } from 'react'

import styles from './ImageBySize.module.css'

import { ImageSetType } from '@/types'
import { useWindowSize } from '@/utils/window'

interface Props {
  images: ImageSetType
  className?: string
}

// This component is used to render a "same image" based on different resolutions: mobile, tablet and desktop.
const ImageBySize = ({ images, className = '' }: Props) => {
  const { name, description, sizes, mobile, tablet, desktop } = images
  const [src, setSrc] = useState('')
  const [imgWidth, setImgWidth] = useState(0)
  const [imgHeight, setImgHeight] = useState(0)
  const { width: windowWidth } = useWindowSize()

  useEffect(() => {
    if (windowWidth < 768 && windowWidth > 0 && mobile) {
      setSrc(`/images/${name}-mobile.${mobile?.format}`)
      setImgWidth(mobile?.width)
      setImgHeight(mobile?.height || 0)
    } else if (windowWidth >= 768 && windowWidth <= 1024 && tablet) {
      setSrc(`/images/${name}-tablet.${tablet?.format}`)
      setImgWidth(tablet?.width)
      setImgHeight(tablet?.height || 0)
    } else if (windowWidth > 1024 && desktop) {
      setSrc(`/images/${name}-desktop.${desktop?.format}`)
      setImgWidth(desktop?.width)
      setImgHeight(desktop?.height || 0)
    } else {
      setSrc('')
    }
  }, [windowWidth])

  return (
    <picture className={styles.picture}>
      {src !== '' && (
        <Image
          src={src}
          width={imgWidth}
          height={imgHeight}
          alt={description}
          className={`${styles.image} ${className}`}
          sizes={sizes}
          quality={100}
          priority
        />
      )}
    </picture>
  )
}

export default ImageBySize
