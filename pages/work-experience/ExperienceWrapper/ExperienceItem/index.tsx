import Link from 'next/link'

import styles from './ExperienceItem.module.css'

import FlexWrapper from '@/components/FlexWrapper'
import List from '@/components/List'
import { ExperienceType } from '@/types'

interface Props {
  experience: ExperienceType
}

const ExperienceItem = ({ experience }: Props) => {
  if (!experience) return null

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
    accomplishmentList = [],
    mainTechList = [],
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
      {accomplishmentList?.length > 0 && <List data={accomplishmentList} />}
      {mainTechList?.length > 0 && (
        <>
          <hr />
          <List data={mainTechList} rounded />
        </>
      )}
    </FlexWrapper>
  )
}

export default ExperienceItem
