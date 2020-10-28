import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductsById,
  deleteProduct,
  updateProduct,
  createProduct,
  createProductReview,
} from '../controllers/productController.js';
import { protect, IsAdmin } from '../middleware/authMiddleware.js';

router.route('/').get(getProducts).post(protect, IsAdmin, createProduct);
router.route('/:id/reviews').post(protect, createProductReview);
router
  .route('/:id')
  .get(getProductsById)
  .delete(protect, IsAdmin, deleteProduct)
  .put(protect, IsAdmin, updateProduct);

export default router;
