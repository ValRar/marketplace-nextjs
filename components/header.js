import Link from "next/link";
import styles from "../src/styles/Header.module.css"

const Header = () => {
    return (
        <div>
            <ul className={styles.upperheader}>
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
            <ul className={styles.lowerheader}>
                <li className={styles.item}>Логотип</li>
                <li className={styles.item + ` ` + styles.catalog}>
                    <button><img src="Catalog.svg" className={styles.icon}></img>Каталог</button>
                </li>
                <li className={styles.item}>Статьи</li>
                <li className={styles.item}>
                    <input type="text" placeholder="Поиск" className={styles.searchinput}></input>
                    <button className={styles.searchbutton}><img src="Search.svg"></img></button>
                </li>
                <li className={styles.item}>
                    <div className={styles.iconswrapper}>
                        <Link href="#">
                            <img className={styles.lowerheadericon} src="User.svg"></img>
                        </Link>
                        <Link href="#">
                            <img className={styles.lowerheadericon} src="Star.svg"></img>
                        </Link>
                        <Link href="#">
                            <img className={styles.lowerheadericon} src="Heart.svg"></img>
                        </Link>
                        <Link href="#">
                            <img className={styles.lowerheadericon} src="Shopping cart.svg"></img>
                        </Link>
                    </div>
                </li>
                
            </ul>
        </div>
    )
}

export default Header;