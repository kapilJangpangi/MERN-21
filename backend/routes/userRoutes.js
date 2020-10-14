import express from 'express'
const router = express.Router()
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,//admin
  deleteUser,//admin
  getUserById,//admin
  updateUser,//admin

} from '../controllers/userController.js'
import { protect, IsAdmin } from '../middleware/authMiddleware.js'


router.route('/').post(registerUser).get(protect, IsAdmin, getUsers)
router.post('/login', authUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
  
router.route('/:id').delete(protect, IsAdmin, deleteUser).get(protect, IsAdmin, getUserById).put(protect, IsAdmin, updateUser)



export default router
