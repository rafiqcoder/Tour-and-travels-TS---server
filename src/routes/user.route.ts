import express from 'express';
import { userController } from '../controllers/user.controller';
const router = express.Router();

router
  .route('/')
  .get(userController.getAlluser)
    .post(userController.createUser)
router.route('/:id')
    .get(userController.getSingleUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser)
       

export const userRoutes = router;