import Head from 'next/head'

import styles from './skills.module.css'

import Container from '@/components/common/Container'
import FlexWrapper from '@/components/common/FlexWrapper'
import Headline from '@/components/common/Headline'
import List from '@/components/common/List'
import { SKILL_LIST } from '@/constants/skillList'

const SkillsPage = () => (
  <>
    <Head>
      <title>Celeste Zapata | My skills</title>
    </Head>
    <Container>
      <FlexWrapper gap="large">
        <Headline title={<>skills</>} highlighted />
        <FlexWrapper className={styles.wrapper}>
          <List data={SKILL_LIST} divided />
        </FlexWrapper>
      </FlexWrapper>
    </Container>
  </>
)

export default SkillsPage
