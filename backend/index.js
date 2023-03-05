// ID 6310210150
// Password : ommy18345
// Token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6IjYzMTAyMTAxNTAiLCJDdXNfSUQiOjMsImlhdCI6MTY3Nzc0OTU3MCwiZXhwIjoxNjc4MDA4NzcwfQ.cJPdiEwVjFmPWDTaTJsghuYPwRoijWmJYCQLzJbmlgY

const bcrypt = require('bcrypt')
const SALT_ROUNDS = 10

const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
const TOKEN_SECRET = process.env.TOKEN_SECRET
const bodyParser = require('body-parser');



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
const { query } = require('express')
const app = express()
const port = 4000

app.use((req,res,next) => {
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','Origin, X-Requested-With ,Content-Type,Accept');
  next()
})



/* ================     Token      ================ */

function autheticateToken(req , res , next){
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null ) return res.sendStatus(401)
  jwt.verify(token,TOKEN_SECRET, (err,customer) => {
      if(err) { return res.sendStatus(403) }
      else {
          req.customer = customer
          next()
      }
  })
} 

/* =============== Account ================ */
// =====  Login     =====
app.post("/login" , (req,res) => {
  let Username = req.query.Username;
  let password = req.query.Password;

  let query = `SELECT * FROM customer WHERE Username = "${Username}" `

  connection.query(query ,(err,row) => {
      if(err){
          res.json({
              "STATUS" : "400" ,
              "MESSAGE" : "Error noting in Databesssssssss "
          })
      }else{
          let db_password = row[0].Password
          bcrypt.compare(password, db_password , (err,result) => {
              if(result){
                  let payload = {
                      "Username" : row[0].Username,
                      "Cus_ID" : row[0].Cus_ID,
                  }
                  let token = jwt.sign(payload , TOKEN_SECRET , {expiresIn : '3d'})
                  res.send(token)
              }else {res.send(`${db_password} ${password}` )}
          })
      }
  })
})


// =====  Register  =====
app.post('/register',(req,res) => {
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

// ===== Sitting ===== //
app.post("/Setting",autheticateToken , (req,res) => {
  let customer_profie = req.customer
  console.log(customer_profie)

  let cus_id = req.customer.Cus_ID;

  const Email = req.query.Email;
  const bio = req.query.bio;
  const job = req.query.job;

  let query = `UPDATE customer SET 
              Email='${Email}',
              bio='${bio}',job='${job}' 
              WHERE cus_id = ${cus_id} `
  connection.query(query,(err,rows) =>{
    console.log(err)
    if (err){
      res.json({
        "STATUS" : "400",
        "MESSAGE" : "ERROR can't update coffee"
      })
    }else{
      res.json({
        "STATUS" : "200",
        "MESSAGE" : `Updating ${cus_id} succesful`
      })
    }
  })
})

// ===== TOPUP =====
app.post("/Topup",autheticateToken , (req,res) => {
  let customer_profie = req.customer
  console.log(customer_profie)
  let cus_id = req.customer.Cus_ID;

  const topup = req.query.topup;

  let query = `UPDATE customer SET 
              amount= amount + ${topup}
              WHERE cus_id = ${cus_id} `
  connection.query(query,(err,rows) =>{
    console.log(err)
    if (err){
      res.json({
        "STATUS" : "400",
        "MESSAGE" : `ERROR can't update)
        }`
      })
    }else{
      res.json({
        "STATUS" : "200",
        "MESSAGE" : `Updating ${cus_id} succesful`
      })
    }
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

// ===== Insert Coure ===== //
app.post("/addCoure",(req,res) =>{
  let Coures_Name = req.query.Coures_Name
  let Course_price = req.query.Course_price
  let Course_desc = req.query.Course_desc
  let makeBy = req.query.makeBy

} )

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

// ===== Buy_course =====
app.post("/buycourse",autheticateToken , (req,res) => {
  let customer_profie = req.customer
  console.log(customer_profie)
  let cus_id = req.customer.Cus_ID;

  const Course_ID = req.query.Coures_ID;
  const Course_price = req.query.Course_price;


  let query = `UPDATE customer SET 
              amount= amount - ${Course_price}
              WHERE cus_id = ${cus_id} `
  connection.query(query,(err,rows) =>{
    console.log(err)
    if (err){
      res.json({
        "STATUS" : "400",
        "MESSAGE" : `ERROR can't update)
        }`
      })
    }else{
      res.json({
        "STATUS" : "200",
        "MESSAGE" : `Updating ${cus_id} succesful`
      })
    }
  })
})


app.listen(port, () => {
    console.log(`Example app listening on port 3000`)
  })