import { useEffect, useState } from 'react'

import Container from '@/components/Container'
import DynamicHead from '@/components/DynamicHead'
import FlexWrapper from '@/components/FlexWrapper'
import Headline from '@/components/Headline'
import List from '@/components/List'
import Loader from '@/components/Loader'
import { fetchAdditionalInformationData } from '@/services'
import { AdditionalInformationType } from '@/services/types'
import { Page } from '@/types'

const AdditionalInformationPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [additionalInformationData, setAdditionalInformationData] =
    useState<AdditionalInformationType>({
      education: {
        degree: '',
        institution: '',
        duration: '',
        location: '',
      },
      languages: [],
      volunteering: [],
    })
  const [languageConnector, setLanguageConnector] = useState('')

  useEffect(() => {
    const loadAdditionalInformationData = async () => {
      try {
        const data = await fetchAdditionalInformationData()
        data.education &&
          data.languages?.length > 0 &&
          data.volunteering?.length > 0 &&
          setAdditionalInformationData(data)

        if (data.languages?.length === 2) {
          setLanguageConnector(' and ')
        } else if (data.languages?.length > 2) {
          setLanguageConnector(', ')
        }
      } catch (err) {
        console.error('Error fetching additional information:', err)
      } finally {
        setIsLoading(false)
      }
    }

    loadAdditionalInformationData()
  }, [])

  if (isLoading) return <Loader />

  return (
    <>
      <DynamicHead page={Page.ADDITIONAL_INFORMATION} />
      <Container>
        <FlexWrapper gap="large">
          <Headline
            title={
              <>
                additional <br /> information
              </>
            }
            highlighted
          />
          <FlexWrapper gap="large">
            <FlexWrapper gap="medium">
              <h3>Education</h3>
              <FlexWrapper>
                <p>
                  {additionalInformationData?.education?.degree} at{' '}
                  {additionalInformationData?.education?.institution}
                </p>
                <span>
                  {additionalInformationData?.education?.duration} [
                  {additionalInformationData?.education?.location}]
                </span>
              </FlexWrapper>
            </FlexWrapper>
            <FlexWrapper gap="medium">
              <h3>Languages</h3>
              <p>
                {additionalInformationData?.languages.join(languageConnector)}
              </p>
            </FlexWrapper>
            <List
              title="Volunteering"
              data={additionalInformationData?.volunteering}
            />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </>
  )
}

export default AdditionalInformationPage
