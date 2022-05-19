const express =require("express")
const app =express()
 
const budget = require('./models/budget')

//middleware
app.use(express.static('public'));


// index
app.get('/budgets', (req, res) => {
    res.render('index.ejs', { allBudget: budget});
})

// new
app.get('/budgets/new' ,(req, res) =>{
    res.render("new.ejs")
})

// show
app.get('/budgets/id', (req, res) =>{
    res.render('show.ejs',{ budgets: budget[req.params.id]});
});

// Post
app.post("/budgets", (req, res) => {
    res.send("hi")
  })


app.listen(3000, () => {
    console.log("listening..")
})