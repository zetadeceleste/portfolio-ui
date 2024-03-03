import styles from './FlexWrapper.module.css'

interface Props {
  children: React.ReactNode
  flexDirection?: 'row' | 'column'
  alignItems?: 'start' | 'center' | 'end'
  justifyContent?: 'space-between' | 'start' | 'center' | 'end'
  justifySelf?: 'start' | 'center' | 'end'
  gap?: 'extra-small' | 'small' | 'medium' | 'large'
}

const FlexWrapper = ({
  children,
  flexDirection = 'row',
  alignItems = 'start',
  justifyContent = 'start',
  justifySelf = 'center',
  gap = 'small',
}: Props) => (
  <div
    className={`${styles.wrapper} ${styles[flexDirection]}
    ${styles[`align-${alignItems}`]}
    ${styles[`justify-content-${justifyContent}`]}
    ${styles[`justify-self-${justifySelf}`]}
    ${styles[`gap-${gap}`]}
    `}
  >
    {children}
  </div>
)

export default FlexWrapper
