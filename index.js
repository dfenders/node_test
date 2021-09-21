const express = require('express')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')

const app = express()
const port = 3000


app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'assets')))
app.use(expressLayouts)


app.get('/', (req, res) => {   
    //if this user is logged in 
    let user = {"name":"Mike","title":"Index"};
    res.render('index',user)
})
app.get('/about', (req, res) => res.render("about",{"title":"about"}))
app.get('/user', (req, res) => res.send("Hello user"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))