// тип POST параметры: email и password
import sqlClient from "../../../../components/sqlClient"
import tokenGenerator from "../../../../components/tokenGenerator"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send("Only post allowed!")
    return
  }
  const {password, email} = JSON.parse(req.body) // получение параметров
  console.log(req.body)
  sqlClient.query(`SELECT session_id FROM users WHERE email = "${email}"`, (err, queryRes) => {
    if (err) {
      console.log(err)
      res.status(500).send("Internal server error!")
      return
    }
    if (queryRes.length > 0) {
      res.status(400).send("This user already exists!")
      return
    }
  })
  const token = tokenGenerator()
    sqlClient.query(`INSERT INTO users(session_id, email, password) VALUES ("${token}", "${email}", "${password}")`, (err) => {
    if (err) {
      console.log(err)
      res.status(500).send("Unexpected server error!")
      return
    }
  })
  res.status(200).json({token: token})
}