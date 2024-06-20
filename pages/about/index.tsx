/* eslint-disable react/no-children-prop */
import { useEffect, useState } from 'react'
import Markdown from 'react-markdown'

import styles from './about.module.css'

import Container from '@/components/Container'
import DynamicHead from '@/components/DynamicHead'
import FlexWrapper from '@/components/FlexWrapper'
import Headline from '@/components/Headline'
import Loader from '@/components/Loader'
import SocialLinks from '@/components/SocialLinks'
import { fetchAboutData } from '@/services'
import { AboutType } from '@/services/types'
import { Page } from '@/types'

const AboutPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [aboutData, setAboutData] = useState<AboutType>({
    about: '',
  })

  useEffect(() => {
    const loadAboutData = async () => {
      try {
        const data = await fetchAboutData()
        data?.about && setAboutData(data)
      } catch (err) {
        console.error('Error fetching additional information:', err)
      } finally {
        setIsLoading(false)
      }
    }

    loadAboutData()
  }, [])

  if (isLoading) return <Loader />

  return (
    <>
      <DynamicHead page={Page.ABOUT} />
      <Container>
        <FlexWrapper gap="large">
          <Headline title={<>howdy!</>} highlighted />
          <FlexWrapper className={styles.content} gap="medium">
            <Markdown children={aboutData?.about} />
          </FlexWrapper>
          <SocialLinks />
        </FlexWrapper>
      </Container>
    </>
  )
}

export default AboutPage
