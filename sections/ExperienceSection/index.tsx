import ExperienceWrapper from './ExperienceWrapper'

import Container from '@/components/Container'
import FlexWrapper from '@/components/FlexWrapper'
import Headline from '@/components/Headline'

const ExperienceSection = () => (
  <Container id="experience" scroll>
    <FlexWrapper gap="large">
      <Headline
        title={
          <>
            work <br /> experience
          </>
        }
        highlighted
        animate
      />
      <ExperienceWrapper />
    </FlexWrapper>
  </Container>
)

export default ExperienceSection
