import Image from 'next/image'
import { useState, useEffect } from 'react'

import Loader from '../Loader'

import styles from './ImageBySize.module.css'

import { ImageSet } from '@/types'
import { useWindowSize } from '@/utils/window'

interface Props {
  images: ImageSet
}

const ImageBySize = ({ images }: Props) => {
  const { name, description, desktop, tablet } = images
  const { width } = useWindowSize()

  const [imageProps, setImageProps] = useState({
    path: '',
    imageHeight: 0,
    imageWidth: 0,
    imageMobile: false,
    sizes: '',
  })

  useEffect(() => {
    if (width < 768) {
      setImageProps({
        path: `/images/${name}-mobile.webp`,
        imageHeight: 0,
        imageWidth: 0,
        imageMobile: true,
        sizes: '100vw',
      })
    }

    if (width >= 768 && width <= 1024 && tablet) {
      setImageProps({
        path: `/images/${name}-tablet.webp`,
        imageHeight: tablet.height,
        imageWidth: tablet.width,
        imageMobile: false,
        sizes: '50vw',
      })
    }

    if (width > 1024 && desktop) {
      setImageProps({
        path: `/images/${name}-desktop.webp`,
        imageHeight: desktop.height,
        imageWidth: desktop.width,
        imageMobile: false,
        sizes: '70vw',
      })
    }
  }, [width])

  return (
    <>
      {width === 0 ? (
        <Loader />
      ) : (
        <Image
          src={imageProps.path}
          alt={description}
          height={imageProps.imageHeight}
          width={imageProps.imageWidth}
          className={imageProps.imageMobile ? styles.mobile : styles.image}
          priority={imageProps.imageMobile ? true : false}
          sizes={imageProps.sizes}
          placeholder="blur"
          blurDataURL={imageProps.path}
        />
      )}
    </>
  )
}

export default ImageBySize
