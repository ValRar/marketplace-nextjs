import sqlClient from "../../../../components/sqlClient"

export default function handler(req, res) {
  const id = req.query.id
  if (!id) {
      return res.status(400).end()
  }
  sqlClient.query(`SELECT title, amount, rating, price, img, info FROM products WHERE id = ${id};`, (err, queryRes) => {
    if (err) {
      console.log(err)
      return res.status(502).end()
    }
    res.status(200).json(queryRes)
  })
}