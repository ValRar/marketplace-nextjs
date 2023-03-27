import styles from "../src/styles/Footer.module.css"
import Link from "next/link"

const Footer = () => (
    <div className={styles.footer}>
        <div className={styles.wrapper}>
            <div>
                <div className={styles.logo}>Логотип</div>
                <div className={styles.payment}>
                    <div className={styles.visa}></div>
                    <img src="Mastercard.svg"></img>
                </div>
            </div>
            <div className={styles.listwrapper}>
                <ul className={styles.list}>
                    <li>Вопрос-ответ</li>
                    <li>Статьи</li>
                </ul>
                <ul className={styles.list}>
                    <li>Доставка</li>
                    <li>Оплата</li>
                    <li>О нас</li>
                    <li>Бренды</li>
                </ul>
                <ul className={styles.list}>
                    <li>Гарантии и возврат</li>
                    <li>Контакты</li>
                    <li>Помощь</li>
                </ul>
            </div>
            <div>
                <div className={styles.logowrapper}>
                    <Link href="#" className={styles.icon}><img src="User_white.svg"></img></Link>
                    <Link href="#" className={styles.icon}><img src="Star_white.svg"></img></Link>
                    <Link href="#" className={styles.icon}><img src="Heart_white.svg"></img></Link>
                    <Link href="#" className={styles.icon}><img src="Shopping cart_white.svg"></img></Link>
                </div>
                <div className={styles.contact}><img src="Phone_white.svg" className={styles.contacticon}></img>+375555555555</div>
                <div className={styles.contact}><img src="Mail_white.svg" className={styles.contacticon}></img>mail@gmail.com</div>
                <div className={styles.social}>
                    <Link href="#"><img src="Instagram_footer.svg"></img></Link>
                    <Link href="#"><img src="Facebook_footer.svg"></img></Link>
                    <Link href="#"><img src="Vk_footer.svg"></img></Link>
                </div>
            </div>
        </div>
        <div className={styles.up}><img src="Arrow.svg"></img><br></br><Link href="#up">Вверх</Link></div>
    </div>
)

export default Footer