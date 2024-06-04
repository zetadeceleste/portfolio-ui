import Container from '@/components/Container'
import DynamicHead from '@/components/DynamicHead'
import FlexWrapper from '@/components/FlexWrapper'
import Headline from '@/components/Headline'
import List from '@/components/List'
import { SKILL_LIST } from '@/constants/skillList'
import { Page } from '@/types'

const SkillsPage = () => (
  <>
    <DynamicHead page={Page.SKILLS} />
    <Container>
      <FlexWrapper gap="large">
        <Headline title={<>skills</>} highlighted />
        <FlexWrapper>
          <List data={SKILL_LIST} divided />
        </FlexWrapper>
      </FlexWrapper>
    </Container>
  </>
)

export default SkillsPage
