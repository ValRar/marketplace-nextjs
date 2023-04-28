// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sqlClient from "../../../../components/sqlClient"

export  default async function handler(req, res) {
  const query = await getBasic()
  if (query) {
    res.status(200).json(query)
  } else {
    res.status(500).send("Internal server error!")
  }
}

export function getBasic() {
  const response = new Promise((resolve, reject) => {
    sqlClient.query("SELECT id, title, amount, rating, price, img FROM products;", function(err, queryRes) {
      if (err) {
        reject(err)
      }
      resolve(JSON.stringify(queryRes))
  })
  

  })
  return response
}
