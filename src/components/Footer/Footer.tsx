import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <button type="button" className={styles.logo} aria-label="Home" />

        <div className={styles.columns}>
          <ul className={styles.column}>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <ul className={styles.column}>
            <li>
              <a href="#">Account</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer