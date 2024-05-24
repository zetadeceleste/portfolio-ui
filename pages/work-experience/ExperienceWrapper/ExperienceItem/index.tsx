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

const ExperienceItem = ({ experience }: Props) => {
  if (!experience) {
    return null
  }

  const {
    role,
    dateFrom,
    company,
    companyWebsite,
    companyType = '',
    jobLocation,
    jobType = '',
    dateTo = '',
    current = false,
    accomplishments = [],
    mainTechStack = [],
  } = experience

  return (
    <FlexWrapper className={styles.wrapper} gap="large">
      <FlexWrapper justifyContent="space-between">
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
          <FlexWrapper>
            <span className="variant">
              [{dateFrom} - {`${current ? 'PRESENT' : dateTo}`}]
            </span>
            {jobLocation && <span className="variant">[{jobLocation}]</span>}
            {companyType && <span className="variant">[{companyType}]</span>}
            <span className="variant">[{jobType}]</span>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
      {accomplishments.length > 0 && <List data={accomplishments} />}
      {mainTechStack.length > 0 && (
        <>
          <hr />
          <List data={mainTechStack} rounded />
        </>
      )}
    </FlexWrapper>
  )
}

export default ExperienceItem
