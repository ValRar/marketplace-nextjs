import sqlClient from "../../../../components/sqlClient"

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send("Only post allowed!")
    return
  }
  const {name, amount, price, info, images, properties} = JSON.parse(req.body)
  if (!name || !amount || !price || !info || !images || !properties) {
    res.status(400).send("All parameters must be provided!")
    return
  }
  sqlClient.query(`INSERT INTO products(title, amount, img, info, price, properties) VALUES ("${name}", ${amount}, '${JSON.stringify(images)}', "${info}", ${price}, "${properties}")`, (err, sqlRes) => {
    if (err) {
        console.log(err)
        res.status(500).send("Internal Server error!")
        return
    }
    res.status(200).send("Success!")
  })
}