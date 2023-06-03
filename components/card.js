import Link from "next/link"
import styles from "../src/styles/Card.module.css"
import { useState } from "react"
import Cookies from "js-cookie"

function renderStars (rate) {
    let dom = []
    for (let i = 0; i < rate; i++) {
        dom.push(<img src="Star-filled.svg" key={i}></img>)
    }
    for (let i = 0; i < 5 - rate; i++) {
        dom.push(<img src="Star-notfilled.svg" key={rate + i}></img>)
    }
    return dom
}


const Card = ({title, imagePath, amount, rating, price, id, buyChecked}) => {

    const [inCart, setInCart] = useState(buyChecked)

    return(
        <div className={styles.card}>
            <Link href={`/product/${id}`}>
                <div className={styles.image}><img src={imagePath}></img></div>
                <div className={styles.title}><span>{title}</span></div>
                <div className={styles.amount}>В наличии: {amount} штук</div>
                <div className={styles.ratingWrapper}>
                    <div className={styles.rating}>
                        {renderStars(rating)}
                    </div>
                    <div className={styles.price}>{price}р</div>
                </div>
            </Link>
            <div className={styles.buy} onClick={() => {
                if (inCart) return
                const session_id = Cookies.get("authToken")
                if (!session_id) {
                    alert("Войдите в аккаунт пж")
                    return
                }
                fetch("/api/cart/add", {method: "POST", body: JSON.stringify({product: id, session: session_id})})
                setInCart(true)
            }}>{inCart ? "В корзине" : "Добавить в корзину"}</div>
        </div>
    )
}

export default Card