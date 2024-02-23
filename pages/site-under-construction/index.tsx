import styles from './site-under-construction.module.css'

import Container from '@/components/common/Container'
import Headline from '@/components/common/Headline'

const SiteUnderConstructionPage: React.FC = () => (
  <Container>
    <div className={styles.description}>
      <Headline title="Site under construction" />
      <p>
        Follow me on <a href="https://github.com/zetadeceleste">Github</a> ;-)
      </p>
    </div>
  </Container>
)

export default SiteUnderConstructionPage
