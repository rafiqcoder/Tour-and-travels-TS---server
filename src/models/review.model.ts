import { Schema, model } from 'mongoose'
import { IReview } from '../interfaces/review.interface'

const reviewSchema = new Schema<IReview>({
  review: {
    type: String,
    required: [true, 'A review must have a review'],
  },
  rating: {
    type: Number,
    required: [true, 'A review must have a rating'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
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
})

// tourSchema.pre(/^find/, function (this: Query<Itour, Document>, next) {
//   this.find({ userStatus: { $eq: 'active' } })
//   next()
// })

const Review = model<IReview>('Review', reviewSchema)
export default Review
