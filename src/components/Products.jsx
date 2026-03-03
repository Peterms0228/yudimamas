import styles from '../styles/Products.module.css'
import { properties } from './properties'

const products = [
  {
    img: `${import.meta.env.BASE_URL}/assets/product-A.jpg`,
    name: '够够富足',
    desc: 'OMore than Enough. Abundance, always',
    note: '精工特制礼盒',
    price: 'Rm 99.00 / pack',
  },
  {
    img: `${import.meta.env.BASE_URL}/assets/product-B.jpg`,
    name: '够够福罐',
    desc: 'A Jar of Sweethess & Happiness. Multicolour Candies',
    note: '金彩年糖',
    price: 'Rm 55.00 / pack',
  },
  {
    img: `${import.meta.env.BASE_URL}/assets/product-C.jpg`,
    name: '够够椰香',
    desc: 'FCoconut Bliss. More Than Enough',
    note: '金彩年糖',
    price: 'Rm 29.00 / pack',
  },
  {
    img: `${import.meta.env.BASE_URL}/assets/product-D.jpg`,
    name: '七彩年糖',
    desc: 'Coconut Candy (Multicolour wrapped)',
    note: '创店首发丝印收藏装',
    price: 'Rm 22.00 / pack',
  },
]

export default function Products() {
  return (
    <section id="products" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.label}>Our Collection</span>
        <h2 className={styles.title}>Handcrafted <em>Flavors</em></h2>
        <p className={styles.desc}>Each candy is made in small batches of 50, never more, to ensure every piece receives our full attention.</p>
      </div>
      <div className={styles.grid}>
        {products.map((p) => (
          <div key={p.name} className={styles.card}>
            <img src={p.img} alt={p.name} className={styles.cardImg} />
            <span className={styles.badge}>{p.note}</span>
            <h3 className={styles.cardName}>{p.name}</h3>
            <p className={styles.cardDesc}>{p.desc}</p>
            <div className={styles.cardFooter}>
              <span className={styles.price}>{p.price}</span>
              <a href={`https://wa.me/${properties.phoneNumber}?text=${handleWhatsAppOrder(generateOrderMessage(p.name))}`} 
                target="_blank" rel="noopener noreferrer">
                <button className={styles.orderBtn}>Order</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function handleWhatsAppOrder(message) {
  return message.replaceAll(' ', '%20')
}

function generateOrderMessage(productName) {
  return `Hello Yudimama's Artisan Coconut Candy! I would like to place an order for ${productName}. Could you please provide me with the available flavors and pricing? Thank you!`
}
