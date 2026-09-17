import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo} aria-label="Home">
        <svg viewBox="0 0 48 48" width="48" height="48">
          <circle cx="24" cy="24" r="24" fill="white" />
        </svg>
      </Link>

      <nav className={styles.links}>
        <Link to="/sample-bill">Sample Bill</Link>
        <Link to="/sample-politician">Sample Politician</Link>
      </nav>
    </header>
  )
}

export default Header