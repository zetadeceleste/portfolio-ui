import { useEffect, useState } from 'react'

import ExperienceItem from './ExperienceItem'
import styles from './ExperienceWrapper.module.css'

import Loader from '@/components/Loader'
import { fetchExperienceListData } from '@/services/'
import { ExperienceListType } from '@/services/types'

const ExperienceWrapper = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [experienceListData, setExperienceListData] =
    useState<ExperienceListType>([])

  useEffect(() => {
    const loadExperienceListData = async () => {
      try {
        const data = await fetchExperienceListData()
        data?.length > 0 && setExperienceListData(data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    loadExperienceListData()
  }, [])

  if (isLoading) return <Loader />

  return (
    <ol className={styles.list}>
      {experienceListData?.map((experience, index) => (
        <li className={styles.item} key={index}>
          <ExperienceItem experience={experience} />
        </li>
      ))}
    </ol>
  )
}

export default ExperienceWrapper
