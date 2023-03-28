import styles from "../src/styles/Card.module.css"

const Card = () => (
    <div className={styles.card}>
        <div className={styles.image}><img  src="https://cdn1.ozone.ru/s3/multimedia-f/wc250/6484976175.jpg"></img></div>
        <div className={styles.title}>Название товара</div>
        <div className={styles.amount}>В наличии: 15 штук</div>
        <div className={styles.ratingWrapper}>
            <div className={styles.rating}>
                <img src="Star-filled.svg"></img>
                <img src="Star-filled.svg"></img>
                <img src="Star-filled.svg"></img>
                <img src="Star-filled.svg"></img>
                <img src="Star-filled.svg"></img>
            </div>
            <div className={styles.price}>2500р</div>
        </div>
        <div className={styles.buy}>Добавить в корзину</div>
    </div>
)

export default Card