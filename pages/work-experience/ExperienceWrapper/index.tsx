import { useEffect, useState } from 'react'

import ExperienceItem from './ExperienceItem'
import styles from './ExperienceWrapper.module.css'

import Loader from '@/components/Loader'
import { fetchExperienceList } from '@/services/'
import { ExperienceListType } from '@/services/types'

const ExperienceWrapper = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [experienceList, setExperienceList] = useState<ExperienceListType>([])

  useEffect(() => {
    const loadExperienceList = async () => {
      try {
        const data = await fetchExperienceList()
        data?.length > 0 && setExperienceList(data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    loadExperienceList()
  }, [])

  if (isLoading) return <Loader />

  return (
    <ol className={styles.list}>
      {experienceList?.map((experience, index) => (
        <li className={styles.item} key={index}>
          <ExperienceItem experience={experience} />
        </li>
      ))}
    </ol>
  )
}

export default ExperienceWrapper
