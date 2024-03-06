import styles from './FlexWrapper.module.css'

import buildClassNameList from '@/utils/styles'

interface Props {
  children: React.ReactNode
  flexDirection?: 'row' | 'column'
  gap?: 'extra-small' | 'small' | 'medium' | 'large'
  alignItems?: 'start' | 'center' | 'end'
  alignSelf?: 'start' | 'center' | 'end'
  justifyContent?: 'start' | 'center' | 'space-between' | 'end'
  justifySelf?: 'start' | 'center' | 'end'
}

const FlexWrapper = ({
  children,
  flexDirection = 'column',
  gap = 'extra-small',
  alignItems,
  alignSelf,
  justifyContent,
  justifySelf,
}: Props) => {
  const classNameList = buildClassNameList(styles, {
    flexDirection,
    alignItems,
    alignSelf,
    justifyContent,
    justifySelf,
    gap,
  })

  return <div className={`${styles.wrapper} ${classNameList}`}>{children}</div>
}

export default FlexWrapper
