const express = require('express')
const { getProducts } = require('./controllers/productControllers')
const cors = require('cors')

const app = express()
const PORT = 5000

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.listen(PORT, ()=>{
    console.log('Server is running...')
})


app.get('/products', getProducts)