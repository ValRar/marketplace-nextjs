import styles from "../src/styles/Card.module.css"

function renderStars (rate) {
    let dom = []
    for (let i = 0; i < rate; i++) {
        dom.push(<img src="Star-filled.svg"></img>)
    }
    for (let i = 0; i < 5 - rate; i++) {
        dom.push(<img src="Star-notfilled.svg"></img>)
    }
    return dom
  }

const Card = ({title, imagePath, amount, rating, price}) => (
    <div className={styles.card}>
        <div className={styles.image}><img  src={imagePath}></img></div>
        <div className={styles.title}>{title}</div>
        <div className={styles.amount}>В наличии: {amount} штук</div>
        <div className={styles.ratingWrapper}>
            <div className={styles.rating}>
                {renderStars(rating)}
            </div>
            <div className={styles.price}>{price}р</div>
        </div>
        <div className={styles.buy}>Добавить в корзину</div>
    </div>
)

export default Card