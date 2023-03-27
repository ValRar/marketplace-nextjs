import Link from "next/link";
import styles from "../src/styles/Header.module.css"

const Header = () => {
    return (
        <ul className={styles.header}>
            <li className={styles.item}>Доставка</li>
            <li className={styles.item}>Оплата</li>
            <li className={styles.item}>О нас</li>
            <li className={styles.item}>Бренды</li>
            <li className={styles.item}>Гарантии и возврат</li>
            <li className={styles.item}>Контакты</li>
            <li className={styles.item}>Помощь</li>
            <li className={styles.item}><img src="Phone.svg" className={styles.icon}></img>+375555555555</li>
            <li className={styles.item}><img src="Mail.svg" className={styles.icon}></img>mail@gmail.com</li>
            <li className={styles.item}>
                <Link href="#">Войти</Link> / <Link href="#">Зарегистрироваться</Link>
            </li>
        </ul>
    )
}

export default Header;