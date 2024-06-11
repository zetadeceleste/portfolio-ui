import { useEffect, useState } from 'react'

import Container from '@/components/Container'
import DynamicHead from '@/components/DynamicHead'
import FlexWrapper from '@/components/FlexWrapper'
import Headline from '@/components/Headline'
import List from '@/components/List'
import Loader from '@/components/Loader'
import { fetchAdditionalInformation } from '@/services'
import { AdditionalInformationType } from '@/services/types'
import { Page } from '@/types'

const AdditionalInformationPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [additionalInformation, setAdditionalInformation] =
    useState<AdditionalInformationType>({
      education: [],
      languages: [],
      volunteering: [],
    })
  const [languageConnector, setLanguageConnector] = useState('')

  useEffect(() => {
    const loadAdditionalInformation = async () => {
      try {
        const data = await fetchAdditionalInformation()
        data.education?.length > 0 &&
          data.languages?.length > 0 &&
          data.volunteering?.length > 0 &&
          setAdditionalInformation(data)

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

    loadAdditionalInformation()
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
              {additionalInformation?.education?.map(
                ({ degree, institution, duration, location }, index) => (
                  <FlexWrapper key={index}>
                    <p>
                      {degree} at {institution}
                    </p>
                    <span>
                      {duration} [{location}]
                    </span>
                  </FlexWrapper>
                ),
              )}
            </FlexWrapper>
            <FlexWrapper gap="medium">
              <h3>Languages</h3>
              <p>{additionalInformation?.languages.join(languageConnector)}</p>
            </FlexWrapper>
            <List
              title="Volunteering"
              data={additionalInformation?.volunteering}
            />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </>
  )
}

export default AdditionalInformationPage
