import { Schema, model } from 'mongoose'
import { Itour } from '../interfaces/tour.interface'

const tourSchema = new Schema<Itour>({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration'],
  },
  ratingAverage: {
    type: Number,
    default: 4.5,
  },
  ratingQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
  imageCover: {
    type: String,
    required: [true, 'A tour must have a cover image'],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  startDates: [Date],
  startLocation: {
    type: String,
    required: [true, 'A tour must have a start location'],
  },
  locations: [String],
  slug: String,
})

// tourSchema.pre(/^find/, function (this: Query<Itour, Document>, next) {
//   this.find({ userStatus: { $eq: 'active' } })
//   next()
// })

const Tour = model<Itour>('Tour', tourSchema)
export default Tour
