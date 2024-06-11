import { useEffect, useState } from 'react'

import Container from '@/components/Container'
import DynamicHead from '@/components/DynamicHead'
import FlexWrapper from '@/components/FlexWrapper'
import Headline from '@/components/Headline'
import List from '@/components/List'
import Loader from '@/components/Loader'
import { fetchSkillsList } from '@/services'
import { SkillLinkListType } from '@/services/types'
import { Page } from '@/types'

const SkillsPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [skillList, setSkillList] = useState<SkillLinkListType>({
    tech_skills: [],
    soft_skills: [],
  })

  useEffect(() => {
    const loadSkillList = async () => {
      try {
        const data = await fetchSkillsList()
        data?.tech_skills?.length > 0 &&
          data?.soft_skills?.length > 0 &&
          setSkillList(data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    loadSkillList()
  }, [])

  if (isLoading) return <Loader />

  return (
    <>
      <DynamicHead page={Page.SKILLS} />
      <Container>
        <FlexWrapper gap="large">
          <Headline title={<>skills</>} highlighted />
          <FlexWrapper gap="large">
            <List title="Tech" data={skillList?.tech_skills} divided />
            <List title="Soft" data={skillList?.soft_skills} divided />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </>
  )
}

export default SkillsPage
