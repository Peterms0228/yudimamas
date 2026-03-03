import styles from '../styles/Story.module.css'

export default function Story() {
  return (
    <section id="story" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.visual}>
          <div className={styles.imgBox}>
            <div className={styles.imgPlaceholder}>
              <img src={`${import.meta.env.BASE_URL}assets/image-1.jpg`} alt="Coconut Candy" />
            </div>
          </div>
          <div className={styles.floatCard}>
            <p className={styles.floatStat}>15+</p>
            <p className={styles.floatLabel}>Years of Craft</p>
          </div>
        </div>
        <div className={styles.text}>
          <span className={styles.label}>Our Story</span>
          <h2 className={styles.title}>
            A grandmother's recipe,<br /><em>kept alive</em>
          </h2>
          <p>
            Yudimama began in a small kitchen in West Java, where Yudi's grandmother would spend every Saturday morning cooking coconut candy for the neighbourhood. The smell of caramelizing palm sugar and toasted coconut would drift through open windows for blocks.
          </p>
          <p>
            When she passed, Yudi made a quiet promise: to keep the recipe alive, unchanged, and made by hand. What started as gifts for family has grown — slowly, intentionally — into a small business that still operates from that same kitchen.
          </p>
          <p>
            Every batch is still stirred by hand. Every coconut is still freshly grated. No preservatives. No shortcuts.
          </p>
          <div className={styles.values}>
            {['100% Natural', 'Hand-Stirred', 'No Preservatives', 'Small Batch'].map(v => (
              <span key={v} className={styles.tag}>{v}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
