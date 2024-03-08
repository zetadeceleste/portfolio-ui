import Link from 'next/link'

import styles from './ExperienceItem.module.css'

import FlexWrapper from '@/components/common/FlexWrapper'
import List from '@/components/common/List'

const ExperienceItem = () => (
  <FlexWrapper gap="medium">
    <FlexWrapper justifyContent="space-between">
      <FlexWrapper className={styles.number}>
        <span className="number">1/5</span>
      </FlexWrapper>
      <FlexWrapper>
        <h2>
          Frontend Developer at{' '}
          <Link
            className="variant"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Ocean Ring Technologies
          </Link>
        </h2>
        <FlexWrapper flexDirection="column-to-row">
          <span>APR 2020 - PRESENT</span>
          <span>[Florida, USA]</span>
          <span>[Software solutions company, B2B]</span>
        </FlexWrapper>
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
    <List
      title="MAIN TECH STACK"
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
        {
          text: 'React.js',
        },
        {
          text: 'React.js',
        },
        {
          text: 'React.js',
        },
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
      divided
    />
  </FlexWrapper>
)

export default ExperienceItem
