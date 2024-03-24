import Link from 'next/link'

import styles from './ExperienceItem.module.css'

import FlexWrapper from '@/components/common/FlexWrapper'
import List from '@/components/common/List'
import { ExperienceType } from '@/types/experience'

interface Props {
  order: number
  total: number
  experience: ExperienceType
}

const ExperienceItem = ({ order, total, experience }: Props) => (
  <FlexWrapper gap="medium" className={styles.item}>
    <FlexWrapper justifyContent="space-between">
      <FlexWrapper className={styles.number}>
        <span className="number">
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
        <FlexWrapper flexDirection="column-to-row">
          <span>
            [{experience.dateFrom} -{' '}
            {`${experience.current ? 'PRESENT' : experience.dateTo}`}]
          </span>
          <span>[{experience.companyLocation}]</span>
          <span>[{experience.companyType}]</span>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
    <List title="RESPONSABILITIES" data={experience.responsibilities} variant />
    <List
      title="KEY ACCOMPLISHMENTS"
      data={experience.accomplishments}
      variant
    />
    <List
      title="MAIN TECH STACK"
      data={experience.mainTechStack}
      variant
      divided
    />
  </FlexWrapper>
)

export default ExperienceItem
