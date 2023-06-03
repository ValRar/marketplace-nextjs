import Card from "../../components/card"
import sqlClient from "../../components/sqlClient"
import { getCart } from "./api/cart/getId"
import homeStyles from '../styles/Home.module.css'
import Filter from "../../components/filter"

// Параметры для каталога: 
// name - Название товара содержит символы; || string
// maxPrice - максимальная цена || float
// minPrice - минимальная цена || float
// availability - наличие || bool
// category - Категория || string НЕ СДЕЛАНО

export async function getServerSideProps(context) {
    const cart = await getCart(context.req.cookies["authToken"])
    const JsonProducts = await getProducts(resolveSqlRequest(context.query))
    // if (!products) {
    //     return {
    //         redirect: {
    //             permanent: true,
    //             destination: "/404"
    //         }
    //     }
    // }
    const products = JSON.parse(JsonProducts)
    return {
        props: {products, cart}
    }
}

function getProducts(request) {
    const promise = new Promise((resolve, reject) => {
        sqlClient.query(request, (err, res) => {
            if (err) {
                console.log(err)
                reject(err)
            }
            resolve(JSON.stringify(res))
        })
    })
    return promise
}

function resolveSqlRequest(filter) {
    let request = "SELECT id, title, amount, rating, price, img FROM products WHERE "
    if (filter.name) {
        request += `title LIKE '%${filter.name}%' AND `
    }
    if (filter.maxPrice) {
        request += `price <= ${filter.maxPrice} AND `
    }
    if (filter.minPrice) {
        request += `price >= ${filter.minPrice} AND `
    }
    if (filter.availability) {
        request += `amount > 0;`
    } else {
        return request.slice(0, -4)
    }
    return request
}

const Catalog = ({products, cart}) => {
    return (
        
        <div className={homeStyles.cardsWrapper}>
        <Filter></Filter>
        {products.map(({id, title, amount, rating, price, img}) => (
            <Card key={id} id={id} title={title} amount={amount} rating={rating} price={price} imagePath={JSON.parse(img)[0]} buyChecked={cart.includes(id)}></Card>
        ))}
        </div>
    )
}

export default Catalog