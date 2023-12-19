import express from 'express'
import { reviewController } from '../controllers/review.controller'


const router = express.Router()

router.route('/').get(reviewController.getAllReview).post(reviewController.createReview)
router
  .route('/:id')
  .get(reviewController.getSingleReview)
  .patch(reviewController.updateReview)
  .delete(reviewController.deleteReview)

export const reviewRoutes = router
