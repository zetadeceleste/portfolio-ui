import { useEffect, useState } from 'react'

import Container from '@/components/Container'
import DynamicHead from '@/components/DynamicHead'
import FlexWrapper from '@/components/FlexWrapper'
import Headline from '@/components/Headline'
import List from '@/components/List'
import Loader from '@/components/Loader'
import { fetchSkillsListData } from '@/services'
import { SkillLinkListType } from '@/services/types'
import { Page } from '@/types'

const SkillsPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [skillListData, setSkillListData] = useState<SkillLinkListType>({
    tech_skills: [],
    soft_skills: [],
  })

  useEffect(() => {
    const loadSkillListData = async () => {
      try {
        const data = await fetchSkillsListData()
        data?.tech_skills?.length > 0 &&
          data?.soft_skills?.length > 0 &&
          setSkillListData(data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    loadSkillListData()
  }, [])

  if (isLoading) return <Loader />

  return (
    <>
      <DynamicHead page={Page.SKILLS} />
      <Container>
        <FlexWrapper gap="large">
          <Headline title={<>skills</>} highlighted />
          <FlexWrapper gap="large">
            <List title="Tech" data={skillListData?.tech_skills} divided />
            <List title="Soft" data={skillListData?.soft_skills} divided />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </>
  )
}

export default SkillsPage
