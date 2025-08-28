import Container from '@/components/Container'
import FlexWrapper from '@/components/FlexWrapper'
import Headline from '@/components/Headline'
import List from '@/components/List'

const AdditionalInformationSection = () => (
  <Container id="additional-info">
    <FlexWrapper gap="large">
      <Headline
        title={
          <>
            additional <br /> information
          </>
        }
        highlighted
        animate
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
)

export default AdditionalInformationSection
