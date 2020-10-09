import express from 'express'
const router = express.Router()
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers
} from '../controllers/userController.js'
import { protect, IsAdmin } from '../middleware/authMiddleware.js'


router.route('/').post(registerUser).get(protect, IsAdmin, getUsers)
router.post('/login', authUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)



export default router
