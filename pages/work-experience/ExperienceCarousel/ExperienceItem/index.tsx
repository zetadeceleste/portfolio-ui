import Link from 'next/link'

import styles from './ExperienceItem.module.css'

import FlexWrapper from '@/components/common/FlexWrapper'
import List from '@/components/common/List'

const ExperienceItem = () => (
  <FlexWrapper gap="medium">
    <FlexWrapper
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
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
      <span className={styles.number}>01</span>
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
    <List
      title="PRINCIPAL TECH STACK"
      data={[
        {
          text: 'React.js',
        },
        {
          text: 'React.js',
        },
        {
          text: 'React.js',
        },
      ]}
      variant
    />
  </FlexWrapper>
)

export default ExperienceItem
