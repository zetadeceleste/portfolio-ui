import { useEffect, useState } from 'react'

import ExperienceItem from './ExperienceItem'

import FlexWrapper from '@/components/common/FlexWrapper'
import Loader from '@/components/common/Loader'
import { EXPERIENCE_LIST } from '@/constants/experienceList'

const ExperienceWrapper = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    if (EXPERIENCE_LIST.length > 0) {
      setLoading(false)
    }
  }, [])

  return (
    <FlexWrapper gap="medium">
      {loading ? (
        <Loader />
      ) : (
        <>
          {EXPERIENCE_LIST.map((experience, index) => (
            <ExperienceItem
              key={index}
              order={index + 1}
              total={EXPERIENCE_LIST.length}
              experience={experience}
            />
          ))}
        </>
      )}
    </FlexWrapper>
  )
}

export default ExperienceWrapper
