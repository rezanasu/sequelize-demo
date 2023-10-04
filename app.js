const express = require('express')
const app = express()
const port = 3000
const router = require("./routes")


// Menerima request body dari postman
app.use(express.json())

// Menerima request urlencoded dari postman
app.use(express.urlencoded({extended: false}))

app.use(router);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})