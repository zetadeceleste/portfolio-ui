import ExperienceWrapper from './ExperienceWrapper'

import Container from '@/components/common/Container'
import DynamicHead from '@/components/common/DynamicHead'
import FlexWrapper from '@/components/common/FlexWrapper'
import Headline from '@/components/common/Headline'
import { Page } from '@/constants/pages'

const WorkExperiencePage = () => (
  <>
    <DynamicHead page={Page.WORK_EXPERIENCE} />
    <Container variant scroll>
      <FlexWrapper gap="large">
        <Headline
          title={
            <>
              work <br /> experience
            </>
          }
          highlighted
          variant
        />
        <ExperienceWrapper />
      </FlexWrapper>
    </Container>
  </>
)

export default WorkExperiencePage
