import { useEffect, useState } from "react"
import Slider from "../../../components/slider"
import styles from "../../styles/Product.module.css"
import { getById } from "../api/products/getById"
import { getId } from "../api/products/getId"
import Cookies from "js-cookie"
import Properties from "../../../components/properties"
import propertiesParser from "../../../components/propertiesParser"

export async function getStaticPaths() {
    const response = await getId()
    if (response) {
        const products = JSON.parse(response)
        const paths = []
        products.map((id) => {
            paths.push({params: { id: `${id.id}` }})
        })
        return { 
            paths: paths,
            fallback: false
        }
    }
}

export async function getStaticProps({params}) {
    const productsRequest = await getById(params.id)
    const res = JSON.parse(productsRequest)
    return { props: {images: res[0].img, title: res[0].title, amount: res[0].amount, rating: res[0].rating, price: res[0].price, info: res[0].info, id: params.id, properties: res[0].properties} }
}

function renderStars (rate) {
    let dom = []
    for (let i = 0; i < rate; i++) {
        dom.push(<img className={styles.star} src="/Star-filled.svg" key={i}></img>)
    }
    for (let i = 0; i < 5 - rate; i++) {
        dom.push(<img className={styles.star} src="/Star-notfilled.svg" key={rate + i}></img>)
    }
    return dom
}

const ProductPage = ({images, title, price, info, amount, rating, id, properties}) => {

    const [inCart, setInCart] = useState(false)

    useEffect(() => {
        const checkCart = async () => {
            const request = await fetch("/api/cart/getId", {method: "POST", body: JSON.stringify({session: Cookies.get("authToken")})})
        const res = await request.json()
        if (!res) return
        if (res.includes(id)) setInCart(true)
    }

    checkCart().catch(console.error())
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.basicInfoContainer}>
            <Slider images={JSON.parse(images)}></Slider>
            <div className={styles.info}>
                <div className={styles.titleWrapper}>
                    <h1 className={styles.title}>{title}</h1>
                    <div className={styles.iconsWrapper}>
                        <img className={styles.icon} src="/Star_black.svg"></img>
                        <img className={styles.icon} src="/Heart_black.svg"></img>
                        <img className={styles.icon} src="/Share.svg"></img>
                    </div>
                </div>
                <div className={styles.rating}>{renderStars(rating)}</div>
                <div className={styles.amount}>В наличии: {amount} штук</div>
                <div className={styles.price}>{price}р</div>
                <button className={inCart ? styles.inCart : styles.buy} onClick={() => {
                    if (inCart) return
                    const session_id = Cookies.get("authToken")
                    if (!session_id) {
                        alert("Войдите в аккаунт пж")
                        return
                    }
                    fetch("/api/cart/add", {method: "POST", body: JSON.stringify({product: id, session: session_id})})
                    setInCart(true)
                }}>{inCart ? "В корзине" : "Добавить в корзину"}</button>
                <div className={styles.accordion}>
                    <div className={styles.accordionItem}>
                        <input className={styles.accordionRadio} type="radio" name="accordion" id="description-radio" defaultChecked></input>
                        <label htmlFor="description-radio" className={styles.accordionLabel}>Описание</label>
                        <div className={styles.accordionContent}>{info}</div>
                    </div>
                    <div className={styles.accordionItem}>
                        <input className={styles.accordionRadio} type="radio" name="accordion" id="properties-radio" ></input>
                        <label htmlFor="properties-radio" className={styles.accordionLabel}>Характеристики</label>
                        <div className={styles.accordionContent}><Properties data={propertiesParser.parse(properties)}></Properties></div>
                    </div>
                    <div className={styles.accordionItem}>
                        <input className={styles.accordionRadio} type="radio" name="accordion" id="delivery-radio" ></input>
                        <label htmlFor="delivery-radio" className={styles.accordionLabel}>Доставка</label>
                        <div className={styles.accordionContent}>Мега супер описание</div>
                    </div>
                    <div className={styles.accordionItem}>
                        <input className={styles.accordionRadio} type="radio" name="accordion" id="payment-radio" ></input>
                        <label htmlFor="payment-radio" className={styles.accordionLabel}>Оплата и возврат</label>
                        <div className={styles.accordionContent}>Мега супер описание</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProductPage