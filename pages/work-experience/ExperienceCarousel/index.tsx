import styles from './ExperienceCarousel.module.css'
import ExperienceItem from './ExperienceItem'

const ExperienceCarousel = () => (
  <div className={styles.carousel}>
    <span>01</span>
    <ExperienceItem />
  </div>
)

export default ExperienceCarousel
