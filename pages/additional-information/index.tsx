import Container from '@/components/common/Container'
import DynamicHead from '@/components/common/DynamicHead'
import FlexWrapper from '@/components/common/FlexWrapper'
import Headline from '@/components/common/Headline'
import List from '@/components/common/List'
import { Page } from '@/types'

const AdditionalInformationPage = () => (
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
                Associate Degree in Programming at Universidad Tecnológica
                Nacional
              </p>
              <span>AUG 2017 - FEB 2020 [Mendoza, Argentina]</span>
            </FlexWrapper>
          </FlexWrapper>
          <FlexWrapper gap="medium">
            <h3>Languages</h3>
            <p>Spanish and English.</p>
          </FlexWrapper>
          <List
            title="Volunteering"
            data={[
              { text: 'Django Girls', label: '2019 [Mendoza, Argentina]' },
              {
                text: 'AMDE (Asociación Mendocina de Deportes Electrónicos)',
                label: '2018 - 2019 [Mendoza, Argentina]',
              },
            ]}
          />
        </FlexWrapper>
      </FlexWrapper>
    </Container>
  </>
)

export default AdditionalInformationPage
