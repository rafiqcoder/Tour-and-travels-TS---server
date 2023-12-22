import { Schema, model } from 'mongoose'
import slugify from 'slugify'
import { ITourMethods, Itour, TTourModel } from '../interfaces/tour.interface'
const tourSchema = new Schema<Itour, TTourModel, ITourMethods>(
  {
    name: {
      type: String,
      required: [true, 'A tour must have a name'],
    },
    durationHours: {
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
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
)

tourSchema.virtual('durationDays').get(function () {
  return this.durationHours / 24
})

tourSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true })
  next()
})

tourSchema.methods.getNextNearestDateAndEndDate = function (): {
  nearestStartDate: Date | null
  estimatedEndDate: Date | null
} {
  const today = new Date()
  const futureDates = this.startDates.filter((startDate: Date) => {
    return startDate > today
  })

  futureDates.sort((a: Date, b: Date) => a.getTime() - b.getTime())
  const nearestStartDate = futureDates[0]
  const estimatedEndDate = new Date(
    nearestStartDate.getTime() + this.durationHours * 60 * 60 * 1000,
  )
  return {
    nearestStartDate,
    estimatedEndDate,
  }
}

// tourSchema.pre(/^find/, function (this: Query<Itour, Document>, next) {
//   this.find({ userStatus: { $eq: 'active' } })
//   next()
// })

const Tour = model<Itour,TTourModel>('Tour', tourSchema)
export default Tour
