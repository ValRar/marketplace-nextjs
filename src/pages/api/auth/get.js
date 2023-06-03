// Тип POST параметры: email и password

import sqlClient from "../../../../components/sqlClient"

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send("Only post allowed!")
    return
  }
  const {password, email} = JSON.parse(req.body) // получение параметров
  sqlClient.query(`SELECT session_id AS token FROM users WHERE email = "${email}" AND password = "${password}"`, (err, queryRes) => {
    if (err) {
      console.log(err)
      return res.status(502).end()
    }
    if (queryRes.length === 0) {
      res.status(404).send(null)
      return
    }
    res.status(200).send(JSON.stringify(queryRes[0]))
  })
}