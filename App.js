//import the require module ==>
const express = require('express')
const ProductRoutes = require('./routes/product.route.js')
// const app = express()
const mongoose = require('mongoose');
const Product = require('./models/Products.js')

//create express application
const app = express()
//intermediary btw server side n client side(middleware)
app.use(express.json)
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res)=>{
    res.send('welcome to backend')
})

app.use('/api/products',ProductRoutes )

app.listen(3000, ()=>{
    console.log(`Server is running at port 3000`)
})


mongoose.connect(`mongodb+srv://adekanmisamuel4:UcKTfDHGyQOqQk41@cluster0.7nfzsln.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0` )

.then(() =>{
    console.log('Connection successful!!!!')

    app.get('/', (req, res)=>{
        res.send("welcome to express.js playground")
    })
})

.catch(()=>{
    console.log("connection failed!")
})

  


