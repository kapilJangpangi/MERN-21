import Product from '../models/productModal.js'
import asyncHandler from 'express-async-handler'

// @desc  Fetch all products
// @route GET/api/product
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const product = await Product.find({})
  res.json(product)
})

// @desc  Fetch single product
// @route GET/product/:id
// @access  Public
const getProductsById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found!')
  }
})

export { getProducts, getProductsById }
