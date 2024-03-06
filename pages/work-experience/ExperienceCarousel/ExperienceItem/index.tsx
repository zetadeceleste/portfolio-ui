import Link from 'next/link'

import FlexWrapper from '@/components/common/FlexWrapper'
import List from '@/components/common/List'

const ExperienceItem = () => (
  <FlexWrapper gap="small">
    <FlexWrapper>
      <h3>
        Frontend Developer at{' '}
        <Link className="variant" href="">
          Ocean Ring Technologies
        </Link>
      </h3>
      <FlexWrapper flexDirection="row">
        <span>APR 2020 - PRESENT</span>
        <span>[Florida, USA]</span>
        <span>[Software solutions company, B2B]</span>
      </FlexWrapper>
    </FlexWrapper>
    <List
      title="RESPONSABILITIES"
      data={[
        {
          text: 'Develop and maintain WordPress and Next.js websites to boost functionality and engagement.',
        },
        {
          text: 'Foster clear team communication to meet project goals, employ agile methods for efficient development.',
        },
      ]}
      variant
    />
    <List
      title="KEY ACCOMPLISHMENT"
      data={[
        {
          text: 'Significantly enhanced website performance and user satisfaction across multiple projects.',
        },
      ]}
      variant
    />
  </FlexWrapper>
)

export default ExperienceItem
