const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const PORT= 3000

accounts = [
    {
      name:'Cash',
      debit: 10000,
      credit: 0
    },
    {
      name:'Account Recievable',
      debit: 2000,
      credit: 0
    },
    {
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




app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`)
})