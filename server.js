const express =require("express")
const app =express()
 
const budget = require('./models/budget')

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));


// index
app.get('/budgets', (req, res) => {
    res.render('index.ejs', { allBudget: budget});
})

// new
app.get('/budgets/new' ,(req, res) =>{
    res.render("new.ejs")
})

// show
app.get('/budgets/:id', (req, res) =>{
    res.render('show.ejs',{ budgets: budget[req.params.id]});
});

// Post
app.post("/budgets", (req, res) => {
    budget.push(req.body)
    console.log(budget)
    res.redirect("/budgets") 
  })


app.listen(3000, () => {
    console.log("listening..")
})