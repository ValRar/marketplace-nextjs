import sqlClient from "../../../../components/sqlClient";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.status(405).send("Only post allowed!")
        return
    }
    const {session} = JSON.parse(req.body)
    // const {session} = req.body

    if (!session) {
        res.status(400).send("All parameters must be provided!")
        return
    }
    sqlClient.query(`SELECT cart FROM users WHERE session_id = "${session}"`, (err, sqlRes) => {
        if (err) {
            res.status(500).send("Internal server error!")
            return
        }
        const cart = sqlRes[0].cart
        if (!cart.trim()) {
            res.status(200).send(JSON.stringify([]))
            return
        }
        res.status(200).send(JSON.stringify(cart))
    })
}

export async function getCart(session_id) {
    const response = new Promise((resolve, reject) => {
        sqlClient.query(`SELECT cart FROM users WHERE session_id = "${session_id}"`, (err, sqlRes) => {
            if (err) {
                reject(err)
            }
            if (sqlRes[0]) resolve([])
            const cart = sqlRes[0].cart
            if (!cart.trim()) {
                resolve([])
            }
            resolve(cart)
        })
    })
    return response
}