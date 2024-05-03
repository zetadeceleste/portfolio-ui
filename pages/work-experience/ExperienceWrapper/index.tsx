import { useEffect, useState } from 'react'

import ExperienceItem from './ExperienceItem'

import FlexWrapper from '@/components/common/FlexWrapper'
import Loader from '@/components/common/Loader'
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
    <FlexWrapper gap="large">
      {EXPERIENCE_LIST.map((experience, index) => (
        <ExperienceItem
          key={index}
          order={index + 1}
          total={EXPERIENCE_LIST.length}
          experience={experience}
        />
      ))}
    </FlexWrapper>
  )
}

export default ExperienceWrapper
