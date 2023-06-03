import sqlClient from "../../../../components/sqlClient";

function createReqText(idArr) {
    let queryText = "SELECT title, img, price, id FROM products WHERE "
    idArr.map(element => {
        queryText += `(id = ${element}) OR `
    });
    return queryText.slice(0, -3)
}

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
    const ids = await getIds(session)
    if (!ids) {
        res.status(404).send("Cart is empty!")
        return
    }
    sqlClient.query(createReqText(ids), (err, sqlRes) => {
        if (err) {
            res.status(500).send("Internal server error!")
            return
        }
        res.status(200).send(JSON.stringify(sqlRes))
    })
}

async function getIds(session_id) {
    const response = new Promise((resolve, reject) => {
        sqlClient.query(`SELECT cart FROM users WHERE session_id = "${session_id}"`, (err, sqlRes) => {
            if (err) {
                reject(err)
            }
            const cart = sqlRes[0].cart
            if (!cart.trim() || cart.trim() === "[]") {
                resolve(null)
            }
            resolve(JSON.parse(cart))
        })
    })
    return response
}

export async function getInfo(session_id) {
    const ids = await getIds(session_id)
    if (!ids) {
        return null
    }

    const response = new Promise((resolve, reject) => {
        sqlClient.query(createReqText(ids), (err, sqlRes) => {
            if (err) {
                reject(err)
            }
            resolve(sqlRes)
        })
    })
    return response
}