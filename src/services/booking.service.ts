import { Ibooking } from "../interfaces/booking.interface"
import Booking from "../models/booking.model"

const createBooking = async (bookingData: Ibooking): Promise<Ibooking> => {
  const result = await Booking.create(bookingData)
  return result
}

const getAllBooking = async (): Promise<Ibooking[]> => {
  const result = await Booking.find()
  return result
}

const getSingleBooking = async (id: string): Promise<Ibooking | null> => {
  const result = await Booking.findById(id)
  return result
}

const updateBooking = async (
  id: string,
  bookingData: Ibooking,
): Promise<Ibooking | null> => {
  const result = await Booking.findByIdAndUpdate(id, bookingData, {
    new: true,
    runValidators: true,
  })
  return result
}

const deleteBooking = async (id: string): Promise<Ibooking | null> => {
  const result = await Booking.findByIdAndDelete(id)
  return result
}

export const bookingServices = {
  createBooking,
  getAllBooking,
  getSingleBooking,
  updateBooking,
  deleteBooking,
}
