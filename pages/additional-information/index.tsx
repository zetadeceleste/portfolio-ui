import Head from 'next/head'

import styles from './additional-information.module.css'

import Container from '@/components/common/Container'
import FlexWrapper from '@/components/common/FlexWrapper'
import Headline from '@/components/common/Headline'
import List from '@/components/common/List'

const AdditionalInformationPage = () => (
  <>
    <Head>
      <title>Celeste Zapata | Education, languages & volunteering</title>
    </Head>
    <Container className={styles['additional-information-container']}>
      <FlexWrapper alignSelf="start" gap="medium">
        <Headline
          title={
            <>
              additional <br /> information
            </>
          }
          highlighted
        />
        <FlexWrapper gap="medium">
          <FlexWrapper>
            <h3>Education</h3>
            <p>
              Associate Degree in Programming at Universidad Tecnológica
              Nacional
            </p>
            <FlexWrapper flexDirection="row">
              <span>AUG 2017 - FEB 2020</span>
              <span>[Mendoza, Argentina]</span>
            </FlexWrapper>
          </FlexWrapper>
          <FlexWrapper>
            <h3>Languages</h3>
            <p>Spanish and English.</p>
          </FlexWrapper>
          <FlexWrapper>
            <h3>Volunteering</h3>
            <List
              data={[
                { text: 'Django Girls', label: '2019 [Mendoza, Argentina]' },
                { text: 'Django Girls', label: '2019 [Mendoza, Argentina]' },
              ]}
            />
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </Container>
  </>
)

export default AdditionalInformationPage
