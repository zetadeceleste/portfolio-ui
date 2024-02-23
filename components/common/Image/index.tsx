type Props = {
  imagePath: string
  description: string
}

const Image: React.FC<Props> = ({ imagePath, description }) => (
  <img src={imagePath} alt={description} />
)

export default Image
