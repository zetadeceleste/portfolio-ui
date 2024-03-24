import ExperienceItem from './ExperienceItem'

import FlexWrapper from '@/components/common/FlexWrapper'
import { EXPERIENCE_LIST } from '@/constants/experienceList'

const ExperienceWrapper = () => (
  <FlexWrapper gap="medium">
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

export default ExperienceWrapper
