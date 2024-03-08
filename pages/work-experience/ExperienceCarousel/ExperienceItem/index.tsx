import Link from 'next/link'

import FlexWrapper from '@/components/common/FlexWrapper'
import List from '@/components/common/List'
import { useWindowSize } from '@/utils/window'

const ExperienceItem = () => {
  const { width } = useWindowSize()

  return (
    <FlexWrapper gap="medium">
      <FlexWrapper
        flexDirection={width >= 768 ? 'row-reverse' : 'column'}
        alignItems={width >= 768 ? 'center' : 'start'}
        justifyContent="space-between"
      >
        <FlexWrapper alignSelf={width >= 768 ? 'start' : 'end'}>
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
          <FlexWrapper flexDirection={width >= 768 ? 'row' : 'column'}>
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
}

export default ExperienceItem
