import styles from './FlexWrapper.module.css'

import { buildClassNameList } from '@/utils/styles'

interface Props {
  children: React.ReactNode
  flexDirection?:
    | 'row'
    | 'row-reverse'
    | 'column'
    | 'column-to-row'
    | 'row-to-column'
  gap?: 'small' | 'medium' | 'large' | 'extra-large'
  alignItems?: 'start' | 'center' | 'end' | 'start-to-end'
  alignSelf?: 'start' | 'center' | 'end'
  justifyContent?: 'start' | 'center' | 'space-between' | 'end'
  justifySelf?: 'start' | 'center' | 'end'
  className?: string
}

const FlexWrapper = ({
  children,
  flexDirection = 'column',
  gap = 'small',
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
    <div className={`${styles.wrapper} ${classNameList} ${className}`}>
      {children}
    </div>
  )
}

export default FlexWrapper
