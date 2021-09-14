const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send("Hello world"))
app.get('/contact', (req, res) => res.send("Hello contact"))
app.get('/user', (req, res) => res.send("Hello user"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))