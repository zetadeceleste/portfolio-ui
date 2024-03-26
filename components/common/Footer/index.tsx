import FlexWrapper from '../FlexWrapper'

import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.wrapper}>
      <FlexWrapper>
        <p>Website handcrafted by me with 🤘😎</p>
        <p>Marvelous illustration and icons made by @cierna</p>
        <small>
          <em>Copyright © {currentYear} chikilabs. All rights reserved.</em>
        </small>
      </FlexWrapper>
    </footer>
  )
}

export default Footer
