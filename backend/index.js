// ID 6310210150
// Password : ommy18345
// Token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6IjYzMTAyMTAxNTAiLCJDdXNfSUQiOjMsImlhdCI6MTY3Nzc0OTU3MCwiZXhwIjoxNjc4MDA4NzcwfQ.
//         cJPdiEwVjFmPWDTaTJsghuYPwRoijWmJYCQLzJbmlgY

const bcrypt = require('bcrypt')
const SALT_ROUNDS = 10

const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
const TOKEN_SECRET = process.env.TOKEN_SECRET



//-----Connet SQL DB-----//

const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'admin',
  database: 'coursestudy_se' 
})

connection.connect()
if(connection.connect){
    console.log(`Example app listening on port`)
}

const express =require('express')
const jsonwebtoken = require('jsonwebtoken')
const app = express()
const port = 3000



/* ================           ================ */

function autheticateToken(req , res , next){
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null ) return res.sendStatus(401)
  jwt.verify(token,TOKEN_SECRET, (err,user) => {
      if(err) { return res.sendStatus(403) }
      else {
          req.user = user
          next()
      }
  })
}

/* =============== Account ================ */
// =====  Login     =====
app.get("/login" , (req,res) => {
  let Username = req.query.Username
  let Password = req.query.Password

  let query = `SELECT * FROM customer WHERE Username = '${Username}'`

  connection.query(query ,(err,row) => {
      if(err){
          console.log(err)
          res.json({
              "STATUS" : "400" ,
              "MESSAGE" : "Error noting in Databesssssssss "
          })
      }else{
          let db_password = row[0].Password
          bcrypt.compare(Password, db_password , (err,result) => {
              if(result){
                  let payload = {
                      "Username" : row[0].Username,
                      "Cus_ID" : row[0].Cus_ID,
                  }
                  console.log(payload)
                  let token = jwt.sign(payload , TOKEN_SECRET , {expiresIn : '3d'})
                  res.send(token)
              }else {res.send(`Inalid usernaem${Password} / password${db_password}`)}
          })
      }
  })
})


// =====  Register  =====
app.get('/register',(req,res) => {
  const Username = req.query.Username;
  const Password = req.query.Password;
  const Email = req.query.Email;

  bcrypt.hash(Password,SALT_ROUNDS,(err,hash) => {
    let query = `INSERT INTO customer
                (Username,Password,Email,Amount)
                VALUES ('${Username}','${hash}','${Email}',0)`

    console.log(query)
    connection.query(query,(err,rows) => {
        console.log(err)
    if (err){
        res.json({
                "status" : "400",
                "message" : "Error querying from custom db"
            })
    }else{
        res.json({
                "status" : "200",
                "message" : "Add new user succesful"
        })
    }
    })
    })
  })
/* ======================================== */

/* =============== Coure Meg ================ */
// ===== ALL COURE =====
app.get("/list_coure",(req,res) => {
    let query = `SELECT * from course`
    connection.query(query,(err,row) => {
        if(err){
            res.json({
                "STATUS" : "400",
                "MESSAGE" : "Error querying from coffee db"
            })
        }else{
            res.json(row)
        }
    })
})

// ===== search_course ===== 
app.get('/search_course',(req,res) => {
  const Course_Name = req.query.Coures_Name;

  let query = `
  SELECT * 
  FROM course
  WHERE Course_name = ${Course_Name} `

    connection.query(query,(err,rows) => {
        if (err){
            res.json({
                    "status" : "400",
                    "message" : "Error querying from"
                } )
        }else{
            res.json(rows)
        }
    })
}) 

app.listen(port, () => {
    console.log(`Example app listening on port 3000`)
  })