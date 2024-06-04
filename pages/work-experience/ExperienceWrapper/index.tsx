import { useEffect, useState } from 'react'

import ExperienceItem from './ExperienceItem'
import styles from './ExperienceWrapper.module.css'

import Loader from '@/components/Loader'
import { EXPERIENCE_LIST } from '@/constants/experienceList'

const ExperienceWrapper = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (EXPERIENCE_LIST.length > 0) {
      setIsLoading(false)
    }
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <ol className={styles.list}>
      {EXPERIENCE_LIST.map((experience, index) => (
        <li className={styles.item} key={index}>
          <ExperienceItem
            order={index + 1}
            total={EXPERIENCE_LIST.length}
            experience={experience}
          />
        </li>
      ))}
    </ol>
  )
}

export default ExperienceWrapper
