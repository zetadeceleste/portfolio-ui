import Image from 'next/image'

import { ImageSet } from '../../../types'

import styles from './ImageBySize.module.css'

interface Props {
  images: ImageSet
}

const renderImage = (
  imagePath: string | undefined,
  description: string,
  height: number | undefined,
  width: number | undefined,
  className: string,
) => {
  if (!imagePath) return null

  return (
    <Image
      src={imagePath}
      alt={description}
      sizes="100vw"
      height={height}
      width={width}
      className={`${styles.image} ${styles[className]}`}
    />
  )
}

const ImageBySize = ({ images }: Props) => {
  const { name, description, desktop, tablet, mobile } = images
  const imagePathDesktop = `/images/${name}-desktop.jpeg`
  const imagePathTablet = tablet && `/images/${name}-tablet.jpeg`
  const imagePathMobile = mobile && `/images/${name}-mobile.jpeg`

  return (
    <>
      {renderImage(
        imagePathDesktop,
        description,
        desktop.height,
        desktop.width,
        'desktop',
      )}
      {renderImage(
        imagePathTablet,
        description,
        tablet?.height,
        tablet?.width,
        'tablet',
      )}
      {renderImage(
        imagePathMobile,
        description,
        mobile?.height,
        mobile?.width,
        'mobile',
      )}
    </>
  )
}

export default ImageBySize
