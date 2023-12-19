import express from 'express'
import { tourController } from '../controllers/tour.controller'

const router = express.Router()

router.route('/').get(tourController.getAllTour).post(tourController.createTour)
router
    .route('/:id')
    
  .get(tourController.getSingleTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour)

export const tourRoutes = router
