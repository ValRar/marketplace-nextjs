import Link from "next/link";
import styles from "../src/styles/Header.module.css"

const Header = () => {
    return (
        <div className={styles.header}>
            <ul className={styles.upperheader}>
                <li className={styles.item}>Доставка</li>
                <li className={styles.item}>Оплата</li>
                <li className={styles.item}>О нас</li>
                <li className={styles.item}>Бренды</li>
                <li className={styles.item}>Гарантии и возврат</li>
                <li className={styles.item}>Контакты</li>
                <li className={styles.item}>Помощь</li>
                <li className={styles.item}><img src="/Phone.svg" className={styles.icon}></img>+375555555555</li>
                <li className={styles.item}><img src="/Mail.svg" className={styles.icon}></img>mail@gmail.com</li>
                <li className={styles.item}>
                    <Link href="#">Войти</Link> / <Link href="#">Зарегистрироваться</Link>
                </li>
            </ul>
            <ul className={styles.lowerheader}>
                <li className={styles.item}><Link href="/">Логотип</Link></li>
                <li className={styles.item + " " + styles.catalog}>
                    <input type="checkbox" id="expand-catalog" className="expand-checker" style={{display: 'none'}}></input>
                    <label htmlFor="expand-catalog"><img src="/Catalog.svg" className={styles.icon}></img>Каталог</label>
                    <ul className={styles.catalogexpanded + " expand-item"}>
                        <li className={styles.catalogItem}>
                            <img src="/Eyeglasses.svg" className={styles.catalogicon}></img><span>Очки</span><img src="/Right-arrow.svg" className={styles.catalogArrow}></img>
                            <ul className={styles.catalogexpandedItem}>
                                <Link href="#"><li>Очки корригирующие</li></Link>
                                <Link href="#"><li>Очки для работы за компьютером</li></Link>
                                <Link href="#"><li>Очки солнцезащитные</li></Link>
                                <Link href="#"><li>Очки для водителей</li></Link>
                            </ul>
                        </li>
                        <li className={styles.catalogItem}>
                            <img src="/Cutlery.svg" className={styles.catalogicon}></img><span>Одноразовая посуда</span><img src="/Right-arrow.svg" className={styles.catalogArrow}></img>
                            <ul className={styles.catalogexpandedItem}>
                                <Link href="#"><li>Стаканы</li></Link>
                                <Link href="#"><li>Тарелки</li></Link>
                                <Link href="#"><li>Бумажные салфетки</li></Link>
                            </ul>
                        </li>
                        <li className={styles.catalogItem}>
                            <img src="/Box.svg" className={styles.catalogicon}></img><span>Детское творчество</span><img src="/Right-arrow.svg" className={styles.catalogArrow}></img>
                            <ul className={styles.catalogexpandedItem}>
                                <Link href="#"><li>Раскраски</li></Link>
                            </ul>
                        </li>
                        <li className={styles.catalogItem}>
                            <img src="/Fireworks.svg" className={styles.catalogicon}></img><span>Товары для праздника</span><img src="/Right-arrow.svg" className={styles.catalogArrow}></img>
                            <ul className={styles.catalogexpandedItem}>
                            <Link href="#"><li>Колпачки</li></Link>
                            <Link href="#"><li>Маски</li></Link>
                            <Link href="#"><li>Гирлянды</li></Link>
                            <Link href="#"><li>Воздушные шары</li></Link>
                            <Link href="#"><li>Свечи на торт</li></Link>
                            <Link href="#"><li>Открытки поздравительные</li></Link>
                            <Link href="#"><li>Конверт для денег</li></Link>
                            <Link href="#"><li>Салфетки бумажные</li></Link>
                            <Link href="#"><li>Елочные игрушки</li></Link>
                            </ul>
                        </li>
                        <li className={styles.catalogItem}>
                            <img src="/Sofa.svg" className={styles.catalogicon}></img><span>Домашний текстиль</span><img src="/Right-arrow.svg" className={styles.catalogArrow}></img></li>
                        <li className={styles.catalogItem}>
                            <img src="/Palette.svg" className={styles.catalogicon}></img><span>Канцтовары</span><img src="/Right-arrow.svg" className={styles.catalogArrow}></img></li>
                        <li className={styles.catalogItem}>
                            <img src="/Mobile-phone.svg" className={styles.catalogicon}></img><span>Мультимедиа</span><img src="/Right-arrow.svg" className={styles.catalogArrow}></img></li>
                        <li className={styles.catalogItem}>
                            <img src="/Mat.svg" className={styles.catalogicon}></img><span>Плейсматы</span><img src="/Right-arrow.svg" className={styles.catalogArrow}></img></li>
                        <li className={styles.catalogItem}>
                            <img src="/Plate.svg" className={styles.catalogicon}></img><span>Посуда</span><img src="/Right-arrow.svg" className={styles.catalogArrow}></img></li>
                    </ul>
                </li>
                <li className={styles.item}>Статьи</li>
                <li className={styles.item}>
                    <input type="text" placeholder="Поиск" className={styles.searchinput}></input>
                    <button className={styles.searchbutton}><img src="/Search.svg"></img></button>
                </li>
                <li className={styles.item}>
                    <div className={styles.iconswrapper}>
                        <Link href="#">
                            <img className={styles.lowerheadericon} src="/User_black.svg"></img>
                        </Link>
                        <Link href="#">
                            <img className={styles.lowerheadericon} src="/Star_black.svg"></img>
                        </Link>
                        <Link href="#">
                            <img className={styles.lowerheadericon} src="/Heart_black.svg"></img>
                        </Link>
                        <Link href="#">
                            <img className={styles.lowerheadericon} src="/Shopping cart_black.svg"></img>
                        </Link>
                    </div>
                </li>
                
            </ul>
        </div>
    )
}

export default Header;