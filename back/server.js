const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const PORT= 3000

let ids = 3;

const accounts = [
    {
      id: 0,
      name:'Cash',
      debit: 10000,
      credit: 0
    },
    {
      id:1,
      name:'Account Recievable',
      debit: 2000,
      credit: 0
    },
    {
      id:2,
      name:'Prepaid building rent',
      debit: 0,
      credit: 12000
    }
  ]

 // for parsing and delevering the json
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended: true}) );

 // for google auth and allowing passing headers from server to app
 app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
  });

  app.get('/', (req, res) => {
    res.send({
        msg: 'Welcome to Accounting Backend'
    })
})

app.get('/accounts', (req,res) => {
    res.send({data: accounts})
})

app.post('/addAccount', (req,res) => {
    console.log(req.body)
    res.setHeader("Content-Type", "text/html")
    req.body.id = ids++;
    accounts.push(req.body)
    // console.log(accounts)
    res.redirect('http://localhost:4200')
})

app.put('/editAccount/:id', (req,res) => {
    console.log(req.body)
    let account = req.body
    let selectedAccount = accounts.find( (_account) => _account.id == account.id)
    if(selectedAccount){
        selectedAccount.credit = parseInt(account.credit)
        selectedAccount.debit = parseInt(account.debit)
    }
})


app.all('/account/:id', (req,res) => {
    console.log('test delete-->',req.url)
    let url = req.url
    let urlSplit = url.split('/')
    let id = urlSplit[2]
    console.log('id-->',id)

    let account = accounts.find( (account) => account.id == id)
    let index = account.id
    console.log(index)

    console.log(accounts)
   
    accounts.splice(index , 1)

   res.redirect('http://localhost:4200')
})




app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`)
})