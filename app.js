const express = require("express")
const app = express()
const router = require("./routes/routes")



app.listen(3000 , () => console.log("on server..."));


app.use('/api' , router)