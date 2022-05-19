const express =require("express")
const app =express()
 
const budget = require('./models/budget')

//middleware
app.use(express.static('public'));


// index
app.get('/budgets', (req, res) => {
    res.render('index.ejs')
})

// new
app.get('/budgets/new' ,(req, res) =>{
    res.render("new.ejs")
})

// show
app.get('/budgets/:index', (req, res) =>{
    res.send(budget[req.params.index])
})

// Post
app.post("/budgets", (req, res) => {
    res.send("hi")
  })


app.listen(3000, () => {
    console.log("listening..")
})