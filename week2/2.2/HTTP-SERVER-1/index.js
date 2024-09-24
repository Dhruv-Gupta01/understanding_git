const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.post('/conversations', (req,res) => {
    console.log(req.headers)
    res.send('<b>Heyyy mann!<b>')
})

app.get('/', (req, res) => {
    console.log(req.body)
    setTimeout(function() {
        res.send("hello world")
    },2000)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})