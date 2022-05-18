const express =require("express")
const app =express()
 
const budget = require('./models/budget')



app.get("/", (req,res) => {
    res.send("Budgtr HW")
})

// index
app.get('/budgets', (req, res) =>{
    res.send(budget)
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