const express = require('express')
const app = express()

//handling the CORS error - Cross origin resource sharing error
const cors = require('cors')
const { parse } = require('path')

//using the cors middleware to enable CORS-cross origin resource sharing
app.use(cors())

app.get('/sum',(req,res) => {
    //the 2 integers are passed using the query parameters
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    const sum = a + b;
    res.send(sum.toString())
})

app.get('/difference',(req,res) => {
    //the 2 integers are passed using the query parameters
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const diff = Math.abs(a-b)
    res.send(diff.toString())
})

app.get('/product',(req,res) => {
    //the 2 integers are passed using the query parameters
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const product = a*b
    res.send(product.toString())
})

app.get('/simpleint',(req,res)=> {
    //3 variables principal, rate of interest and time
    const p = parseFloat(req.query.p);
    const roi = parseFloat(req.query.roi);
    const t = parseFloat(req.query.t);
    const simpleint = (p*roi*t)/100;
    res.send(simpleint.toString())
})

app.listen(3000)