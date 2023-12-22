import express from 'express'
import { tourController } from '../controllers/tour.controller'

const router = express.Router()

router.route('/').post(tourController.createTour).get(tourController.getAllTour)
router
  .route('/:id')
  .get(tourController.getSingleTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour)

export const tourRoutes = router
