interface Props {
  icon: 'mail' | 'github' | 'linkedin'
}

const Icon = ({ icon }: Props) => <>{icon}</>

export default Icon
