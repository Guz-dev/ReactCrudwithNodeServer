import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import productsRouter from './src/routes/products.route.js'

dotenv.config()

const app = express()

app.use(cors())

app.use(express.json())

app.use('/api', productsRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
