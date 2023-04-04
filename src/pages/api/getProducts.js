// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sqlClient from "../../../components/sqlClient"

export default function handler(req, res) {
  sqlClient.query("SELECT * FROM products;", (err, queryRes) => {
    if (err) {
      console.log(err)
      return res.status(502).end()
    }
    res.status(200).json(queryRes)
  })
}
