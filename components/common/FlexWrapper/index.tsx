import styles from './FlexWrapper.module.css'

import { buildClassNameList } from '@/utils/styles'

interface Props {
  children: React.ReactNode
  flexDirection?: 'row' | 'row-reverse' | 'column'
  gap?: 'extra-small' | 'small' | 'medium' | 'large'
  alignItems?: 'start' | 'center' | 'end'
  alignSelf?: 'start' | 'center' | 'end'
  justifyContent?: 'start' | 'center' | 'space-between' | 'end'
  justifySelf?: 'start' | 'center' | 'end'
  className?: string
}

const FlexWrapper = ({
  children,
  flexDirection = 'column',
  gap = 'extra-small',
  alignItems,
  alignSelf,
  justifyContent,
  justifySelf,
  className = '',
}: Props) => {
  const classNameList = buildClassNameList(styles, {
    flexDirection,
    alignItems,
    alignSelf,
    justifyContent,
    justifySelf,
    gap,
  })

  return (
    <div className={`${className} ${styles.wrapper} ${classNameList}`}>
      {children}
    </div>
  )
}

export default FlexWrapper
