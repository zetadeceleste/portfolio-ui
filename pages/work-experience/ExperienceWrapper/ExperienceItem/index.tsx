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

const ExperienceItem = ({ order, total, experience }: Props) => {
  const {
    role = '',
    company = '',
    companyWebsite = '',
    companyLocation = '',
    companyType = '',
    dateFrom = '',
    dateTo = '',
    responsibilities = [],
    accomplishments = [],
    mainTechStack = [],
    current = false,
  } = experience
  return (
    <FlexWrapper gap="medium" className={styles.item}>
      <FlexWrapper justifyContent="space-between">
        <FlexWrapper className={styles.number}>
          <span className="number">
            {order}/{total}
          </span>
        </FlexWrapper>
        <FlexWrapper>
          <h2>
            {role} at{' '}
            <Link
              className="variant"
              href={companyWebsite}
              target="_blank"
              rel="noopener noreferrer"
            >
              {company}
            </Link>
          </h2>
          <FlexWrapper flexDirection="column-to-row">
            <span>
              [{dateFrom} - {`${current ? 'PRESENT' : dateTo}`}]
            </span>
            <span>[{companyLocation}]</span>
            <span>[{companyType}]</span>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
      <List title="RESPONSABILITIES" data={responsibilities} variant />
      <List title="KEY ACCOMPLISHMENTS" data={accomplishments} variant />
      <List title="MAIN TECH STACK" data={mainTechStack} variant divided />
    </FlexWrapper>
  )
}

export default ExperienceItem