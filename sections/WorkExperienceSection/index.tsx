import ExperienceWrapper from './ExperienceWrapper'

import Container from '@/components/Container'
import FlexWrapper from '@/components/FlexWrapper'
import Headline from '@/components/Headline'

const WorkExperienceSection = () => (
  <Container scroll>
    <FlexWrapper gap="large">
      <Headline
        title={
          <>
            work <br /> experience
          </>
        }
        highlighted
      />
      <ExperienceWrapper />
    </FlexWrapper>
  </Container>
)

export default WorkExperienceSection
