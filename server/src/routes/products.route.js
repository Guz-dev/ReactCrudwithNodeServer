import { Router } from 'express'
import { getProducts, addProduct, updateProduct, deleteProduct } from '../api/products.js'

const productsRouter = Router()

// READ ✅
productsRouter.get('/products', async (req, res) => {
  const products = await getProducts()

  res.json(products)
})

// CREATE ✅
productsRouter.post('/products', async (req, res) => {
  const product = req.body
  const products = await addProduct(product)

  res.json(products)
})

// UPDATE ✅
productsRouter.put('/products/:id', async (req, res) => {
  const { id } = req.params
  const product = req.body

  const products = await updateProduct(id, product)

  res.json(products)
})

// DELETE ✅
productsRouter.delete('/products/:id', async (req, res) => {
  const { id } = req.params
  const products = await deleteProduct(id)

  res.json(products)
})

export default productsRouter
