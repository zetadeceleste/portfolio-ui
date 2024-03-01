import styles from './FlexWrapper.module.css'

interface Props {
  children: React.ReactNode
  flexDirection?: 'row' | 'column'
  alignItems?: 'start' | 'center' | 'end'
  justifyContent?: 'spaced' | 'start' | 'center' | 'end'
  gap?: 'small' | 'medium' | 'large'
}

const FlexWrapper = ({
  children,
  flexDirection = 'row',
  alignItems = 'start',
  justifyContent = 'start',
  gap = 'small',
}: Props) => (
  <div
    className={`${styles.wrapper} ${styles[flexDirection]}
    ${styles[`align-${alignItems}`]}
    ${styles[`justify-${justifyContent}`]}
    ${styles[`gap-${gap}`]}
    `}
  >
    {children}
  </div>
)

export default FlexWrapper
