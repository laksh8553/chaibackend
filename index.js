require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send("Login tp your account")
})
app.get('/home',(req,res)=>{
    res.send("this is homepage")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
