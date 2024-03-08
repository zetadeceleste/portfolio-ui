import Head from 'next/head'

import Container from '@/components/common/Container'
import FlexWrapper from '@/components/common/FlexWrapper'
import Headline from '@/components/common/Headline'
import List from '@/components/common/List'
import { useWindowSize } from '@/utils/window'

const AdditionalInformationPage = () => {
  const { width } = useWindowSize()

  return (
    <>
      <Head>
        <title>Celeste Zapata | Education, languages & volunteering</title>
      </Head>
      <Container>
        <FlexWrapper gap="medium">
          <Headline
            title={
              <>
                additional <br /> information
              </>
            }
            highlighted
          />
          <FlexWrapper gap="medium">
            <FlexWrapper gap="small">
              <h3>Education</h3>
              <p>
                Associate Degree in Programming at Universidad Tecnológica
                Nacional
              </p>
              <FlexWrapper flexDirection={width <= 768 ? 'column' : 'row'}>
                <span>AUG 2017 - FEB 2020</span>
                <span>[Mendoza, Argentina]</span>
              </FlexWrapper>
            </FlexWrapper>
            <FlexWrapper gap="small">
              <h3>Languages</h3>
              <p>Spanish and English.</p>
            </FlexWrapper>
            <List
              title="Volunteering"
              data={[
                { text: 'Django Girls', label: '2019 [Mendoza, Argentina]' },
                { text: 'Django Girls', label: '2019 [Mendoza, Argentina]' },
              ]}
            />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </>
  )
}

export default AdditionalInformationPage
