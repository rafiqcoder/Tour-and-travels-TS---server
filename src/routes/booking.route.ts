import express from 'express'
import { bookingController } from '../controllers/booking.controller'


const router = express.Router()

router.route('/').get(bookingController.getAllBooking).post(bookingController.createBooking)
router
  .route('/:id')
  .get(bookingController.getSingleBooking)
  .patch(bookingController.updateBooking)
  .delete(bookingController.deleteBooking)

export const bookingRoutes = router
