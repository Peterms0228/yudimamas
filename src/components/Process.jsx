import styles from '../styles/Process.module.css'

const steps = [
  { num: '01', title: 'Source', desc: 'Mature coconuts are sourced weekly from trusted farmers in Garut and Tasikmalaya.' },
  { num: '02', title: 'Grate', desc: 'Each coconut is freshly hand-grated the morning of cooking — never pre-packaged.' },
  { num: '03', title: 'Cook', desc: 'Coconut and palm sugar simmer over low flame for 2–3 hours, stirred continuously.' },
  { num: '04', title: 'Shape', desc: 'While warm, each candy is hand-formed and wrapped in traditional pandan leaf.' },
]

export default function Process() {
  return (
    <section id="process" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.label}>How It's Made</span>
        <h2 className={styles.title}>The <em>Process</em></h2>
      </div>
      <div className={styles.steps}>
        {steps.map((s, i) => (
          <div key={s.num} className={styles.step}>
            <div className={styles.stepNum}>{s.num}</div>
            <div className={styles.connector} style={{ display: i < steps.length - 1 ? 'block' : 'none' }} />
            <h3 className={styles.stepTitle}>{s.title}</h3>
            <p className={styles.stepDesc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
