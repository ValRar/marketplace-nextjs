import Slider from "../../../components/slider"
import styles from "../../styles/Product.module.css"

export async function getStaticPaths() {
    const response = await fetch("http://localhost:3000/api/products/getId")
    if (response.status === 200) {
        const products = await response.json()
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
    const productsRequest = await fetch(`http://localhost:3000/api/products/getById?id=${params.id}`)
    const res = await productsRequest.json()
    return { props: {images: res[0].img, title: res[0].title, amount: res[0].amount, rating: res[0].rating, price: res[0].price, info: res[0].info} }
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

const productPage = ({images, title, price, info, amount, rating}) => {
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
                <button className={styles.buy}>Добавить в корзину</button>
                <div className={styles.accordion}>
                    <div className={styles.accordionItem}>
                        <input className={styles.accordionRadio} type="radio" name="accordion" id="description-radio" defaultChecked></input>
                        <label htmlFor="description-radio" className={styles.accordionLabel}>Описание</label>
                        <div className={styles.accordionContent}>{info}</div>
                    </div>
                    <div className={styles.accordionItem}>
                        <input className={styles.accordionRadio} type="radio" name="accordion" id="properties-radio" ></input>
                        <label htmlFor="properties-radio" className={styles.accordionLabel}>Характеристики</label>
                        <div className={styles.accordionContent}>Мега супер описание</div>
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

export default productPage