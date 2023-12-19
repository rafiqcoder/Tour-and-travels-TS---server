import { Schema, model } from 'mongoose'
import { Ibooking } from '../interfaces/booking.interface'

const bookingSchema = new Schema<Ibooking>({
  tour: {
    type: Schema.Types.ObjectId,
    ref: 'Tour',
    required: [true, 'A review must belong to a tour'],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'A review must belong to a user'],
  },
  price: {
    type: Number,
    required: [true, 'A review must have a price'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  paid: {
    type: Boolean,
    default: true,
  },
})

// tourSchema.pre(/^find/, function (this: Query<Itour, Document>, next) {
//   this.find({ userStatus: { $eq: 'active' } })
//   next()
// })

const Booking = model<Ibooking>('Review', bookingSchema)
export default Booking
