import Link from 'next/link'

import styles from './ExperienceItem.module.css'

import FlexWrapper from '@/components/common/FlexWrapper'
import List from '@/components/common/List'
import Loader from '@/components/common/Loader'
import { ExperienceType } from '@/types/experience'

interface Props {
  order: number
  total: number
  experience: ExperienceType
}

const ExperienceItem = ({ order, total, experience }: Props) => {
  const {
    role,
    dateFrom,
    mainTechStack,
    jobType,
    company = '',
    companyWebsite = '',
    location = '',
    companyType = '',
    responsibilities = [],
    accomplishments = [],
    dateTo = '',
    current = false,
  } = experience

  return (
    <>
      {experience === undefined ? (
        <Loader />
      ) : (
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
              <FlexWrapper className={styles.wrapper}>
                <span className="variant">
                  [{dateFrom} - {`${current ? 'PRESENT' : dateTo}`}]
                </span>
                {location && <span className="variant">[{location}]</span>}
                {companyType && (
                  <span className="variant">[{companyType}]</span>
                )}
                <span className="variant">[{jobType}]</span>
              </FlexWrapper>
            </FlexWrapper>
          </FlexWrapper>
          {!!responsibilities.length && (
            <List title="RESPONSABILITIES" data={responsibilities} />
          )}
          {!!accomplishments.length && (
            <List title="KEY ACCOMPLISHMENTS" data={accomplishments} />
          )}
          <List title="MAIN TECH STACK" data={mainTechStack} rounded divided />
        </FlexWrapper>
      )}
    </>
  )
}

export default ExperienceItem
