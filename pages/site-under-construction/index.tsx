import styles from './site-under-construction.module.css'

import Headline from '@/components/common/Headline'

const SiteUnderConstructionPage: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.description}>
      <Headline title="Site under construction" />
      <h2>
        Follow me on <a href="https://github.com/zetadeceleste">Github</a> ;-)
      </h2>
    </div>
  </div>
)

export default SiteUnderConstructionPage
