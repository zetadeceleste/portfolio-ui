import Image from 'next/image'

import styles from './ImageResponsive.module.css'

interface Props {
  imageName: string
  width: number
  height: number
  description: string
}

const ImageResponsive = ({ imageName, width, height, description }: Props) => {
  const imagePath = `/images/${imageName}.jpeg`

  return (
    <div className={styles.responsive}>
      <Image
        src={imagePath}
        alt={description}
        width={width}
        height={height}
        layout="responsive"
      />
    </div>
  )
}

export default ImageResponsive
