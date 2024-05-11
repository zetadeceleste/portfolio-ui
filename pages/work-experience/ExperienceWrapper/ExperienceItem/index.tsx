import Link from 'next/link'

import styles from './ExperienceItem.module.css'

import FlexWrapper from '@/components/common/FlexWrapper'
import List from '@/components/common/List'
import { ExperienceType } from '@/types'

interface Props {
  order: number
  total: number
  experience: ExperienceType
}

const ExperienceItem = ({ order, total, experience }: Props) => {
  if (!experience) {
    return null
  }

  const {
    role,
    dateFrom,
    mainTechStack,
    jobLocation,
    companyWebsite,
    company,
    dateTo = '',
    current = false,
    companyType = '',
    jobType = '',
    responsibilities = [],
    accomplishments = [],
  } = experience

  return (
    <>
      <FlexWrapper gap="large" className={styles.item}>
        <FlexWrapper justifyContent="space-between">
          <FlexWrapper justifyContent="end" className={styles.number}>
            <span className="variant number">
              {order}/{total}
            </span>
          </FlexWrapper>
          <FlexWrapper>
            <h2>
              {role}
              {companyWebsite && company && (
                <>
                  {' '}
                  at{' '}
                  <Link
                    className="variant"
                    href={companyWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {company}
                  </Link>
                </>
              )}
            </h2>
            <FlexWrapper flexDirection="column-to-row">
              <span className="variant">
                [{dateFrom} - {`${current ? 'PRESENT' : dateTo}`}]
              </span>
              {jobLocation && <span className="variant">[{jobLocation}]</span>}
              {companyType && <span className="variant">[{companyType}]</span>}
              <span className="variant">[{jobType}]</span>
            </FlexWrapper>
          </FlexWrapper>
        </FlexWrapper>
        {responsibilities.length > 0 && (
          <List title="RESPONSABILITIES" data={responsibilities} />
        )}
        {accomplishments.length > 0 && (
          <List title="KEY ACCOMPLISHMENTS" data={accomplishments} />
        )}
        <List title="MAIN TECH STACK" data={mainTechStack} rounded divided />
      </FlexWrapper>
    </>
  )
}

export default ExperienceItem
