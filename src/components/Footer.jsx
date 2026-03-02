import styles from '../styles/Footer.module.css'
import { properties } from './properties'

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <p className={styles.logoText}>Yudimama's</p>
          <p className={styles.tagline}>Artisan Coconut Candy</p>
          <p className={styles.note}>Made with love in Bentong, Pahang</p>
        </div>
        <div className={styles.contact}>
          <p className={styles.colTitle}>Get in Touch</p>
          <p>📱 +60 16-224 1934</p>
          <p>📧 yudimamas@gmail.com</p>
          <p>📍 Bentong, Pahang</p>
        </div>
        <div className={styles.order}>
          <p className={styles.colTitle}>Order Now</p>
          <p>Available via WhatsApp,<br />Facebook, and Shopee.</p>
          <a href={`https://wa.me/${properties.phoneNumber}?text=${handleWhatsAppOrder(whatsappMessage)}`} 
            target="_blank" rel="noopener noreferrer">
            <button className={styles.waBtn}>💬 WhatsApp Order</button>
          </a>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© 2024 Yudimama's Artisan Coconut Candy · All rights reserved</p>
        <p>Handmade with ❤️ — never mass produced</p>
      </div>
    </footer>
  )
}
const whatsappMessage = "Hello Yudimama's Artisan Coconut Candy! I would like to place an order for your delicious coconut candy. Could you please provide me with the available flavors and pricing? Thank you!"

function handleWhatsAppOrder(message) {
  return message.replaceAll(' ', '%20')
}