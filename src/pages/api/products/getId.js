// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sqlClient from "../../../../components/sqlClient"

export default async function handler(req, res) {
  const query = await getId()
  if (query) {
    res.status(200).json(query)
  } else {
    res.status(500).send("Internal server error!")
  }
}

export function getId() {
  const response = new Promise((resolve, reject) => {
    sqlClient.query("SELECT id FROM products;", (err, queryRes) => {
      if (err) {
        console.log(err)
        reject(err)
      }
      resolve(JSON.stringify(queryRes))
    })
  })
  
  return response
}
