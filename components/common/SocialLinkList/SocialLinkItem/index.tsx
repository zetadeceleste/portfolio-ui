import Link from 'next/link'

interface Props {
  link: string
  icon: JSX.Element
  text: string
}

const SocialLinkItem = ({ link, icon, text }: Props) => (
  <li>
    <Link href={link} target="_blank" rel="noopener noreferrer">
      {icon} {text}
    </Link>
  </li>
)

export default SocialLinkItem
