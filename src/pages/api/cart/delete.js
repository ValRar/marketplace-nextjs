import sqlClient from "../../../../components/sqlClient";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.status(405).send("Only post allowed!")
        return
    }
    const {product, session} = JSON.parse(req.body)
    // const {product, session} = req.body

    if (!product || !session) {
        res.status(400).send("All parameters must be provided!")
        return
    }
    sqlClient.query(`SELECT cart FROM users WHERE session_id = "${session}"`, (err, sqlRes) => {
        if (err) {
            console.log(err)
            res.status(500).send("Internal server error!")
            return
        }
        let oldCart = sqlRes[0].cart
        let cart
        if (!oldCart.trim()) {
            res.status(404).send("Your cart is empty!")
            return
        } else {
            cart = JSON.parse(oldCart).filter(element => element !== +product)
        }
        sqlClient.query(`UPDATE users SET cart = "${JSON.stringify(cart)}" WHERE session_id = "${session}"`, (err, sqlRes) => {
            if (err) {
                console.log(err)
                res.status(500).send("Internal server error!")
                return
            }
            res.status(200).send("Success!")
        })
    })
}