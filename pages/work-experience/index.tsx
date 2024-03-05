import Head from 'next/head'
import Link from 'next/link'

import styles from './work-experience.module.css'

import Container from '@/components/common/Container'
import FlexWrapper from '@/components/common/FlexWrapper'
import Headline from '@/components/common/Headline'

const WorkExperiencePage = () => (
  <>
    <Head>
      <title>Celeste Zapata | Work experience</title>
      <meta
        name="description"
        content="Celeste Zapata is a professional developer based in Mendoza, Argentina."
      />
    </Head>
    <Container className={styles['experience-container']} variant>
      <FlexWrapper justifySelf="start">
        <Headline
          title={
            <>
              Work <br /> Experience
            </>
          }
          underline
          variant
        />
      </FlexWrapper>
      <FlexWrapper justifySelf="start">
        <FlexWrapper flexDirection="column">
          <h3>
            Frontend Developer at{' '}
            <Link className="variant" href="">
              Ocean Ring Technologies
            </Link>
          </h3>
          <FlexWrapper>
            <span>APR 2020 - PRESENT</span>
            <span>[Florida, USA]</span>
            <span>[Software solutions company, B2B]</span>
          </FlexWrapper>
          <h4>RESPONSABILITIES</h4>
          <ul>
            <li>
              Develop and maintain WordPress and Next.js websites to boost
              functionality and engagement.
            </li>
            <li>
              Foster clear team communication to meet project goals, employ
              agile methods for efficient development.
            </li>
          </ul>
          <h4>KEY ACCOMPLISHMENTS</h4>
          <ul>
            <li>
              Significantly enhanced website performance and user satisfaction
              across multiple projects.
            </li>
          </ul>
        </FlexWrapper>
        <FlexWrapper flexDirection="column">
          <h3>
            Frontend Developer at{' '}
            <Link className="variant" href="">
              Ocean Ring Technologies
            </Link>
          </h3>
          <FlexWrapper>
            <span>APR 2020 - PRESENT</span>
            <span>[Florida, USA]</span>
            <span>[Software solutions company, B2B]</span>
          </FlexWrapper>
          <h4>RESPONSABILITIES</h4>
          <ul>
            <li>
              Develop and maintain WordPress and Next.js websites to boost
              functionality and engagement.
            </li>
            <li>
              Foster clear team communication to meet project goals, employ
              agile methods for efficient development.
            </li>
          </ul>
          <h4>KEY ACCOMPLISHMENTS</h4>
          <ul>
            <li>
              Significantly enhanced website performance and user satisfaction
              across multiple projects.
            </li>
          </ul>
        </FlexWrapper>
      </FlexWrapper>
    </Container>
  </>
)

export default WorkExperiencePage
