import styles from '../styles/Navbar.module.css'
import { properties } from './properties'


export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={`${import.meta.env.BASE_URL}/assets/logo.jpg`} alt="Yudimama's Logo" className={styles.logoImg} />
        <span className={styles.logoText}>Yudimama's</span>
      </div>
      <ul className={styles.links}>
        <li><a href="#story">Our Story</a></li>
        <li><a href="#products">Candies</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#contact">Order</a></li>
      </ul>
      <a href={properties.shopeeLink} target="_blank" rel="noopener noreferrer">
        <button className={styles.cta}>Shop Now</button>
      </a>
    </nav>
  )
}
