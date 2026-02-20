import ExperienceItem from './ExperienceItem'
import styles from './ExperienceWrapper.module.css'

import { EXPERIENCE_LIST } from '@/constants/experienceList'

const ExperienceWrapper = () => {
  return (
    <ol className={styles.list}>
      {EXPERIENCE_LIST.map((experience, index) => (
        <li className={styles.item} key={index}>
          <ExperienceItem
            order={index + 1}
            total={EXPERIENCE_LIST.length}
            experience={experience}
          />
        </li>
      ))}
    </ol>
  )
}

export default ExperienceWrapper
