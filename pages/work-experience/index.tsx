import ExperienceWrapper from './ExperienceWrapper'

import Container from '@/components/Container'
import DynamicHead from '@/components/DynamicHead'
import FlexWrapper from '@/components/FlexWrapper'
import Headline from '@/components/Headline'
import { Page } from '@/types'

const WorkExperiencePage = () => (
  <>
    <DynamicHead page={Page.WORK_EXPERIENCE} />
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
  </>
)

export default WorkExperiencePage
