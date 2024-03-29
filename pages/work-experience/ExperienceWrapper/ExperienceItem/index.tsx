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
  return (
    <>
      {experience === undefined ? (
        <Loader />
      ) : (
        <FlexWrapper gap="medium" className={styles.item}>
          <FlexWrapper justifyContent="space-between">
            <FlexWrapper justifyContent="end" className={styles.number}>
              <span className="variant number">
                {order}/{total}
              </span>
            </FlexWrapper>
            <FlexWrapper>
              <h2>
                {experience.role} at{' '}
                <Link
                  className="variant"
                  href={experience.companyWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experience.company}
                </Link>
              </h2>
              <FlexWrapper className={styles.wrapper}>
                <span className="variant">
                  [{experience.dateFrom} -{' '}
                  {`${experience.current ? 'PRESENT' : experience.dateTo}`}]
                </span>
                <span className="variant">[{experience.companyLocation}]</span>
                <span className="variant">[{experience.companyType}]</span>
              </FlexWrapper>
            </FlexWrapper>
          </FlexWrapper>
          <List title="RESPONSABILITIES" data={experience.responsibilities} />
          <List title="KEY ACCOMPLISHMENTS" data={experience.accomplishments} />
          <List
            title="MAIN TECH STACK"
            data={experience.mainTechStack}
            rounded
            divided
          />
        </FlexWrapper>
      )}
    </>
  )
}

export default ExperienceItem
