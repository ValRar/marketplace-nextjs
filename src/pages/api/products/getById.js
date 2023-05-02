import sqlClient from "../../../../components/sqlClient"

export default async function handler(req, res) {
  const id = req.query.id
  if (!id) {
      return res.status(400).end()
  }
  const query = await getById(id)
  if (query){
    res.status(200).json(query)
  } else {
    res.status(500).send("Internal server error!")
  }
}

export function getById(id) {
  const response = new Promise((resolve, reject) => {
    sqlClient.query(`SELECT title, amount, rating, price, img, info FROM products WHERE id = ${id};`, (err, queryRes) => {
      if (err) {
        console.log(err)
        reject(err)
      }
      resolve(JSON.stringify(queryRes))
    })
  })
  return response
}