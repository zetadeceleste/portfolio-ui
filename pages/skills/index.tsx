import Container from '@/components/Container'
import DynamicHead from '@/components/DynamicHead'
import FlexWrapper from '@/components/FlexWrapper'
import Headline from '@/components/Headline'
import List from '@/components/List'
import { TECH_SKILL_LIST, SOFT_SKILL_LIST } from '@/constants/skillList'
import { Page } from '@/types'

const SkillsPage = () => (
  <>
    <DynamicHead page={Page.SKILLS} />
    <Container>
      <FlexWrapper gap="large">
        <Headline title={<>skills</>} highlighted />
        <FlexWrapper gap="large">
          <List title="Tech" data={TECH_SKILL_LIST} divided />
          <List title="Soft" data={SOFT_SKILL_LIST} divided />
        </FlexWrapper>
      </FlexWrapper>
    </Container>
  </>
)

export default SkillsPage
