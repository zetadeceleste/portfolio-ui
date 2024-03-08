import Link from 'next/link'

import styles from './ExperienceItem.module.css'

import FlexWrapper from '@/components/common/FlexWrapper'
import List from '@/components/common/List'
import { useWindowSize } from '@/utils/window'

const ExperienceItem = () => {
  const { width } = useWindowSize()

  return (
    <FlexWrapper gap="medium">
      <FlexWrapper
        flexDirection={width <= 768 ? 'column' : 'row-reverse'}
        alignItems="center"
        justifyContent="space-between"
      >
        <FlexWrapper alignItems="end" alignSelf="start">
          <span className={styles.number}>01</span>
        </FlexWrapper>
        <FlexWrapper>
          <h2>
            Frontend Developer at <br />
            <Link
              className="variant"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Ocean Ring Technologies
            </Link>
          </h2>
          <FlexWrapper>
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
}

export default ExperienceItem
