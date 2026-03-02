import styles from '../styles/Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.circle1} />
        <div className={styles.circle2} />
        <div className={styles.grain} />
      </div>
      <div className={styles.content}>
        <p className={styles.tagline}>Handcrafted with love · Est. 2010</p>
        <h1 className={styles.title}>
          Yudimama's<br />
          <em>Artisan</em><br />
          Coconut Candy
        </h1>
        <p className={styles.subtitle}>
          Small-batch coconut confections made from sun-ripened coconuts,<br />
          slow-cooked over open flame the traditional way.
        </p>
        <div className={styles.actions}>
          <a href="#products" className={styles.btnPrimary}>Explore Candies</a>
          <a href="#story" className={styles.btnSecondary}>Our Story</a>
        </div>
      </div>
      <div className={styles.scrollHint}>
        <span />
        <p>Scroll</p>
      </div>
    </section>
  )
}
